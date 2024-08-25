"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function profile() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

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
      <p className="mt-4 text-lg text-gray-700">
        This is the info page for{" "}
        <span className="font-semibold text-orange-500">{userinfo.firstName}</span>.
      </p>
      <p className="mt-4 text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-0">
        <span className="font-semibold text-orange-500 ">lastName:</span>
        <span className="text-gray-700">{userinfo.lastName}</span>
        <span className="font-semibold text-orange-500">Age:</span>
        <span className="text-gray-700">{userinfo.age}</span>
        <span className="font-semibold text-orange-500">Email ID:</span>
        <span className="text-gray-700">{userinfo.email}</span>
        <span className="font-semibold text-orange-500">BirthDate:</span>
        <span className="text-gray-700">{userinfo.birthDate}</span>
        <span className="font-semibold text-orange-500">gender:</span>
        <span className="text-gray-700">{userinfo.gender}</span>
        <span className="font-semibold text-orange-500">university:</span>
        <span className="text-gray-700">{userinfo.university}</span>
        <span className="font-semibold text-orange-500">phone:</span>
        <span className="text-gray-700">{userinfo.phone}</span>
      </p>

      <button
        onClick={() => router.push(`/user/${userinfo.id}`)}
        className="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:shadow-md"
      >
        Go to {userinfo.firstName}'s profile
      </button>
    </main>
  );
}