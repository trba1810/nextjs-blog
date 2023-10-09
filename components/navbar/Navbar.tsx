"use client";

import React from "react";
import { SafeUser } from "@/types";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

export default function Navbar({ currentUser }: UserMenuProps) {
  return (
    <header>
      <nav className="bg-gray-200 flex justify-between px-4 py-6 shadow-xl">
        <div>{currentUser?.name}</div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href={currentUser ? "/create" : "/register"}>Create</Link>
          {currentUser ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <Link href={"/register"}></Link>
          )}
        </div>
      </nav>
    </header>
  );
}
