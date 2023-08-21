import { Box, Divider, Flex, Image, Text, Button } from "@stagepass/osiris-ui";
import { FiPlayCircle } from "@assets/icons";

export function EventDetailsSummaryHeader({ data, ...props }: any) {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Box position="relative">
          <Flex
            pt="0.5rem"
            width="7.5rem"
            height="12.5rem"
            bgColor="os-primary.100"
            rounded="full"
            borderEndEndRadius="200rem"
            alignItems="flex-start"
            justifyContent="center"
            zIndex={-1}
          >
            <FiPlayCircle size={80} color="FBD592" />
          </Flex>
          <Image
            position="absolute"
            bottom="0"
            left="5"
            rounded="full"
            maxWidth="150px"
            maxHeight="150px"
            src={data?.eventImageURL}
          />
        </Box>

        <Flex flexDirection="column" width="45%">
          <Box>
            <Text
              text={data?.eventMainTitle}
              color="os-primary.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
            <Divider rounded="full" width="100%" borderColor="os-ternary.300" />
          </Box>
          <Text
            text={data?.eventSubTitle}
            color="os-secondary.200"
            fontWeight="bold"
          />
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Text
              text={`Age: ${data?.parentalRating} years & above`}
              color="os-secondary.200"
              fontSize="sm"
            />
            <Text
              text={`Where: ${data?.locationsAmount} countries`}
              fontSize="sm"
              color="os-secondary.200"
            />
          </Flex>
          <Flex alignItems="center" flexWrap="wrap">
            <Text
              text={`${data?.peopleInterestedAtThisEvent} people are instered in this`}
              color="os-secondary.200"
              fontSize="sm"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="2rem" flexDirection="column">
        <Text
          text="About"
          color="os-secondary.200"
          fontSize="2rem"
          fontWeight="bold"
        />
        <Text color="os-secondary.200" text={data?.aboutEvent} />

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
          Book Ticket Below
        </Button>
      </Flex>
    </>
  );
}
