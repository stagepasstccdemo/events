// @ts-nocheck
import {
  Box,
  BaseContainer,
  Header,
  SearchInput,
  Filter,
  FilteredCards,
} from "@stagepass/osiris-ui";
import { FiMenu, FiFilter, MdFilterList } from "@assets/icons";
import LogoImg from "@assets/logo-inline.png";
import { filteredBadgesList, filteredCardListItems } from "../../mocks";

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
          renderBadgesList={filteredBadgesList}
        />

        <Box mt="2rem">
          <FilteredCards
            textLabel="Filtered Options"
            buttonLabel="show all"
            renderList={filteredCardListItems}
          />
        </Box>
      </Box>
    </BaseContainer>
  );
}
