import { siteConfig } from "@/config/site";
import { loginWithMagicLink } from "@/lib/auth/magic-link";
import { setSession } from "@/lib/auth/sessions";

export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/signin",
        },
      });
    }

    const user = await loginWithMagicLink(token);

    await setSession(user.id);

    return new Response(null, {
      status: 302,
      headers: {
        Location: siteConfig.loginCallbackUrl,
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/signin/magic/error",
      },
    });
  }
}
