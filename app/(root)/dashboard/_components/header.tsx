"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import UserAvatar from "../../_components/user-avatar";

const Header = () => {
  return (
    <div className="flex justify-end w-full gap-2 items-center">
      <Input className="w-56" type="text" placeholder="Search" />
      <UserAvatar />
    </div>
  );
};

export default Header;
