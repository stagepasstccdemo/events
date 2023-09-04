import { useState } from "react";
import { IoTicketOutline } from "@assets/icons";
import { DateFormatter } from "@util/DateFormatter";
import { EventDetailsResponse, TicketsDTO } from "@services/mock/DTO";

import { Box, Button, Divider, Flex, Text } from "@stagepass/osiris-ui";
import { EventTicketSelection } from "./EventTicketSelection";

type Props = {
  data: EventDetailsResponse["eventTicketsList"];
};

export function EventSearchList({ data }: Props) {
  const [ticketSelectionModal, setTicketSelectionModal] = useState(false);
  const [concertTicketId, setConcertTicketId] = useState("");
  const toggleTicketSelectionModal = (id: string) => {
    setTicketSelectionModal((prevState) => !prevState);
    setConcertTicketId(id);
  };

  return (
    <Flex
      flexDirection="column"
      mt="2rem"
      mb="2rem"
      bgColor="os-secondary.100"
      rounded="2xl"
      p="2rem"
      pb="1rem"
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
        <Flex key={ticketInfo.id} flexDir="column">
          <Flex
            mt="2rem"
            alignItems="center"
            justifyContent="space-between"
            gap="5"
          >
            <Text
              text={`${ticketInfo.location} - ${ticketInfo.city}, ${ticketInfo.country}`}
              color="gray.100"
              fontSize="1rem"
              maxWidth="8rem"
              fontWeight="bold"
            />
            <Flex flexDirection="column">
              <Text
                text={DateFormatter(ticketInfo.date, "en-us", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
                color="os-primary.300"
                fontWeight="bold"
              />

              <Text
                text={`${ticketInfo.day} - ${ticketInfo.time}`}
                fontSize="sm"
                color="os-primary.300"
              />
            </Flex>
          </Flex>
          <Button
            mt="2rem"
            px="8rem"
            py="2rem"
            color="gray.100"
            rounded="2xl"
            fontSize="0.8rem"
            bgColor="os-ternary.300"
            textTransform="uppercase"
            maxWidth="100%"
            onClick={() => toggleTicketSelectionModal(ticketInfo.id)}
            _hover={{ opacity: 0.8 }}
          >
            See Tickets for this {ticketInfo.kind}
          </Button>

          {ticketInfo.id !== data[data.length - 1].id && (
            <Box mt="2rem" mb="2rem">
              <Divider borderColor="os-primary.100" />
            </Box>
          )}
        </Flex>
      ))}
      {ticketSelectionModal && (
        <EventTicketSelection
          isOpen={ticketSelectionModal}
          onClose={toggleTicketSelectionModal}
          data={data.find((ticket) => ticket.id === concertTicketId)}
        />
      )}
    </Flex>
  );
}
