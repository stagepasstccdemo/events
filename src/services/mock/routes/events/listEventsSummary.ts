import { EventSummaryFixtures } from "@services/mock/fixtures/events";

export const listEventsSummary = (schema: any) => {
  schema.get("/listEventsSummary", (schema: any) => {
    const positions = EventSummaryFixtures;
    const listEventsSummary = positions.map((pos: any) => {
      return schema.listEventsSummaries.create(pos);
    });

    return listEventsSummary;
  });
};
