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
};
