import { getPosts } from "@/lib/api";

export const Posts = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post, key) => (
        <li key={key}>
          <span>id: {post.id}</span>
          {" | "}
          <span>date: {post.date}</span>
        </li>
      ))}
    </ul>
  );
};
