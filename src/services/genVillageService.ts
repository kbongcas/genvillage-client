import axios, { AxiosResponse } from "axios";

// Define the base URL
const GENVILLAGE_SERVICE_URL = "/genvillageapi/genvillage";
const baseURL = GENVILLAGE_SERVICE_URL;

// Define types for the responses and parameters
interface HealthCheckResponse {
  message: string;
}

export interface Village {
  villageName: string;
  villageDescription: string;
  districts: District[];
  government: string;
  leader: Leader;
  npcs: NPC[];
}

export interface District {
  districtName: string;
  districtDescription: string;
}

export interface Leader {
  leaderName: string;
  leaderDescription: string;
}

export interface NPC {
  npcName: string;
  npcRace: string;
  npcOccupation: string;
  npcQuote: string;
}

// Health check function
const healthCheck = async (): Promise<AxiosResponse<HealthCheckResponse>> => {
  return await axios.get<HealthCheckResponse>(`${baseURL}/healthCheck`);
};

// Generate village function
const genVillage = async (theme: string): Promise<AxiosResponse<Village>> => {
  const returned = await axios.post<Village>(
    `${baseURL}/gen`,
    {
      theme: theme,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return returned;
};

// Export the service
export const genVillageService = {
  genVillage,
  healthCheck,
};
