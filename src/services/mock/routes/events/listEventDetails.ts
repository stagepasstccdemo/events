import { Response } from "miragejs";
import { EventDetailsFixtures } from "@services/mock/fixtures/events";
import { EventDetailsDTO } from "@services/mock/DTO";

export const listEventDetails = async (schema) => {
  schema.get("/listEventDetails/:id", (schema, request) => {
    const { id } = request.params;

    const event = EventDetailsFixtures.find(
      (e: EventDetailsDTO) => e.id === Number(id)
    );

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
