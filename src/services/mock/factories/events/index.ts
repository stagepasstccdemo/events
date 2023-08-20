import { eventFactory } from "./EventFactory";
import { eventsQuickFilterOptionsFactory } from "./EventsQuickFilterOptionsFactory";
import { listEventDetailsFactory } from "./ListEventDetailsFactory";
import { listEventKindCategoriesFactory } from "./ListEventKindCategoriesFactory";
import { listEventSummaryFactory } from "./ListEventsSummaryFactory";
import { listTrendingEventsFactory } from "./ListTrendingEventsFactory";

export default {
  event: eventFactory,
  listEventsSummary: listEventSummaryFactory,
  listTrendingEvents: listTrendingEventsFactory,
  eventsQuickFilterOptions: eventsQuickFilterOptionsFactory,
  listEventKindCategories: listEventKindCategoriesFactory,
  listEventDetails: listEventDetailsFactory,
};
