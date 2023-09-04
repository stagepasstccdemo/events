import { ENDPOINTS } from "@constants/endpoints";
import { Response } from "miragejs";
import { EventDetailsFixtures } from "../fixtures/events";

import {
  eventRoutes,
  listEventDetails,
  listEventKindCategories,
  listEventsQuickFilterOptions,
  listEventsSummary,
  listEventsTrending,
} from "./events";

export default function routes() {
  this.namespace = ENDPOINTS.baseURL;
  this.timing = 0;

  // Events
  eventRoutes(this);
  listEventsTrending(this);
  listEventsSummary(this);
  listEventsQuickFilterOptions(this);
  listEventKindCategories(this);
  listEventDetails(this);
}
