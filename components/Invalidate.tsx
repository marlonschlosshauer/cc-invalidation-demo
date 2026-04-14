import { revalidatePath } from "next/cache";

const nuke = async () => {
  "use server";
  revalidatePath("/blog");
};

export const Invalidate = () => {
  return (
    <form action={nuke}>
      <button>Nuke cache</button>
    </form>
  );
};
