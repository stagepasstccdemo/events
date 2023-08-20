import { EventKindCategoriesFixtures } from "@services/mock/fixtures/events";

export const listEventKindCategories = (schema: any) => {
  schema.get("/listEventKindCategories", (schema: any) => {
    const categories = EventKindCategoriesFixtures;

    const listEventKindCategories = categories.map((category: any) => {
      return schema.listEventKindCategories.create(category);
    });

    return listEventKindCategories;
  });
};
