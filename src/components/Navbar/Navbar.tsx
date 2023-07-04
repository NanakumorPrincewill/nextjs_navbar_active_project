"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { links } from "./data";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex mx-5 border-indigo-500 border-b-4 py-3 items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Kura
      </Link>
      <div className="hidden md:flex gap-5 ">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={
              pathname === `${link.url}` ? "text-blue-500 font-bold " : ""
            }
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="">
        <Link href="/f" className="mx-3">
          Sign Up
        </Link>
        <Link href="/4" className="">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
