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
import { EventDetailsDTO } from "@services/mock/DTO";

export function EventDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { getEventDetails } = useEventsService();

  const { data, isLoading, isFetching, error } = useQuery(
    "@stagepass:event_info_details",
    () => getEventDetails("1"),
    {
      staleTime: 1000 * 60 * 30, // 30 minutes
    }
  );

  const eventDetailsAdapter = (data: EventDetailsDTO) => {
    const summaryHeader = {
      eventImageURL: data.eventImageURL,
      eventMainTitle: data.eventMainTitle,
      eventSubTitle: data.eventSubTitle,
      parentalRating: data.parentalRating,
      locationsAmount: data.locationsAmount,
      peopleInterestedAtThisEvent: data.peopleInterestedAtThisEvent,
      aboutEvent: data.aboutEvent,
    };

    const eventTicketsList = data.tickets;

    const eventExtraContent = {
      tourSetlist: data.tourSetlist,
      eventVideoURL: data.eventVideoURL,
      recommendedEvents: data.recommendedEvents,
    };

    return {
      summaryHeader,
      eventTicketsList,
      eventExtraContent,
    };
  };

  return (
    <BaseContainer>
      <DefaultHeader />
      <Box mt="2rem" mb="2rem">
        <SearchInput />
      </Box>
      <EventDetailsSummaryHeader
        data={data && eventDetailsAdapter(data).summaryHeader}
      />
      <EventSearchList
        data={data && eventDetailsAdapter(data).eventTicketsList}
      />
      <EventExtraContent
        data={data && eventDetailsAdapter(data).eventExtraContent}
      />
      <DefaultFooter />
    </BaseContainer>
  );
}
