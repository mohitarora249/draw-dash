import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = ({ onSave, fileName, onTabChangeHandler }: any) => {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="text-lg font-extrabold tracking-wide">
          <span>D</span>
          <span className="text-blue-500">D</span>
        </div>
        <h2 className="font-semibold text-xl">{fileName}</h2>
      </div>
      <Tabs defaultValue="both" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger
            value="document"
            onClick={() => onTabChangeHandler("document")}
          >
            Document
          </TabsTrigger>
          <TabsTrigger value="both" onClick={() => onTabChangeHandler("both")}>
            Both
          </TabsTrigger>
          <TabsTrigger
            value="canvas"
            onClick={() => onTabChangeHandler("canvas")}
          >
            Canvas
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-4">
        <Button className="gap-2" onClick={onSave}>
          <Save className="h-4 w-4" />
          Save
        </Button>
        <Button className="gap-2" variant="secondary">
          <Link className="h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default Header;
