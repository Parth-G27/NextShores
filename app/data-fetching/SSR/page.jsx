// Server Component: Fetches data and passes it to the client component
import UsersList from "@/components/userList";

export default async function Page() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const users = data.users;

  return <UsersList users={users} />;
}
