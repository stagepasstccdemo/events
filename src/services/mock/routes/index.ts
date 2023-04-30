import { ENDPOINTS } from "@constants/endpoints";
import { EventSummaryFixtures } from "../fixtures/events";

export default function routes() {
  this.namespace = ENDPOINTS.baseURL;

  this.get("/event", (schema: any) => {
    const events = schema.events.all();
    return events;
  });

  this.get("/listEventsSummary", (schema: any) => {
    const positions = EventSummaryFixtures;
    const listEventsSummary = positions.map((pos: any) => {
      return schema.listEventsSummaries.create(pos);
    });

    return listEventsSummary;
  });
}
