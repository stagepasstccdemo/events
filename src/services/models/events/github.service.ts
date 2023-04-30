import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";

export const useGithubService = () => {
  const getUserInfo = async () => {
    const response = await api.get<any[]>(
      `${ENDPOINTS.getUserInfo}/fillipeags`
    );

    return response.data;
  };

  const services = {
    getUserInfo,
  };

  return services;
};
