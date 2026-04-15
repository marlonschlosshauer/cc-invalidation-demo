import { revalidatePath, revalidateTag } from "next/cache";
import { Button } from "./Button";

const nukeBar = async () => {
  "use server";
  revalidatePath("/bar");
};

export const InvalidateBar = () => {
  return (
    <form action={nukeBar}>
      <Button>
        <p>
          Revalidate <code>/bar</code>
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

const nukeUsers = async () => {
  "use server";
  revalidateTag("users", "max");
};

export const InvalidateUsers = () => {
  return (
    <form action={nukeUsers}>
      <Button>
        <p>Revalidate Users</p>
      </Button>
    </form>
  );
};
