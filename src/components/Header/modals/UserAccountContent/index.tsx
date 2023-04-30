// @ts-nocheck
import {
  Flex,
  Image,
  Text,
  MenuCardOption,
  BaseContainer,
} from "@stagepass/osiris-ui";
import { FaTicketAlt, FaChevronRight } from "react-icons/fa";

const cardOptionsList = [
  {
    text: "My Tickets Orders",
    leftIcon: <FaTicketAlt size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
    pudim: "1243",
  },
  {
    text: "App Settings",
    leftIcon: <FaTicketAlt size={38} color="F26A0F" />,
    rightIcon: <FaChevronRight size={24} color="F26A0F" />,
  },
];

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

      <BaseContainer>
        <Flex gap={5} flexDirection="column">
          <MenuCardOption renderCardListItems={cardOptionsList} />
        </Flex>
      </BaseContainer>
    </Flex>
  );
}
