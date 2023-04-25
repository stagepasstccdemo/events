// @ts-nocheck
import {
  Box,
  BaseContainer,
  Header,
  SearchInput,
  Filter,
  FilteredCards,
  Button,
  Image,
  Text,
  Flex,
  SimpleDivider,
} from "@stagepass/osiris-ui";
import { FiMenu, FiFilter, MdFilterList } from "@assets/icons";
import LogoImg from "@assets/logo-inline.png";
import { filterBadgesList } from "../../mocks/filteredBadgesList";

export function Home() {
  return (
    <BaseContainer>
      <Header
        leftIcon={<FiMenu size={34} color="F26A0F" />}
        logoImg={LogoImg}
        userProfile="FA"
      />

      <Box mt="2rem">
        <SearchInput />
      </Box>

      <Box mt="1.75rem">
        <Filter
          leftIcon={<FiFilter size={20} color="7D6FEC" />}
          leftText="Quick Filter"
          rightIcon={<MdFilterList size={20} color="7D6FEC" />}
          rightText="advanced filters"
          renderBadgesList={filterBadgesList}
        />

        <Box mt="2rem">
          <FilteredCards textLabel="Filtered Options" buttonLabel="show all" />
          <Flex
            mt="2rem"
            width="250px"
            maxHeight="360px"
            rounded="15px"
            bgColor="os-secondary.100"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Image
              src="https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png"
              roundedTop={15}
            />
            <Box p="4">
              <Text
                text="Justin Bieber | #PeachesTour"
                color="os-primary.300"
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
              />
              <Text
                text="December 20 & 22 | 5PM - 7PM"
                color="gray.100"
                fontWeight="bold"
                fontSize="xs"
                noOfLines={1}
              />
              <Text
                text="Allianz Parque Stadium, Sao Paulo, Brazil"
                color="gray.300"
                fontWeight="light"
                fontSize="xs"
                noOfLines={1}
              />
              <SimpleDivider numDots={10} padding="14px 0px" />
              <Text
                text="Starting at $200"
                color="os-primary.300"
                fontWeight="bold"
              />
            </Box>
            <Button
              bgColor="os-ternary.300"
              color="gray.100"
              height="45px"
              roundedBottom="15px"
              px="48px"
              py="28px"
            >
              GET TICKET RIGHT NOW
            </Button>
          </Flex>
        </Box>
      </Box>
    </BaseContainer>
  );
}
