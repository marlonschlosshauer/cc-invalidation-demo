import { getRelated } from "@/lib/api";

export default async function NotFound() {
  const related = await getRelated();

  return (
    <div>
      <code>{JSON.stringify(related)}</code>
    </div>
  );
}
