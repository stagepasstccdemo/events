// @ts-nocheck
import {
  BaseContainer,
  Flex,
  Skeleton,
  Box,
  Accordion,
  Divider,
} from "@stagepass/osiris-ui";

import { useEventsService } from "@hooks/useAPI";
import { useQuery } from "react-query";
import { EventKindCategoriesDTO } from "@services/mock/DTO";
import React from "react";

export function ListCategories() {
  const { getEventKindCategories } = useEventsService();

  const {
    data: eventKindCategories,
    isLoading: eventKindCategoriesIsLoading,
    isFetching: eventKindCategoriesIsFetching,
    error: eventKindCategoriesError,
  } = useQuery("@stagepass:event_kind_categories", getEventKindCategories, {
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  if (eventKindCategoriesIsLoading || eventKindCategoriesIsFetching) {
    return (
      <Flex bgColor="primary" flexDirection="column" gap="10">
        <Skeleton height="80px" rounded="xl" />
        <Skeleton height="80px" rounded="xl" />
      </Flex>
    );
  }

  if (eventKindCategoriesError) {
    return (
      <Box>
        <h1>Something went wrong.</h1>
      </Box>
    );
  }

  return eventKindCategories.map<EventKindCategoriesDTO[]>(
    (data: EventKindCategoriesDTO, index: any) => {
      const isLastItem = index === eventKindCategories.length - 1;

      return (
        <React.Fragment key={data.id}>
          <Accordion title={data.title} data={data.items} />
          {!isLastItem ? <Divider m="2" borderColor="os-ternary.300" /> : null}
        </React.Fragment>
      );
    }
  );
}
