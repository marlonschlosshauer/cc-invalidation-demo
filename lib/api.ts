import { cacheLife, cacheTag } from "next/cache";

export const getPosts = async () => {
  "use cache";

  cacheTag("posts");
  cacheLife("max");

  return [
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    },
  ];
};
