import { Flex, Skeleton, Box, Accordion, Divider } from "@stagepass/osiris-ui";

import { useEventsService } from "@hooks/useAPI";
import { useQuery } from "react-query";
import { EventKindCategoriesDTO } from "@services/mock/DTO";
import React from "react";

export function ListCategories() {
  const { getEventKindCategories } = useEventsService();

  const { data, isLoading, isFetching, error } = useQuery(
    "@stagepass:event_kind_categories",
    getEventKindCategories,
    {
      staleTime: 1000 * 60 * 60 * 24 * 30, // 1 month
    }
  );

  if (isLoading || isFetching) {
    return (
      <Flex bgColor="primary" flexDirection="column" gap="10">
        <Skeleton height="80px" rounded="xl" />
        <Skeleton height="80px" rounded="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box>
        <h1>Something went wrong.</h1>
      </Box>
    );
  }

  return data.map((item: EventKindCategoriesDTO, index: number) => {
    const isLastItem = index === data.length - 1;

    return (
      <React.Fragment key={item.id}>
        <Accordion title={item.title} data={item.items} />
        {!isLastItem ? <Divider m="2" borderColor="os-ternary.300" /> : null}
      </React.Fragment>
    );
  });
}
