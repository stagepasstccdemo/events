import { Box, Heading, Loading } from "@stagepass/osiris-ui";

import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI";
import { PageWrapper } from "@components/PageWrapper";
import { useSearchParams } from "@hooks/useSearchParams";
import {
  EventDetailsSummaryHeader,
  EventExtraContent,
  EventSearchList,
} from "@components/EventDetailsInfo";

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
    <PageWrapper>
      {error ? (
        <Heading text="Something went wrong" />
      ) : (
        <Box mt="5">
          <EventDetailsSummaryHeader data={data.summaryHeader} />
          <EventSearchList data={data.eventTicketsList} />
          <EventExtraContent data={data.eventExtraContent} />
        </Box>
      )}
    </PageWrapper>
  );
}
