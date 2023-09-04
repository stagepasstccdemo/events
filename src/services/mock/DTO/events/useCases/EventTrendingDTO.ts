import { EventSummaryDTO } from "./EventSummaryDTO";

export type EventTrendingDTO = Pick<
  EventSummaryDTO,
  "id" | "eventImageURL" | "eventName"
> & {
  trendingPosition: number;
};
