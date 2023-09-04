import { EventKindCategoriesDTO } from "@services/mock/DTO";
import { EventKindCategoriesFixtures } from "@services/mock/fixtures/events";
import { Factory } from "miragejs";

export const listEventKindCategoriesFactory =
  Factory.extend<EventKindCategoriesDTO>({
    id(i) {
      return EventKindCategoriesFixtures[i].id;
    },
    title(i) {
      return EventKindCategoriesFixtures[i].title;
    },
    items(i) {
      return EventKindCategoriesFixtures[i].items;
    },
  });
