// @ts-nocheck
import { Box, Filter, Divider, FilteredCards } from "@stagepass/osiris-ui";
import { FiFilter, MdFilterList } from "@assets/icons";
import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI";
import { EventSummaryDTO } from "@services/mock/DTO";
import { filteredBadgesList, numberedCardsListItems } from "../../mocks";

export function HomeCards() {
  const { getEventsSummary } = useEventsService();

  const {
    data: eventsSummary,
    isLoading,
    isFetching,
    error,
  } = useQuery("@stagepass:events_summary", getEventsSummary);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            renderList={eventsSummary || []}
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
