import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MainContent = () => {
  return (
    <section className="mt-14">
      <div className="">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-black text-3xl font-extrabold sm:text-5xl">
            Documents & Diagrams
            <span className="text-blue-500 sm:block"> for DEVs. </span>
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link className={buttonVariants({ variant: "secondary" })} href="#">
              Explore Features
            </Link>
            <Link className={buttonVariants({})} href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
