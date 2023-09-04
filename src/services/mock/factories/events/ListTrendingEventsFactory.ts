import { EventTrendingDTO } from "@services/mock/DTO";
import { EventTrendingFixtures } from "@services/mock/fixtures/events";
import { Factory } from "miragejs";

export const listTrendingEventsFactory = Factory.extend<EventTrendingDTO>({
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
});
