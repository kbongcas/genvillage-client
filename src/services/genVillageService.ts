import axios, { AxiosResponse } from "axios";

// Define the base URL
const GENVILLAGE_SERVICE_URL = "/genvillage";
const baseURL = GENVILLAGE_SERVICE_URL;

// Define types for the responses and parameters
interface HealthCheckResponse {
  message: string;
}

interface GenVillageResponse {
  id: string;
}

// Health check function
const healthCheck = async (): Promise<AxiosResponse<HealthCheckResponse>> => {
  return await axios.get<HealthCheckResponse>(`${baseURL}/healthCheck`);
};

// Generate village function
const genVillage = async (
  theme: string
): Promise<AxiosResponse<GenVillageResponse>> => {
  const data = new FormData();
  data.append("theme", theme);
  return (await axios.post)<GenVillageResponse>(baseURL, data);
};

// Export the service
export const genVillageService = {
  genVillage,
  healthCheck,
};
