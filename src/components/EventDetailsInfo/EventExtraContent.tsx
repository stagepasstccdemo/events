import { Box, Button, Flex, Image, Text } from "@stagepass/osiris-ui";
import { EventDetailsResponse } from "@services/mock/DTO";
import { useNavigate } from "react-router-dom";

type Props = {
  data: EventDetailsResponse["eventExtraContent"];
};

export function EventExtraContent({ data }: Props) {
  const navigate = useNavigate();

  const handleRecommendedEventClick = (eventId: number) => {
    navigate(`/event?eventId=${eventId}`, { replace: true });
    location.reload();
  };

  return (
    <Flex flexDirection="column">
      <Box>
        <Text
          text="| SEE ARTIST CONTENT"
          color="os-ternary.300"
          fontSize="1.5rem"
        />
        <Box mt="2rem" mb="2rem" position="relative">
          <Box
            rounded="md"
            border="4px solid"
            borderColor="os-ternary.300"
            filter="brightness(0.7)"
          >
            <iframe
              width="100%"
              height="500px"
              title={data.eventVideoURL}
              src={data.eventVideoURL}
              allowFullScreen
            />
          </Box>
        </Box>
      </Box>

      <Box mb="2rem">
        <Text
          text="| TOUR SETLIST"
          color="os-ternary.300"
          fontSize="1.5rem"
          mb="2rem"
        />
        <Flex flexDirection="column" gap="10px">
          {data.tourSetlist.map((tourSetlist) => (
            <Box
              key={tourSetlist.id}
              bgColor="os-ternary.300"
              p="1rem"
              rounded="2xl"
            >
              <Text
                text={tourSetlist.songName}
                color="gray.100"
                fontSize="1.5rem"
                fontWeight="bold"
              />
            </Box>
          ))}
        </Flex>
        <Text
          text="Please Keep in mind that this is just a general song list and it can change from concert to concert"
          textAlign="end"
          fontSize="sm"
          color="alert.danger"
          ml="1rem"
          mt="0.5rem"
        />
      </Box>

      <Box mb="2rem">
        <Text
          text="| OTHER EVENTS YOU MIGHT BE INTERESTED IN"
          color="os-ternary.300"
          fontSize="1.5rem"
          mb="2rem"
        />

        <Flex flexDirection="column" gap="15px">
          {data.recommendedEvents.map((event) => (
            <Flex
              key={event.id}
              alignItems="center"
              gap="10px"
              border="4px solid"
              borderColor="os-ternary.300"
              rounded="2xl"
              height="140px"
              overflow="hidden"
            >
              <Image
                width="150px"
                height="160px"
                roundedLeft="8px"
                roundedRight="20px"
                objectFit="cover"
                src={event.eventImageURL}
              />
              <Box>
                <Text
                  text={event.eventMainTitle}
                  fontSize="1.2rem"
                  color="os-ternary.300"
                  fontWeight="bold"
                />
                <Text
                  text={event.eventSubTitle}
                  fontSize="1.2rem"
                  color="gray.700"
                />
                <Button
                  mt="1rem"
                  bgColor="os-ternary.300"
                  color="gray.100"
                  rounded="xl"
                  fontSize="1rem"
                  maxWidth="100%"
                  textTransform="uppercase"
                  _hover={{ opacity: 0.8 }}
                  onClick={() => handleRecommendedEventClick(event.id)}
                >
                  see more
                </Button>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
