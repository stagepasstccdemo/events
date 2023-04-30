import { useParams } from "react-router-dom";

export function EventDetails() {
  const { eventId } = useParams();

  return <h1>Detalhes do evento {eventId}</h1>;
}
