import { EventKindDTO } from "./EventKindDTO";

export type TicketsDTO = {
  id: string;
  eventKind: EventKindDTO;
  totalAmount: number;
  metadata: {
    eventLocation: string;
    city: string;
    country: string;
    date: string;
    time: string;
    day: string;
  };
  ticketType: {
    id: string;
    type: "VIP" | "Standard" | "Student";
    price: number;
    amountAvailable: number;
  };
};
