import { Button } from "@/components/ui/button";
import { Archive, FilePlus } from "lucide-react";
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
        <Button
          variant="secondary"
          key={index}
          className="w-full mt-3 gap-2 justify-start"
        >
          <menu.icon className="h-4 w-4" />
          {menu.name}
        </Button>
      ))}

      {/* Add New File Button  */}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full mt-3 gap-2 justify-start">
            <FilePlus className="h-4 w-4 " />
            New File
          </Button>
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
