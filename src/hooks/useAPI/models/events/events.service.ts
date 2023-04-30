import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";

export const useEventsService = () => {
  const getEvents = async () => {
    const response = await api.get<any[]>(ENDPOINTS.listAllEvents);

    return response.data;
  };

  const services = {
    getEvents,
  };

  return services;
};
