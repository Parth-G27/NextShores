// Client Side Rendering method

"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const  name = params.name;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json(); // Parse response to JSON
        setUsers(data.users);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-8">
      <p className="mt-4 text-3xl font-medium text-orange-600">Users</p>
      <ul className="w-full max-w-lg mt-8 space-y-2">
        {users &&
          users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between p-2 rounded-md bg-gray-100 hover:bg-orange-100 transition-all duration-200"
            >
              <span className="text-lg font-medium">{user.firstName}</span>
              <button
                onClick={() => router.push(`/user/${user.id}`)} 
                className="text-orange-600 hover:underline transition-all duration-200"
              >
                View Profile
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Page;
