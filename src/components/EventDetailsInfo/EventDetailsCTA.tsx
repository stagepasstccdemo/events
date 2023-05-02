import { Button, Flex, Text } from "@stagepass/osiris-ui";

export function EventDetailsCTA() {
  return (
    <Flex mt="2rem" flexDirection="column">
      <Text
        text="About"
        color="os-secondary.200"
        fontSize="2rem"
        fontWeight="bold"
      />
      <Text
        color="os-secondary.200"
        text="Following the release of Grande's fourth studio album, Sweetener, Grande embarked on a promotional concert tour, The Sweetener Sessions, which concluded after 4 dates.[4] On October 1, 2018, Grande started recording her fifth studio album, Thank U, Next. She later confirmed that a longer tour, the Sweetener World Tour, would be for both Sweetener and Thank U, Next.[5]"
      />

      <Button
        mt="2rem"
        bgColor="os-ternary.300"
        px="4rem"
        py="2rem"
        color="gray.100"
        rounded="2xl"
        fontSize="1.5rem"
        fontWeight="bold"
        textTransform="uppercase"
        maxWidth="100%"
        _hover={{ opacity: 0.8 }}
      >
        Book Ticket
      </Button>
    </Flex>
  );
}
