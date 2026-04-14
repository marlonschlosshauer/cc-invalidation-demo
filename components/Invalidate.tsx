import { revalidatePath, revalidateTag } from "next/cache";
import { Button } from "./Button";

const nukeBlog = async () => {
  "use server";
  revalidatePath("/blog");
};

export const InvalidateBlog = () => {
  return (
    <form action={nukeBlog}>
      <Button>
        <p>
          Revalidate <code>/blog</code>
        </p>
      </Button>
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
      <Button>
        <p>Revalidate Posts</p>
      </Button>
    </form>
  );
};
