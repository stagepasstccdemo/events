import { QuickEventFilterDTO } from "@services/mock/DTO";
import { QuickEventFilterFixtures } from "@services/mock/fixtures/events";

export const listEventsQuickFilterOptions = (schema) => {
  schema.get("/eventsQuickFilterOptions", (schema) => {
    const filters = QuickEventFilterFixtures;
    const listQuickEventFilters = filters.map((filter: QuickEventFilterDTO) => {
      return schema.eventsQuickFilterOptions.create(filter);
    });

    return listQuickEventFilters;
  });
};
