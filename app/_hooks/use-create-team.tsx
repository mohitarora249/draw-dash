"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const useCreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user } = useKindeBrowserClient();
  const { push } = useRouter();

  const createNewTeam = () => {
    if (!user?.email) {
      toast.error("Error occured while creating team");
      return;
    }

    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    })
      .then(() => {
        push("/dashboard");
        toast.success("Team created");
      })
      .catch(() => toast.error("Error occured while creating team"));
  };

  return { teamName, setTeamName, createNewTeam };
};

export default useCreateTeam;
