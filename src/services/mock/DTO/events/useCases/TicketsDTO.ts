import { EventKindDTO } from "./EventKindDTO";

type TicketOptions = {
  id: string;
  type: "VIP" | "Standard" | "Student";
  price: number;
  amountAvailable: number;
};

export type TicketsDTO = {
  id: string;
  kind: EventKindDTO;
  location: string;
  city: string;
  country: string;
  date: string;
  day: string;
  time: string;
  ticketOptions: TicketOptions[];
};
