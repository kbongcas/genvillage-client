import "./App.css";
import { useState, useEffect } from "react";
import { genVillageService } from "./services/genVillageService";

function App() {
  const [healthStatus, setHealthStatus] = useState<string>("");

  const checkHealth = async () => {
    await genVillageService.healthCheck().then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        setHealthStatus(response.data as string);
      } else {
        setHealthStatus("Service is down. Please try again later.");
      }
    });
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          {healthStatus === "" ? (
            <p className="py-6">Not good</p>
          ) : (
            <p className="py-6">{healthStatus}</p>
          )}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
