import { Response } from "miragejs";
import { EventDetailsFixtures } from "@services/mock/fixtures/events";

export const listEventDetails = (schema: any) => {
  schema.get("/listEventDetails/:id", (schema: any, request: any) => {
    const { id } = request.params;
    const event = EventDetailsFixtures.find((e: any) => e.id === Number(id));

    if (event) {
      return schema.listEventDetails.create(event);
    }

    return new Response(
      404,
      {},
      {
        error: "Event not found",
      }
    );
  });
};
