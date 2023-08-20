import { Server } from "miragejs";

function eventSeeder(server: Server): void {
  server.createList("event", 10);
}

function listEventsSummarySeeder(server: Server): void {
  server.createList("listEventsSummary", 10);
}

function listEventsTrendingSeeder(server: Server): void {
  server.createList("listEventsTrending", 10);
}

function listEventKindCategoriesSeeder(server: Server): void {
  server.createList("listEventKindCategory", 10);
}

function listEventDetails(server: Server): void {
  server.createList("listEventDetail", 10);
}

export default function seeds(server: Server): void {
  eventSeeder(server);
  listEventsSummarySeeder(server);
  listEventsTrendingSeeder(server);
  listEventKindCategoriesSeeder(server);
  listEventDetails(server);
}
