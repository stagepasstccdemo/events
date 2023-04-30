import { ENDPOINTS } from "@constants/endpoints";
import { api } from "@services/api";
import axios from "axios";

export const useGithubService = () => {
  const getUserInfo = async () => {
    console.log("chamou aqui");
    const response = await api.get(`/event`);
    console.log(response.data);
    return response.data;
  };

  const services = {
    getUserInfo,
  };

  return services;
};
