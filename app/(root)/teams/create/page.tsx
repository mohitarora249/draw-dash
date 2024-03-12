"use client";
import useCreateTeam from "@/app/_hooks/use-create-team";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateTeam = () => {
  const { teamName, createNewTeam, onChangeHandler } = useCreateTeam();
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="font-bold text-[40px] py-3">
        What should we call your team?
      </h2>
      <h2 className="text-gray-500">
        You can always change this later from settings.
      </h2>
      <div className="my-7 w-[40%]">
        <label className="text-gray-500">Team Name</label>
        <Input
          placeholder="Team Name"
          className="mt-3"
          onChange={onChangeHandler}
        />
      </div>
      <Button
        disabled={!(teamName && teamName?.length > 0)}
        onClick={createNewTeam}
      >
        Create Team
      </Button>
    </div>
  );
};

export default CreateTeam;
