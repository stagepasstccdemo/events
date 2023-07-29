import { Factory } from "miragejs";
import {
  EventDTO,
  EventKindCategoriesDTO,
  EventSummaryDTO,
  EventTrendingDTO,
  QuickEventFilterDTO,
} from "../DTO";
import {
  EventKindCategoriesFixtures,
  EventSummaryFixtures,
  EventTrendingFixtures,
} from "../fixtures/events";

export default {
  event: Factory.extend<EventDTO>({
    id() {
      return Math.floor(Math.random() * 1000);
    },
    title() {
      return "Event title";
    },
  }),

  listEventsSummary: Factory.extend<EventSummaryDTO>({
    id(i) {
      return i + 1;
    },
    eventImageURL() {
      return EventSummaryFixtures[0].eventImageURL;
    },
    eventName() {
      return EventSummaryFixtures[0].eventName;
    },
    fullDateWithHour() {
      return EventSummaryFixtures[0].fullDateWithHour;
    },
    location() {
      return EventSummaryFixtures[0].location;
    },
    priceTag() {
      return EventSummaryFixtures[0].priceTag;
    },
    parentalRating() {
      return EventSummaryFixtures[0].parentalRating;
    },
  }),

  listTrendingEvents: Factory.extend<EventTrendingDTO>({
    id(i) {
      return i + 1;
    },
    trendingPosition() {
      return EventTrendingFixtures[0].trendingPosition;
    },
    eventImageURL() {
      return EventTrendingFixtures[0].eventImageURL;
    },
    eventName() {
      return EventTrendingFixtures[0].eventName;
    },
  }),

  eventsQuickFilterOptions: Factory.extend<QuickEventFilterDTO>({
    id(i) {
      return i + 1;
    },
    categoryName() {
      return "All";
    },
  }),

  listEventKindCategories: Factory.extend<EventKindCategoriesDTO>({
    id(i) {
      return EventKindCategoriesFixtures[i].id;
    },
    title(i) {
      return EventKindCategoriesFixtures[i].title;
    },
    items(i) {
      return EventKindCategoriesFixtures[i].items;
    },
  }),
};
