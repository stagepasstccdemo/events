import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 5000,
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the access token has expired
    if (
      error.response.status === 401 &&
      originalRequest.url === "/auth/refresh"
    ) {
      return Promise.reject(error);
    }

    // If the access token has expired, but there is a refresh token
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh_token")
    ) {
      originalRequest._retry = true;

      // Get a new access token using the refresh token
      const res = await axios.post("/auth/refresh", {
        refresh_token: localStorage.getItem("refresh_token"),
      });

      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token);
        return api(originalRequest);
      }
    }

    // For other errors, reject the promise
    return Promise.reject(error);
  }
);
