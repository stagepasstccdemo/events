import { IoTicketOutline } from "@assets/icons";
import { EventDetailsResponse, TicketsDTO } from "@services/mock/DTO";
import { Box, Button, Divider, Flex, Text } from "@stagepass/osiris-ui";
import { DateFormatter } from "@util/DateFormatter";

type Props = {
  data: EventDetailsResponse["eventTicketsList"];
};

export function EventSearchList({ data }: Props) {
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

      {data.map((ticketInfo: TicketsDTO) => (
        <div key={ticketInfo.id}>
          <Flex mt="2rem" alignItems="center" justifyContent="space-between">
            <Text
              text={`${ticketInfo.location} - ${ticketInfo.city}, ${ticketInfo.country}`}
              color="gray.100"
              fontSize="1rem"
              maxWidth="180px"
              fontWeight="bold"
            />
            <Flex flexDirection="column">
              <Text
                text={DateFormatter(ticketInfo.date, "en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                color="os-primary.300"
                fontWeight="bold"
              />

              <Text
                text={`${ticketInfo.day} - ${ticketInfo.time}`}
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

          {ticketInfo.id !== data[data.length - 1].id && (
            <Box mt="2rem" mb="2rem">
              <Divider borderColor="os-primary.100" />
            </Box>
          )}
        </div>
      ))}
    </Flex>
  );
}
