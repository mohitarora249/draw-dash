import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MAX_FREE_FILE } from "@/app/_constants/index";
import { Progress } from "@/components/ui/progress";
function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 0,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];
  const [fileInput, setFileInput] = useState("");
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-1 px-2 text-[14px] 
        hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button  */}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full mt-3">New File</Button>
        </DialogTrigger>
        {totalFiles < MAX_FREE_FILE ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New File</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="Enter File Name"
                  className="mt-3"
                  onChange={(e) => setFileInput(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="">
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  disabled={!(fileInput && fileInput.length > 3)}
                  onClick={() => onFileCreate(fileInput)}
                >
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <div>Pricing</div>
        )}
      </Dialog>

      <Progress
        value={(totalFiles / MAX_FREE_FILE) * 100}
        className="w-full mt-4"
      />

      <h2 className="text-[12px]">
        <strong>{totalFiles}</strong> out of <strong>{MAX_FREE_FILE}</strong>{" "}
        files used
      </h2>
      <h2 className="text-[12px] mt-1">
        Upgrade your plan for unlimited access.
      </h2>
    </div>
  );
}

export default SideNavBottomSection;
