import {
  BaseContainer,
  Box,
  Heading,
  Loading,
  SearchInput,
} from "@stagepass/osiris-ui";

import { DefaultFooter } from "@components/Footer";
import { DefaultHeader } from "@components/Header";
import { EventDetailsSummaryHeader } from "@components/EventDetailsInfo";
import { EventSearchList } from "@components/EventDetailsInfo/EventSearchList";
import { EventExtraContent } from "@components/EventDetailsInfo/EventExtraContent";

import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useEventsService } from "@hooks/useAPI";
import { useSearchParams } from "@hooks/useSearchParams";

export function EventDetails() {
  const eventId = useSearchParams("eventId");
  const { getEventDetails } = useEventsService();

  const { data, isLoading, isFetching, error } = useQuery(
    "@stagepass:event_info_details",
    () => getEventDetails(eventId),
    {
      staleTime: 1000 * 60 * 1, // 1 minute
    }
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <BaseContainer>
      <DefaultHeader />
      <Box mt="2rem" mb="2rem">
        <SearchInput />
      </Box>
      {error ? (
        <Heading text="Something went wrong" />
      ) : (
        <Box>
          <EventDetailsSummaryHeader data={data.summaryHeader} />
          <EventSearchList data={data.eventTicketsList} />
          <EventExtraContent data={data.eventExtraContent} />
        </Box>
      )}
      <DefaultFooter />
    </BaseContainer>
  );
}
