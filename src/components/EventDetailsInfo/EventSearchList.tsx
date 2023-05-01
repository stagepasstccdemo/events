import { IoTicketOutline } from "@assets/icons";
import { Box, Button, Divider, Flex, Text } from "@stagepass/osiris-ui";

export function EventSearchList() {
  return (
    <Flex
      flexDirection="column"
      mt="2rem"
      mb="2rem"
      bgColor="os-secondary.100"
      rounded="2xl"
      p="2rem"
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text text="Events Search" fontSize="1.5rem" color="gray.100" />
        <IoTicketOutline size={42} color="F26A0F" />
      </Flex>

      <Flex mt="2rem" alignItems="center" justifyContent="space-between">
        <Text
          text="Allianz Park - Stadium Sao Paulo, Brazil"
          color="gray.100"
          fontSize="1rem"
          maxWidth="180px"
          fontWeight="bold"
        />
        <Flex flexDirection="column">
          <Text text="Jan 28,2023" color="os-primary.300" fontWeight="bold" />
          <Text text="Wednseday - 8:00 PM" color="os-primary.300" />
        </Flex>
      </Flex>
      <Button
        mt="2rem"
        bgColor="os-ternary.300"
        px="10rem"
        py="2rem"
        color="gray.100"
        rounded="2xl"
        fontSize="1rem"
        textTransform="uppercase"
        maxWidth="100%"
        _hover={{ opacity: 0.8 }}
      >
        SEE TICKETS FOR THIS CONCERT
      </Button>

      <Box mt="2rem" mb="2rem">
        <Divider borderColor="os-primary.100" />
      </Box>

      <Flex mt="2rem" alignItems="center" justifyContent="space-between">
        <Text
          text="Allianz Park - Stadium Sao Paulo, Brazil"
          color="gray.100"
          fontSize="1rem"
          maxWidth="180px"
          fontWeight="bold"
        />
        <Flex flexDirection="column">
          <Text text="Jan 28,2023" color="os-primary.300" fontWeight="bold" />
          <Text text="Wednseday - 8:00 PM" color="os-primary.300" />
        </Flex>
      </Flex>
      <Button
        mt="2rem"
        bgColor="os-ternary.300"
        px="10rem"
        py="2rem"
        color="gray.100"
        rounded="2xl"
        fontSize="1rem"
        textTransform="uppercase"
        maxWidth="100%"
        _hover={{ opacity: 0.8 }}
      >
        SEE TICKETS FOR THIS CONCERT
      </Button>

      <Box mt="2rem" mb="2rem">
        <Divider borderColor="os-primary.100" />
      </Box>

      <Flex mt="2rem" alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Text
            text="Allianz Park - Stadium Sao Paulo, Brazil"
            color="gray.100"
            fontSize="1rem"
            maxWidth="180px"
            fontWeight="bold"
          />
          <Box bgColor="alert.danger" rounded="xl" p="0.2rem" mt="0.5rem">
            <Text
              text="almost sold out"
              color="gray.100"
              textAlign="center"
              fontSize="sm"
            />
          </Box>
        </Flex>
        <Flex flexDirection="column">
          <Text text="Jan 28,2023" color="os-primary.300" fontWeight="bold" />
          <Text text="Wednseday - 8:00 PM" color="os-primary.300" />
        </Flex>
      </Flex>
      <Button
        mt="2rem"
        bgColor="os-ternary.300"
        px="10rem"
        py="2rem"
        color="gray.100"
        rounded="2xl"
        fontSize="1rem"
        textTransform="uppercase"
        maxWidth="100%"
        _hover={{ opacity: 0.8 }}
      >
        SEE TICKETS FOR THIS CONCERT
      </Button>

      <Button
        variant="ghost"
        color="os-primary.100"
        mt="2rem"
        fontSize="1.5rem"
        maxWidth="100%"
      >
        see more available options
      </Button>
    </Flex>
  );
}
