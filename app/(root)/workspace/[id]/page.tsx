"use client";
import Canvas from "../_components/canvas";
import Editor from "../_components/editor";
import Header from "../_components/header";
import useFile from "@/app/_hooks/use-file";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Workspace = ({ params }: any) => {
  const { fileData, setTriggerSave, triggerSave } = useFile({ id: params.id });
  const [tab, setTab] = useState<"document" | "both" | "canvas">("both");
  const onTabChangeHandler = (t: "document" | "both" | "canvas") => {
    setTab(t);
  };
  return (
    <div className="flex flex-col h-screen w-full">
      <Header
        onTabChangeHandler={onTabChangeHandler}
        fileName={fileData?.fileName}
        onSave={() => setTriggerSave(!triggerSave)}
      />
      <div
        className={cn(
          "flex-1 h-full",
          tab === "both" && "grid grid-cols-1 md:grid-cols-2"
        )}
      >
        {(tab === "both" || tab === "document") && (
          <div className="h-full w-full">
            <Editor
              onSaveTrigger={triggerSave}
              fileId={params.id}
              fileData={fileData}
            />
          </div>
        )}
        {(tab === "both" || tab === "canvas") && (
          <div className={cn("h-full w-full", tab === "both" && "border-l")}>
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={params.id}
              fileData={fileData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Workspace;
