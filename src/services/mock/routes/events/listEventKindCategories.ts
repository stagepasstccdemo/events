import { EventKindCategoriesDTO } from "@services/mock/DTO";
import { EventKindCategoriesFixtures } from "@services/mock/fixtures/events";

export const listEventKindCategories = (schema) => {
  schema.get("/listEventKindCategories", (schema) => {
    const categories = EventKindCategoriesFixtures;

    const listEventKindCategories = categories.map(
      (category: EventKindCategoriesDTO) => {
        return schema.listEventKindCategories.create(category);
      }
    );

    return listEventKindCategories;
  });
};
