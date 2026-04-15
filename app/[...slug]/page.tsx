import { Posts } from "@/components/Posts";
import { Users } from "@/components/Users";

export const generateStaticParams = () => {
  return [{ slug: ["foo"] }, { slug: ["bar"] }, { slug: ["baz"] }];
};

export default async function Slug({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;

  return (
    <>
      <p> Welcome to {"/" + slug.join("/")}</p>
      <Posts />
      <br />
      <Users />
    </>
  );
}
