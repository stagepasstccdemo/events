import { Box, Button, Flex, Image, Text } from "@stagepass/osiris-ui";
import { FiPlayCircle } from "@assets/icons";

export function EventExtraContent() {
  return (
    <Flex flexDirection="column">
      <Box>
        <Text
          text="| SEE ARTIST CONTENT"
          color="os-ternary.300"
          fontSize="1.5rem"
        />
        <Box mt="2rem" mb="2rem" position="relative">
          <Image
            rounded="xl"
            border="4px solid"
            borderColor="os-ternary.300"
            width="100%"
            height="5%"
            src="https://static01.nyt.com/images/2017/06/05/arts/05ariana-grande-hp2/05ariana-grande-hp2-superJumbo.jpg"
            filter="brightness(0.7)"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FiPlayCircle size={82} color="F26A0F" />
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
          <Box bgColor="os-ternary.300" p="1rem" rounded="xl">
            <Text
              text="Side to side"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="7 rings"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="positions"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="34 + 35"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="dangerous woman"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="into you"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="thank you next"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="god is a woman"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="bangbang"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
          <Box bgColor="os-ternary.300" p="1rem" rounded="2xl">
            <Text
              text="santa tell me"
              color="gray.100"
              fontSize="1.5rem"
              fontWeight="bold"
            />
          </Box>
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
          <Flex
            alignItems="center"
            gap="10px"
            border="4px solid"
            borderColor="os-ternary.300"
            rounded="xl"
            height="160px"
            overflow="hidden"
          >
            <Image
              maxWidth="150px"
              maxHeight="160px"
              roundedLeft="8px"
              roundedRight="20px"
              objectFit="cover"
              src="https://media.pitchfork.com/photos/5d02bb1239bb0c72a8df56b5/1:1/w_3900,h_3900,c_limit/taylor%20swift%20LOVER.jpg"
            />
            <Box>
              <Text
                text="Anitta"
                fontSize="2rem"
                color="os-ternary.300"
                fontWeight="bold"
              />
              <Text text="Vai malandra" fontSize="1.2rem" color="gray.700" />
              <Button
                bgColor="os-ternary.300"
                color="gray.100"
                rounded="xl"
                fontSize="1rem"
                maxWidth="100%"
                textTransform="uppercase"
                _hover={{ opacity: 0.8 }}
              >
                see more
              </Button>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            gap="10px"
            border="4px solid"
            borderColor="os-ternary.300"
            rounded="xl"
            height="160px"
            overflow="hidden"
          >
            <Image
              maxWidth="150px"
              maxHeight="160px"
              roundedLeft="8px"
              roundedRight="20px"
              objectFit="cover"
              src="https://media.pitchfork.com/photos/5d02bb1239bb0c72a8df56b5/1:1/w_3900,h_3900,c_limit/taylor%20swift%20LOVER.jpg"
            />
            <Box>
              <Text
                text="Anitta"
                fontSize="2rem"
                color="os-ternary.300"
                fontWeight="bold"
              />
              <Text text="Vai malandra" fontSize="1.2rem" color="gray.700" />
              <Button
                bgColor="os-ternary.300"
                color="gray.100"
                rounded="xl"
                fontSize="1rem"
                maxWidth="100%"
                textTransform="uppercase"
                _hover={{ opacity: 0.8 }}
              >
                see more
              </Button>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            gap="10px"
            border="4px solid"
            borderColor="os-ternary.300"
            rounded="xl"
            height="160px"
            overflow="hidden"
          >
            <Image
              maxWidth="150px"
              maxHeight="160px"
              roundedLeft="8px"
              roundedRight="20px"
              objectFit="cover"
              src="https://media.pitchfork.com/photos/5d02bb1239bb0c72a8df56b5/1:1/w_3900,h_3900,c_limit/taylor%20swift%20LOVER.jpg"
            />
            <Box>
              <Text
                text="Taylor Swift"
                fontSize="2rem"
                color="os-ternary.300"
                fontWeight="bold"
              />
              <Text text="Lover" fontSize="1.2rem" color="gray.700" />
              <Button
                bgColor="os-ternary.300"
                color="gray.100"
                rounded="xl"
                fontSize="1rem"
                maxWidth="100%"
                textTransform="uppercase"
                _hover={{ opacity: 0.8 }}
              >
                see more
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
