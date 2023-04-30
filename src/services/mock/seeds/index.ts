import { Server } from "miragejs";

function eventSeeder(server: Server): void {
  server.createList("event", 10);
}

function listEventsSummarySeeder(server: Server): void {
  server.createList("listEventsSummary", 10);
}

export default function seeds(server: Server): void {
  eventSeeder(server);
  listEventsSummarySeeder(server);
}
