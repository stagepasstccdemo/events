import { EventSummaryDTO } from "@services/mock/DTO";
import { EventSummaryFixtures } from "@services/mock/fixtures/events";

export const listEventsSummary = (schema) => {
  schema.get("/listEventsSummary", (schema) => {
    const positions = EventSummaryFixtures;
    const listEventsSummary = positions.map((pos: EventSummaryDTO) => {
      return schema.listEventsSummaries.create(pos);
    });

    return listEventsSummary;
  });
};
