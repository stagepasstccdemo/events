// @ts-nocheck
import { useAuth } from "@stagepass/app-auth";

export const useUser = () => {
  const { userSession } = useAuth();

  const userData = userSession?.user;
  const email = userData?.email;
  const userInitials = email?.split("@")[0].slice(0, 2).toUpperCase();
  const userFirstName = email?.split("@")[0].split(".")[0].toUpperCase();
  const userProfilePic = userData?.image;

  return {
    userInitials,
    userData,
    userSession,
    email,
    userFirstName,
    userProfilePic,
  };
};
