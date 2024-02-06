import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Header = () => (
  <header className="border-2 border-red-600">
    <div className="flex justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" width="32" height="32" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center ml-4">
        <SignedOut>
          <Link href="/sign-in">Sign in</Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  </header>
);
