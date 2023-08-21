import { RecommendedEventsDTO } from "./RecommendedEventsDTO";
import { TicketsDTO } from "./TicketsDTO";

type TourSetlistDTO = {
  id: number;
  songName: string;
};

export type EventDetailsDTO = {
  id: number;
  eventMainTitle: string;
  locationsAmount: number;
  eventSubTitle: string;
  parentalRating: number;
  peopleInterestedAtThisEvent: number;
  aboutEvent: string;
  eventImageURL: string;
  eventVideoURL: string;
  tourSetlist?: TourSetlistDTO[];
  recommendedEvents: RecommendedEventsDTO[];
  tickets: TicketsDTO[];
};
