import { ENDPOINTS } from "@constants/endpoints";
import axios from "axios";

export const api = axios.create({
  baseURL: ENDPOINTS.baseURL,
  timeout: 5000,
});
