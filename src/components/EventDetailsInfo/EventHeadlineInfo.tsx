import { Box, Divider, Flex, Image, Text } from "@stagepass/osiris-ui";
import { FiPlayCircle } from "@assets/icons";

export function EventHeadlineInfo() {
  return (
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
          src="https://i0.wp.com/tracklist.com.br/wp-content/uploads/2021/11/Ariana-Grande-rotated.jpg?resize=620%2C620&ssl=1"
        />
      </Box>

      <Flex flexDirection="column" width="45%">
        <Box>
          <Text
            text="Ariana Grande"
            color="os-primary.100"
            fontSize="1.5rem"
            fontWeight="bold"
          />
          <Divider rounded="full" width="100%" borderColor="os-ternary.300" />
        </Box>
        <Text
          text="Sweetener World Tour 2023"
          color="os-secondary.200"
          fontWeight="bold"
        />
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text
            text="Age: 18 years & above"
            color="os-secondary.200"
            fontSize="sm"
          />
          <Text
            text="Where: 12 countries"
            fontSize="sm"
            color="os-secondary.200"
          />
        </Flex>
        <Flex alignItems="center" flexWrap="wrap">
          <Text
            text="3123 people are instered in this"
            color="os-secondary.200"
            fontSize="sm"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
