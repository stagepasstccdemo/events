import { QuickEventFilterDTO } from "@services/mock/DTO";
import { Factory } from "miragejs";

export const eventsQuickFilterOptionsFactory =
  Factory.extend<QuickEventFilterDTO>({
    id(i) {
      return i + 1;
    },
    categoryName() {
      return "All";
    },
  });
