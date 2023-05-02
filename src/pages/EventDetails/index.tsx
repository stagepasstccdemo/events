// @ts-nocheck
import { DefaultFooter } from "@components/Footer";
import { DefaultHeader } from "@components/Header";
import { BaseContainer, Box, SearchInput } from "@stagepass/osiris-ui";

import { useParams } from "react-router-dom";
import { EventDetailsSummaryHeader } from "@components/EventDetailsInfo";
import { EventSearchList } from "@components/EventDetailsInfo/EventSearchList";
import { EventExtraContent } from "@components/EventDetailsInfo/EventExtraContent";

export function EventDetails() {
  const { eventId } = useParams();

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
