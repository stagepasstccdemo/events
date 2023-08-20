import { EventTrendingFixtures } from "@services/mock/fixtures/events";

export const listEventsTrending = (schema: any) => {
  schema.get("/listEventsTrending", (schema: any) => {
    const positions = EventTrendingFixtures;
    const listEventsTrending = positions.map((pos: any) => {
      return schema.listEventsTrendings.create(pos);
    });
    return listEventsTrending;
  });
};
