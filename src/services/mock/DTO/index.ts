export type EventSummaryDTO = {
  id: number;
  eventImageURL: string;
  eventName: string;
  fullDateWithHour: string;
  location: string;
  priceTag: string;
  parentalRating: string;
};

export type EventDTO = {
  id: number;
  title: string;
};

export type EventTrendingDTO = Pick<
  EventSummaryDTO,
  "id" | "eventImageURL" | "eventName"
> & {
  trendingPosition: number;
};

export type QuickEventFilterDTO = {
  id: number;
  categoryName: string;
};

type CategoriesDTO = {
  id: number;
  title: string;
  pathTo: string;
};

export type EventKindCategoriesDTO = {
  id: string | number;
  title: string;
  items: CategoriesDTO[];
};

type TourSetlist = {
  id: number;
  songName: string;
};

type RecommendedEvents = {
  id: number;
  eventImageURL: string;
  eventMainTitle: string;
  eventSecondaryTitle: string;
};

type EventKind = "concert" | "theater" | "sport" | "festival";

export type Tickets = {
  id: string;
  eventKind: EventKind;
  totalAmount: number;
  metadata: {
    eventLocation: string;
    city: string;
    country: string;
    date: string;
  };
  ticketType: {
    id: string;
    type: "VIP" | "Standard" | "Student";
    price: number;
    amountAvailable: number;
  };
};

export type EventDetailsDTO = {
  id: number;
  eventMainTitle: string;
  eventSubTitle: string;
  parentalRating: number;
  amountOfCountriesForEvent: number;
  peopleInterestedAtThisEvent: number;
  aboutEvent: string;
  eventImageURL: string;
  eventVideoURL: string;
  tourSetlist?: TourSetlist[];
  recommendedEvents: RecommendedEvents[];
  tickets: Tickets[];
};
