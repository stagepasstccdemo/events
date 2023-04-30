import { Factory } from "miragejs";

export default {
  event: Factory.extend({
    id() {
      return Math.floor(Math.random() * 1000);
    },
    title() {
      return "Event title";
    },
  }),

  listEventsSummary: Factory.extend({
    id() {
      return Math.floor(Math.random() * 1000);
    },
    eventName() {
      return "Event name";
    },
    fullDateWithHour() {
      return "2021-08-01T00:00:00";
    },
    location() {
      return "Location";
    },
    priceTag() {
      return "Price tag";
    },
  }),
};
