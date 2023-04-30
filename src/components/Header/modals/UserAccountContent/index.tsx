// @ts-nocheck
import {
  Flex,
  Image,
  Text,
  MenuCardOption,
  Footer,
  Box,
} from "@stagepass/osiris-ui";

import { settingsCardOptions } from "../../../../mocks";

export function UserAccountContent() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="-6rem"
    >
      <Flex
        bgColor="os-secondary.100"
        rounded="60px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Image
          src="https://github.com/fillipeags.png"
          alt="User Profile"
          objectFit="contain"
          width="180px"
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
        text="Fillipe"
        color="os-primary.100"
        fontWeight="bold"
      />
      <Text
        as="span"
        fontSize="sm"
        text="mail: fillipe@mail.com"
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
