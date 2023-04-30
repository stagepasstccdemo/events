import { ENDPOINTS } from "@constants/endpoints";

export default function routes() {
  this.namespace = ENDPOINTS.baseURL;

  this.resource("event");

  this.get("/event", (schema: any) => {
    const events = schema.events.all();
    return events;
  });
}
