export function eventRoutes(schema: any) {
  schema.get("/event", (schema: any) => {
    const events = schema.events.all();
    return events;
  });
  // ...other event-related routes
}
