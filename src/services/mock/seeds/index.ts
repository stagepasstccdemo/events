const eventSeeder = (server: any) => {
  server.createList("event", 10);
  server.createList("listEventsSummary", 10);
};

export default function seeds(server: any) {
  eventSeeder(server);
}
