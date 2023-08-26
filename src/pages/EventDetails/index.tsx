import { Box, Heading, Loading } from "@stagepass/osiris-ui";

import { EventDetailsSummaryHeader } from "@components/EventDetailsInfo";
import { EventSearchList } from "@components/EventDetailsInfo/EventSearchList";
import { EventExtraContent } from "@components/EventDetailsInfo/EventExtraContent";

import { useQuery } from "react-query";
import { useEventsService } from "@hooks/useAPI";
import { useSearchParams } from "@hooks/useSearchParams";
import { PageWrapper } from "@components/PageWrapper";

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
        <Box>
          <EventDetailsSummaryHeader data={data.summaryHeader} />
          <EventSearchList data={data.eventTicketsList} />
          <EventExtraContent data={data.eventExtraContent} />
        </Box>
      )}
    </PageWrapper>
  );
}
