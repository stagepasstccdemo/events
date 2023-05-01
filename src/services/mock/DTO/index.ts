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