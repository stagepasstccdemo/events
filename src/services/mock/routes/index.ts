import { ENDPOINTS } from "@constants/endpoints";
import {
  EventSummaryFixtures,
  EventTrendingFixtures,
  QuickEventFilterFixtures,
} from "../fixtures/events";

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

  this.get("/listEventsTrending", (schema: any) => {
    const positions = EventTrendingFixtures;
    const listEventsTrending = positions.map((pos: any) => {
      return schema.listEventsTrendings.create(pos);
    });
    return listEventsTrending;
  });

  this.get("/eventsQuickFilterOptions", (schema: any) => {
    const filters = QuickEventFilterFixtures;
    const listQuickEventFilters = filters.map((filter: any) => {
      return schema.eventsQuickFilterOptions.create(filter);
    });

    return listQuickEventFilters;
  });
}
