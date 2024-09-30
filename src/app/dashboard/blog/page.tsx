import { redirect } from "next/navigation";

import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { PostCreateButton } from "@/components/post-create-button";
import { PostItem } from "@/components/post-item";
import { DashboardHeader } from "@/app/dashboard/_components/header";
import { DashboardShell } from "@/app/dashboard/_components/shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  // const user = await getCurrentUser();

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login");
  // }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: "desc",
  //   },
  // });

  const posts = [];

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-border divide-y rounded-md border">
            {/* {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))} */}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
