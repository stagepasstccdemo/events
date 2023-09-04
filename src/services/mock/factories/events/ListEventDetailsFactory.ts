import { EventDetailsDTO } from "@services/mock/DTO";
import { EventDetailsFixtures } from "@services/mock/fixtures/events";
import { Factory } from "miragejs";

export const listEventDetailsFactory = Factory.extend<EventDetailsDTO>({
  id(i) {
    return i + 1;
  },
  locationsAmount() {
    return EventDetailsFixtures[0].locationsAmount;
  },
  eventMainTitle() {
    return EventDetailsFixtures[0].eventMainTitle;
  },
  eventSubTitle() {
    return EventDetailsFixtures[0].eventSubTitle;
  },
  parentalRating() {
    return EventDetailsFixtures[0].parentalRating;
  },
  peopleInterestedAtThisEvent() {
    return EventDetailsFixtures[0].peopleInterestedAtThisEvent;
  },
  aboutEvent() {
    return EventDetailsFixtures[0].aboutEvent;
  },
  eventImageURL() {
    return EventDetailsFixtures[0].eventImageURL;
  },
  eventVideoURL() {
    return EventDetailsFixtures[0].eventVideoURL;
  },
  tourSetlist() {
    return EventDetailsFixtures[0].tourSetlist;
  },
  recommendedEvents() {
    return EventDetailsFixtures[0].recommendedEvents;
  },
  tickets() {
    return EventDetailsFixtures[0].tickets;
  },
});
