"use client";
import Canvas from "../_components/canvas";
import Editor from "../_components/editor";
import Header from "../_components/header";
import useFile from "@/app/_hooks/use-file";

const Workspace = ({ params }: any) => {
  const { fileData, setTriggerSave, triggerSave } = useFile({ id: params.id });

  return (
    <div className="h-full">
      <Header onSave={() => setTriggerSave(!triggerSave)} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.id}
            fileData={fileData}
          />
        </div>
        <div className="h-full border-l">
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={params.id}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
