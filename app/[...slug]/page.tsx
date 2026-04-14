import { InvalidateBlog, InvalidatePosts } from "@/components/Invalidate";
import { Posts } from "@/components/Posts";

export const generateStaticParams = () => {
  return [{ slug: ["foo"] }, { slug: ["bar"] }, { slug: ["baz"] }];
};

export default async function Slug({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;

  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      Welcome to {"/" + slug.join("/")}
      <Posts />
      <div>
        <InvalidateBlog />
        <br />
        <InvalidatePosts />
      </div>
    </main>
  );
}
