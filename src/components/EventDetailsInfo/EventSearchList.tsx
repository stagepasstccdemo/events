import { IoTicketOutline } from "@assets/icons";
import { Box, Button, Divider, Flex, Text } from "@stagepass/osiris-ui";

export function EventSearchList({ data, ...props }: any) {
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

      {data &&
        data?.map(({ id, metadata }: any) => (
          <div key={id}>
            <Flex mt="2rem" alignItems="center" justifyContent="space-between">
              <Text
                text={`${metadata.eventLocation} - ${metadata.city}, ${metadata.country}`}
                color="gray.100"
                fontSize="1rem"
                maxWidth="180px"
                fontWeight="bold"
              />
              <Flex flexDirection="column">
                <Text
                  text={metadata.date}
                  color="os-primary.300"
                  fontWeight="bold"
                />
                <Text
                  text={`${metadata.day} - ${metadata.time}`}
                  color="os-primary.300"
                />
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

            {id !== data[data.length - 1].id && (
              <Box mt="2rem" mb="2rem">
                <Divider borderColor="os-primary.100" />
              </Box>
            )}
          </div>
        ))}
    </Flex>
  );
}
