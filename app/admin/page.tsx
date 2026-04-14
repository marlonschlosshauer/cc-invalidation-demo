import { InvalidateBar, InvalidatePosts } from "@/components/Invalidate";

export default function Admin() {
  return (
    <>
      <InvalidateBar />
      <br />
      <InvalidatePosts />
      <br />
    </>
  );
}
