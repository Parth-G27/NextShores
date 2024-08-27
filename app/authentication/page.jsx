"use client";
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white fixed w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              NextShores
            </Link>
          </div>
          {/* <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-medium">
              Contact
            </Link>
          </div> */}
          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <p className="text-lg text-orange-500">Loading...</p>
            ) : session ? (
              <>
                <p className="text-lg font-medium text-orange-700">
                  Hi, {session.user?.name}!
                </p>
                <button
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  onClick={() => signOut({ callbackUrl: `${process.env.NEXTAUTH_URL}` })}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                onClick={() => signIn('github', { callbackUrl: `${process.env.NEXTAUTH_URL}/authentication` })}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
