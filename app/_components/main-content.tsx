import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MainContent = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-black text-3xl font-extrabold sm:text-5xl">
          Documents & Diagrams
          <span className="text-blue-500 sm:block"> for Developers </span>
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className={buttonVariants({ variant: "secondary" })} href="#">
            Explore Features
          </Link>
          <Link className={buttonVariants({})} href="#">
            Learn More
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
