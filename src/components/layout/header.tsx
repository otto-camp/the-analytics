import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 mb-12">
      <div>
        <Link href="/" className={buttonVariants({ variant: "ghost",size:'lg' })}>
          Home
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-8">
        <Button>A</Button>
        <Button>A</Button>
        <Button>A</Button>
        <Button>A</Button>
        <ThemeToggle />
      </nav>
    </header>
  );
}
