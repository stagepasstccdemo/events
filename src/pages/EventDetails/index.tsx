import { DefaultFooter } from "@components/Footer";
import { DefaultHeader } from "@components/Header";
import { BaseContainer, Box, SearchInput } from "@stagepass/osiris-ui";

import { useLocation, useParams } from "react-router-dom";
import { EventDetailsSummaryHeader } from "@components/EventDetailsInfo";
import { EventSearchList } from "@components/EventDetailsInfo/EventSearchList";
import { EventExtraContent } from "@components/EventDetailsInfo/EventExtraContent";

import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI";
import { useEffect } from "react";
import { makeServer } from "@services/mock/server";

export function EventDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { getEventDetails } = useEventsService();

  const {
    data: eventsSummary,
    isLoading: eventsSummaryIsLoading,
    isFetching: eventsSummaryIsFetching,
    error: eventsSummaryError,
    refetch: eventsSummaryRefetch,
  } = useQuery("@stagepass:event_info_details", () => getEventDetails("1"), {
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  return (
    <BaseContainer>
      <DefaultHeader />
      <Box mt="2rem" mb="2rem">
        <SearchInput />
      </Box>
      <EventDetailsSummaryHeader />
      <EventSearchList />
      <EventExtraContent />
      <DefaultFooter />
    </BaseContainer>
  );
}
