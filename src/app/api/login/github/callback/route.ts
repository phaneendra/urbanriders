import { cookies } from "next/headers";
import { GitHubEmail, GitHubUser } from "@/types";
import { OAuth2RequestError } from "arctic";

import { siteConfig } from "@/config/site";
import {
  createGithubUser,
  getAccountByGithubId,
  github,
} from "@/lib/auth/github";
import { setSession } from "@/lib/auth/sessions";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubUser = await githubUserResponse.json();

    const existingAccount = await getAccountByGithubId(githubUser.id);

    if (existingAccount) {
      await setSession(existingAccount.userId);
      return new Response(null, {
        status: 302,
        headers: {
          Location: siteConfig.loginCallbackUrl,
        },
      });
    }

    if (!githubUser.email) {
      const githubUserEmailResponse = await fetch(
        "https://api.github.com/user/emails",
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        }
      );
      const githubUserEmails = await githubUserEmailResponse.json();

      githubUser.email = getPrimaryEmail(githubUserEmails);
    }

    const userId = await createGithubUser(githubUser);
    await setSession(userId);
    return new Response(null, {
      status: 302,
      headers: {
        Location: siteConfig.loginCallbackUrl,
      },
    });
  } catch (e) {
    console.error(e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

function getPrimaryEmail(emails: GitHubEmail[]): string {
  const primaryEmail = emails.find((email) => email.primary);
  return primaryEmail!.email;
}
