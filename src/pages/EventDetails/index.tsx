// @ts-nocheck
import { DefaultFooter } from "@components/Footer";
import { DefaultHeader } from "@components/Header";
import {
  BaseContainer,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  SearchInput,
  Text,
} from "@stagepass/osiris-ui";

import { FiPlayCircle } from "@assets/icons";
import { useParams } from "react-router-dom";

export function EventDetails() {
  const { eventId } = useParams();

  return (
    <BaseContainer>
      <DefaultHeader />
      <Box mt="2rem" mb="2rem">
        <SearchInput />
      </Box>

      <Flex alignItems="center" justifyContent="space-between">
        <Box position="relative">
          <Flex
            width="120px"
            height="200px"
            zIndex={-1}
            bgColor="os-primary.100"
            rounded="full"
            borderEndEndRadius="200rem"
            alignItems="flex-start"
            justifyContent="center"
            pt="0.5rem"
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
          width="100%"
          _hover={{ opacity: 0.8 }}
        >
          Book Ticket
        </Button>
      </Flex>

      <DefaultFooter />
    </BaseContainer>
  );
}
