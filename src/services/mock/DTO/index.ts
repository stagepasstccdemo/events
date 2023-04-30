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
