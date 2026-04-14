import { revalidatePath, revalidateTag } from "next/cache";

const nukeBlog = async () => {
  "use server";
  revalidatePath("/blog");
};

export const InvalidateBlog = () => {
  return (
    <form action={nukeBlog}>
      <button>
        Revalidate <code>/blog</code>
      </button>
    </form>
  );
};

const nukePosts = async () => {
  "use server";
  revalidateTag("posts", "max");
};

export const InvalidatePosts = () => {
  return (
    <form action={nukePosts}>
      <button>Revalidate Posts</button>
    </form>
  );
};
