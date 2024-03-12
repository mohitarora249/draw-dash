import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import TypewriterEffect from "./type-writer-effect";

const MainContent = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <TypewriterEffect
        className="tracking-wider"
        words={[
          {
            text: "Notes",
            className: "text-3xl md:text-[5rem]",
          },
          {
            text: "&",
            className: "text-3xl md:text-[5rem]",
          },
          {
            text: "Sketches",
            className: "text-3xl md:text-[5rem]",
          },
          {
            text: "for",
            className: "text-3xl md:text-[5rem]",
          },
          {
            text: "Developers",
            className: "text-3xl md:text-[5rem] text-blue-500",
          },
        ]}
      />
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link className={buttonVariants({ variant: "secondary" })} href="#">
          Explore Features
        </Link>
        <Link className={buttonVariants({})} href="#">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default MainContent;
