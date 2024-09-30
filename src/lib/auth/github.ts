import { GitHubUser } from "@/types";
import { GitHub } from "arctic";

import { env } from "@/config/env";
import {
  getAccountByGithubId as dbAccountByGithubId,
  createAccountViaGithub as dbCreateAccountViaGithub,
} from "@/lib/auth/dataaccess/accounts.db";
import {
  createUser as dbCreateUser,
  getUserByEmail as dbGetUserByEmail,
} from "@/lib/auth/dataaccess/users.db";
import { createProfile } from "@/lib/profile";

export const github = new GitHub(
  env.GITHUB_CLIENT_ID!,
  env.GITHUB_CLIENT_SECRET!
);

export async function getAccountByGithubId(githubId: string) {
  return await dbAccountByGithubId(githubId);
}

export async function createGithubUser(githubUser: GitHubUser) {
  let existingUser = await dbGetUserByEmail(githubUser.email);

  if (!existingUser) {
    existingUser = await dbCreateUser(githubUser.email);
  }

  await dbCreateAccountViaGithub(existingUser.id, githubUser.id);

  await createProfile(existingUser.id, githubUser.login, githubUser.avatar_url);

  return existingUser.id;
}
