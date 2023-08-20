import { QuickEventFilterFixtures } from "@services/mock/fixtures/events";

export const listEventsQuickFilterOptions = (schema: any) => {
  schema.get("/eventsQuickFilterOptions", (schema: any) => {
    const filters = QuickEventFilterFixtures;
    const listQuickEventFilters = filters.map((filter: any) => {
      return schema.eventsQuickFilterOptions.create(filter);
    });

    return listQuickEventFilters;
  });
};
