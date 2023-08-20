import { ENDPOINTS } from "@constants/endpoints";

import {
  eventRoutes,
  listEventKindCategories,
  listEventsQuickFilterOptions,
  listEventsSummary,
  listEventsTrending,
} from "./events";

export default function routes() {
  this.namespace = ENDPOINTS.baseURL;

  // Events
  eventRoutes(this);
  listEventsTrending(this);
  listEventsSummary(this);
  listEventsQuickFilterOptions(this);
  listEventKindCategories(this);
}
