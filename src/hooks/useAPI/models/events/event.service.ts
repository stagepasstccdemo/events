import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";

export const useEventsService = () => {
  const getEventsSummary = async () => {
    const response = await api.get(ENDPOINTS.LIST_EVENTS_SUMMARY);
    return response.data;
  };

  const services = {
    getEventsSummary,
  };

  return services;
};
