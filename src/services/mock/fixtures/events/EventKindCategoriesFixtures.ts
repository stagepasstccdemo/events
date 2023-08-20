import { EventKindCategoriesDTO } from "@services/mock/DTO";

export const EventKindCategoriesFixtures: EventKindCategoriesDTO[] = [
  {
    id: 1,
    title: "Music",
    items: [
      {
        id: 1,
        title: "All",
        pathTo: "/events/music/all",
      },

      {
        id: 2,
        title: "Alternative",
        pathTo: "/events/music/alternative",
      },
    ],
  },
  {
    id: 2,
    title: "Sports",
    items: [
      {
        id: 1,
        title: "All",
        pathTo: "/events/sports/all",
      },
      {
        id: 2,
        title: "Baseball",
        pathTo: "/events/sports/baseball",
      },
    ],
  },
];
