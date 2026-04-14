export const getPosts = async () => {
  "use cache";

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
