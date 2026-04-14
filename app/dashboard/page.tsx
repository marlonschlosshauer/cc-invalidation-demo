import { Invalidate } from "@/components/Invalidate";
import { Posts } from "@/components/Posts";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      Welcome to dashboard
      <Posts />
      <Invalidate />
    </main>
  );
}
