import { EventDetailsFixtures } from "@services/mock/fixtures/events";

export const listEventDetails = (schema: any) => {
  schema.get("/listEventDetails", (schema: any) => {
    const events = EventDetailsFixtures;

    const listEventDetails = events.map((event: any) => {
      return schema.listEventDetails.create(event);
    });

    return listEventDetails;
  });
};
