import { getUsers } from "@/lib/api";

export const Users = async () => {
  const Users = await getUsers();

  return (
    <ul>
      {Users.map((user, key) => (
        <li key={key}>
          <span>id: {user.id}</span>
        </li>
      ))}
    </ul>
  );
};
