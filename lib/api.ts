import { cacheLife, cacheTag } from "next/cache";

export const getPosts = async () => {
  "use cache";

  cacheTag("posts");
  cacheLife("max");

  return [
    {
      date: new Date().toISOString(),
    },
    {
      date: new Date().toISOString(),
    },
    {
      date: new Date().toISOString(),
    },
  ];
};

export const getUsers = async () => {
  "use cache";

  cacheTag("users");
  cacheLife("max");

  return [
    {
      id: crypto.randomUUID(),
    },
    {
      id: crypto.randomUUID(),
    },
    {
      id: crypto.randomUUID(),
    },
  ];
};
