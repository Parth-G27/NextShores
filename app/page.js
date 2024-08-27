"use client";
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from "next/image";
import Navbar from '@/components/navbar'

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      
      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto text-center">
        <div className="relative z-10 py-14 px-8 md:py-10 lg:py-24">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            Explore. Learn. Build.
          </h1>
          <p className="mt-6 text-xl font-semibold md:text-3xl text-gray-700">
            Discover the power of Next.js, Tailwind CSS, ShadCN and many more in a sleek, modern environment.
          </p>
        </div>
      </div>

      {/* Additional Content */}
      <div id="learn-more" className="mt-2 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-600">Whats does this repo aims for ?</h2>
        <p className="mt-4 text-lg font-medium text-black">
          Embark on a journey where modern technology meets intuitive design while aiming to learn the tech and play around with them in a sandbox enviroment
        </p>
      </div>
      <div id="explore" className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-orange-600">What do we aim to Build?</h2>
        <p className="mt-4 text-lg font-medium text-black">
          Home ground for simple and conceptual coponents for complex projects and small by havesting the tech stacks
        </p>
      </div>
    </main>
    </>
  );
}
