import { Profile } from "@/types";
import { AvatarProps } from "@radix-ui/react-avatar";

import { getInitials } from "@/lib/utils/getInitials";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/data-display/Avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<Profile, "image" | "displayName">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  const initials = getInitials(user.displayName);
  return (
    <div className="flex items-center gap-3">
      <Avatar {...props}>
        {user.image ? (
          <AvatarImage alt="Picture" src={user.image} />
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user.displayName}</span>
            <span className="m-auto">{initials}</span>
          </AvatarFallback>
        )}
      </Avatar>
      <div className="grid gap-0.5">
        <div className="font-medium text-base">{user.displayName}</div>
      </div>
    </div>
  );
}
