import { EventSummaryDTO } from "@services/mock/DTO";
import { EventSummaryFixtures } from "@services/mock/fixtures/events";
import { Factory } from "miragejs";

export const listEventSummaryFactory = Factory.extend<EventSummaryDTO>({
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
});
