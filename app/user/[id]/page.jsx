"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function UserProfile() {

  const router = useRouter(); 
  const params = useParams();
  const id = params.id; // Use 'name' as the dynamic segment matches [name] in the URL

  const [userinfo, setuserinfo] = useState({});

  console.log(userinfo);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json(); // Parse response to JSON
        setuserinfo(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <h1 className="text-4xl font-bold text-orange-600">Welcome, {userinfo.firstName}!</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is the dynamic <span className="font-semibold">profile</span> page
        for <span className="font-semibold">{userinfo.firstName}</span>.
      </p> 
      <button
        onClick={() => router.push(`/user/${userinfo.id}/info`)}
        className="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:shadow-md"
      >
       get all info about {userinfo.firstName}
      </button>
    </main>
  );
}
