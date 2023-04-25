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
  Card,
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
          <Card.Big
            sourceBannerImg="https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png"
            titleCard="Justin Bieber | #PeachesTour"
            legendCard="December 20 & 22 | 5PM - 7PM"
            detailsDescriptionCard="Allianz Parque Stadium, Sao Paulo, Brazil"
            priceTag="Starting at $200"
            textButtonLabel="GET TICKETS RIGHT NOW"
            parentalRating="18+"
          />
        </Box>
      </Box>
    </BaseContainer>
  );
}
