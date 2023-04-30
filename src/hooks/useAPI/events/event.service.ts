import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";
import { EventSummaryDTO } from "@services/mock/DTO";

export const useEventsService = () => {
  const getEventsSummary = async () => {
    const response = await api.get<EventSummaryDTO[]>(
      ENDPOINTS.LIST_EVENTS_SUMMARY
    );

    const formattedData = response.data.map((event) => ({
      key: event.id,
      sourceBannerImg: event.eventImageURL,
      titleCard: event.eventName,
      legendCard: event.fullDateWithHour,
      detailsDescriptionCard: event.location,
      priceTag: event.priceTag,
      textButtonLabel: "GET TICKETS RIGHT NOW",
      parentalRating: event.parentalRating,
    }));

    return formattedData;
  };

  const services = {
    getEventsSummary,
  };

  return services;
};
