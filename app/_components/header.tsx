"use client";

import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="cursor-pointer">
        <div className="text-lg font-extrabold tracking-wide">
          <span>Draw</span>
          <span className="text-blue-500">Dash</span>
        </div>
      </Link>
      <div className="flex items-center justify-end md:justify-between">
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <div className={buttonVariants({ variant: "secondary" })}>
              <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
            </div>
            <div className={buttonVariants()}>
              <RegisterLink>Register</RegisterLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
