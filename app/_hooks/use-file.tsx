import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useEffect, useState } from "react";
import { FILE } from "../(root)/_components/file-list";

type Args = {
  id: any;
};

const useFile = ({ id }: Args) => {
  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FILE | null>(null);
  const convex = useConvex();

  useEffect(() => {
    id && getFileData();
  }, [id]);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: id,
    });
    setFileData(result);
  };

  return { fileData, triggerSave, setTriggerSave };
};

export default useFile;
