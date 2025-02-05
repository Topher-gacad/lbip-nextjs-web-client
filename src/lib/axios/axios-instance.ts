import axiosLib from "axios";
import cookiesLib from "js-cookie";

const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const axiosInstance = axiosLib.create({
  baseURL: backendApiUrl || "http://localhost:8000/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(async config => {
  if ((config.method as string).toLowerCase() !== "get") {
    await axiosInstance.get("/csrf-cookie");
    config.headers["X-XSRF-TOKEN"] = cookiesLib.get("XSRF-TOKEN");
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      const message = error?.response?.data?.message;
      return Promise.reject(new Error(message || "An error occurred"));
    } else {
      return Promise.reject(
        new Error("Network Error: Please check your connection.")
      );
    }
  }
);

export default axiosInstance;
