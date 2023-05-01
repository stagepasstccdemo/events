// @ts-nocheck
import { Header } from "@stagepass/osiris-ui";

import { FiMenu } from "@assets/icons";
import LogoImg from "@assets/logo-inline.png";
import { useUser } from "@hooks";
import { NavBarContent } from "./modals/NavBarContent";
import { UserAccountContent } from "./modals/UserAccountContent";

export * from "./modals/NavBarContent";
export * from "./modals/UserAccountContent";

export function DefaultHeader() {
  const { userInitials, userSession } = useUser();

  return (
    <Header
      leftIcon={<FiMenu size={34} color="F26A0F" />}
      logoImg={LogoImg}
      {...(userSession && {
        userProfile: userInitials,
      })}
      leftIconModalContent={<NavBarContent />}
      rightIconModalContent={<UserAccountContent />}
      leftModalTitle="Menu"
      rightModalTitle="Profile"
      bgDecoration
    />
  );
}
