// import { cookies } from "next/headers";
// import { generateState } from "arctic";

// import { github } from "@/lib/auth/github";

export const runtime = "edge";

export async function GET(): Promise<Response> {
  // const state = generateState();
  // const url = await github.createAuthorizationURL(state);

  // cookies().set("github_oauth_state", state, {
  //   path: "/",
  //   secure: process.env.NODE_ENV === "production",
  //   httpOnly: true,
  //   maxAge: 60 * 10,
  //   sameSite: "lax",
  // });

  // return Response.redirect(url);
  return new Response(null, {
    status: 400,
  });
}
