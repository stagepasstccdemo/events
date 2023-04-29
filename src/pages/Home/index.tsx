// @ts-nocheck
import {
  Box,
  BaseContainer,
  Header,
  SearchInput,
  Filter,
  FilteredCards,
  Divider,
  Footer,
} from "@stagepass/osiris-ui";
import { FiMenu, FiFilter, MdFilterList, FiChevronsUp } from "@assets/icons";
import LogoImg from "@assets/logo-inline.png";

import {
  filteredBadgesList,
  filteredCardListItems,
  numberedCardsListItems,
} from "../../mocks";

export function Home() {
  return (
    <BaseContainer>
      <Header
        leftIcon={<FiMenu size={34} color="F26A0F" />}
        logoImg={LogoImg}
        userProfile="FA"
        leftIconModalContent={<h1>testeeeeee</h1>}
        rightIconModalContent={<h1>teste123</h1>}
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
          renderBadgesList={filteredBadgesList}
        >
          <FilteredCards
            textLabel="Filtered Options"
            buttonLabel="show all"
            renderList={filteredCardListItems}
            hasSeeMoreOption
          />
        </Filter>

        <Box mt="25px" mb="25px">
          <Divider rounded="full" />
        </Box>

        <Box>
          <FilteredCards
            textLabel="Trending Events"
            cardType="numbered"
            renderList={numberedCardsListItems}
          />
        </Box>
      </Box>

      <Box mt="25px" mb="25px">
        <Divider rounded="full" />
      </Box>
      <Footer iconButton={<FiChevronsUp size={64} color="F26A0F" />} />
    </BaseContainer>
  );
}
