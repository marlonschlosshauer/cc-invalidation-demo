import {
  InvalidateBar,
  InvalidatePosts,
  InvalidateUsers,
} from "@/components/Invalidate";

export default function Admin() {
  return (
    <>
      <InvalidateBar />
      <br />
      <InvalidatePosts />
      <br />
      <InvalidateUsers />
      <br />
    </>
  );
}
