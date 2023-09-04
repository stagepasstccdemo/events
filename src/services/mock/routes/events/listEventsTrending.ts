import { EventTrendingDTO } from "@services/mock/DTO";
import { EventTrendingFixtures } from "@services/mock/fixtures/events";

export const listEventsTrending = (schema) => {
  schema.get("/listEventsTrending", (schema) => {
    const positions = EventTrendingFixtures;
    const listEventsTrending = positions.map((pos: EventTrendingDTO) => {
      return schema.listEventsTrendings.create(pos);
    });
    return listEventsTrending;
  });
};
