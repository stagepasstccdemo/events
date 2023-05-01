// @ts-nocheck
import {
  Flex,
  Image,
  Text,
  MenuCardOption,
  Box,
  Button,
} from "@stagepass/osiris-ui";

import { useUser } from "@hooks/";
import DefaultAvatarImg from "@assets/default-profile.png";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "@stagepass/app-auth";

import {
  FaTicketAlt,
  FaChevronRight,
  MdSettings,
  HiIdentification,
} from "@assets/icons";

export const settingsCardOptions = [
  {
    text: "My Tickets Orders",
    leftIcon: <FaTicketAlt size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
  {
    text: "App Settings",
    leftIcon: <MdSettings size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
  {
    text: "My Account",
    leftIcon: <HiIdentification size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
];

export function UserAccountContent() {
  const { userFirstName, email, userProfilePic } = useUser();
  const { signOut } = useAuth();

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="-6rem"
    >
      <Flex
        rounded="60px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Image
          src={userProfilePic || DefaultAvatarImg}
          alt="User Profile"
          objectFit="contain"
          width="180px"
          border="none"
        />
      </Flex>
      <Text
        mt="1rem"
        as="span"
        text="user info"
        color="os-ternary.300"
        fontWeight="bold"
      />
      <Text
        as="h2"
        fontSize="3rem"
        text={userFirstName}
        color="os-primary.100"
        fontWeight="bold"
      />
      <Text
        as="span"
        fontSize="sm"
        text={`mail: ${email}`}
        color="os-ternary.300"
      />

      <Box width="100vw" px={6} pt={10} pb={20} height="100vh">
        <Flex gap={5} flexDirection="column">
          <MenuCardOption renderCardListItems={settingsCardOptions} />
        </Flex>
        <Button variant="ghost" mt="2.5rem" onClick={signOut}>
          <Flex alignItems="center" justifyContent="center" gap="10px">
            <FaSignOutAlt size={30} color="F26A0F" />
            <Text text="sign out" color="os-primary.100" fontSize="1.5rem" />
          </Flex>
        </Button>
      </Box>
    </Flex>
  );
}
