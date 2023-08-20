export function eventRoutes(schema) {
  schema.get("/event", (schema) => {
    const events = schema.events.all();
    return events;
  });
  // ...other event-related routes
}
