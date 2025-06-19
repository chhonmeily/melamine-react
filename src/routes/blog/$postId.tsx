import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postId")({
  loader: async ({ params }) => {
    const postId = params.postId;
    const post = { id: postId, title: `Post ${postId}` };
    return { post };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = useLoaderData({ from: Route.id });

  return (
    <div>
      {post.id} {post.title}
    </div>
  );
}
