// @ts-nocheck
import {
  Flex,
  Image,
  Text,
  MenuCardOption,
  Footer,
  Box,
} from "@stagepass/osiris-ui";

import { useUser } from "@hooks/";
import DefaultAvatarImg from "@assets/default-profile.png";
import { settingsCardOptions } from "../../../../mocks";

export function UserAccountContent() {
  const { userFirstName, email, userProfilePic } = useUser();

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

      <Box width="100vw" px={6} pt={10}>
        <Flex gap={5} flexDirection="column">
          <MenuCardOption renderCardListItems={settingsCardOptions} />
        </Flex>
        <Footer onlyChat />
      </Box>
    </Flex>
  );
}
