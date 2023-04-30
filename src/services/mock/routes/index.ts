import { ENDPOINTS } from "@constants/endpoints";

export default function routes() {
  this.namespace = ENDPOINTS.baseURL;

  this.get("/event", (schema: any) => {
    const events = schema.events.all();
    return events;
  });

  this.get("/listEventsSummary", (schema: any) => {
    const events = schema.listEventsSummaries.all();
    return events;
  });
}
