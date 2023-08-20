import { EventDTO } from "@services/mock/DTO";
import { Factory } from "miragejs";

export const eventFactory = Factory.extend<EventDTO>({
  id() {
    return Math.floor(Math.random() * 1000);
  },
  title() {
    return "Event title";
  },
});
