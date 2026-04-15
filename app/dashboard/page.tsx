import { Posts } from "@/components/Posts";
import { Users } from "@/components/Users";

export default function Dashboard() {
  return (
    <>
      <p> Welcome to Dashboard</p>
      <Posts />
      <br />
      <Users />
    </>
  );
}
