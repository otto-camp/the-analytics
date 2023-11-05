"use client";
import { links } from "@/app/page";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 mb-6">
      <div>
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "lg" })}
        >
          Home
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={buttonVariants({ variant: "default" })}
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
