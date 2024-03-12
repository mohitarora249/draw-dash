"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getNameInitials } from "@/lib/utils";

const UserAvatar = () => {
  const { user } = useKindeBrowserClient();
  return (
    <Avatar>
      <AvatarImage src={user?.picture ?? ""} />
      <AvatarFallback>
        {getNameInitials(
          `${user?.given_name ?? ""} ${user?.family_name ?? ""}`
        )}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
