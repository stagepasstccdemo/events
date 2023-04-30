// @ts-nocheck
import { Box, Filter, Divider, FilteredCards } from "@stagepass/osiris-ui";
import { FiFilter, MdFilterList } from "@assets/icons";
import {
  filteredBadgesList,
  filteredCardListItems,
  numberedCardsListItems,
} from "../../mocks";

export function HomeCards() {
  return (
    <>
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
    </>
  );
}
