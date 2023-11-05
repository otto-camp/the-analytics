import { buttonVariants } from "@/components/ui/button";
import { type Metadata } from "next";
import Link from "next/link";
import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "The Analytics",
};

export const links = [
  { href: "textify", name: "Textify" },
  { href: "portfolio", name: "Portfolio" },
];

export default async function Home() {
  return (
    <main className="p-4 space-y-4 min-h-screen">
      {links.map((link) => (
        <div key={link.href}>
          <Link
            href={link.href}
            className={cn(
              buttonVariants({ variant: "default" }),
              "min-w-[300px]"
            )}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </main>
  );
}
