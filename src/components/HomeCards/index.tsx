// @ts-nocheck
import {
  Box,
  Filter,
  Divider,
  FilteredCards,
  Skeleton,
  Flex,
} from "@stagepass/osiris-ui";
import { FiFilter, MdFilterList } from "@assets/icons";
import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI";

export function HomeCards() {
  const { getEventsSummary, getEventsTrending, getQuickFilterOptions } =
    useEventsService();

  const {
    data: eventsSummary,
    isLoading: eventsSummaryIsLoading,
    isFetching: eventsSummaryIsFetching,
    error: eventsSummaryError,
  } = useQuery("@stagepass:events_summary", getEventsSummary, {
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  const {
    data: eventsTrending,
    isLoading: eventsTrendingIsLoading,
    isFetching: eventsTrendingIsFetching,
    error: eventsTrendingError,
  } = useQuery("@stagepass:events_trending", getEventsTrending, {
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  const {
    data: eventsFilterOptions,
    isLoading: filterOptionsIsLoading,
    isFetching: filterOptionsIsFetching,
    error: filterOptionsError,
  } = useQuery("@stagepass:events_filter_options", getQuickFilterOptions);

  if (
    eventsSummaryIsLoading ||
    eventsTrendingIsLoading ||
    filterOptionsIsLoading ||
    eventsSummaryIsFetching ||
    eventsTrendingIsFetching ||
    filterOptionsIsFetching
  ) {
    return (
      <Flex flexDirection="column" gap="10">
        <Skeleton height="80px" rounded="xl" />
        <Skeleton height="80px" rounded="xl" />
        <Skeleton height="400px" rounded="xl" />
        <Skeleton height="300px" rounded="xl" />
      </Flex>
    );
  }

  if (eventsSummaryError || eventsTrendingError || filterOptionsError) {
    return (
      <Box>
        <h1>Something went wrong.</h1>
      </Box>
    );
  }

  return (
    <>
      <Box mt="1.75rem">
        <Filter
          leftIcon={<FiFilter size={20} color="7D6FEC" />}
          leftText="Quick Filter"
          rightIcon={<MdFilterList size={20} color="7D6FEC" />}
          rightText="advanced filters"
          renderBadgesList={eventsFilterOptions || []}
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
            renderList={eventsTrending || []}
          />
        </Box>
      </Box>

      <Box mt="25px" mb="25px">
        <Divider rounded="full" />
      </Box>
    </>
  );
}
