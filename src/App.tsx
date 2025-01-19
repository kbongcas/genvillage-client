import "./App.css";
import { useState } from "react";
import { genVillageService, Village } from "./services/genVillageService";

function App() {
  const [generatedVillage, setGeneratedVillage] = useState<Village>();
  const [generating, setGenerating] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");

  const generateVillage = async (theme: string) => {
    console.log("Generating village with theme: ", theme);
    setGenerating(true);
    const response = await genVillageService.genVillage(theme).finally(() => {
      setGenerating(false);
    });
    setGeneratedVillage(response.data);
    setTheme("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Village Generator</h1>
      {generating && (
        <div className="flex-grow items-center gap-3 justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
      {generatedVillage && (
        <div className="flex-grow items-start gap-3">
          <h1 className="text-2xl font-bold">
            {generatedVillage?.villageName}
          </h1>
          <p>{generatedVillage?.villageDescription}</p>
          <div>
            <h1 className="text-2xl font-bold">Districts</h1>
            {generatedVillage?.districts.map((district, index) => (
              <div className=" ml-4" key={index}>
                <h2 className="font-bold">{district.districtName}</h2>
                <p>{district.districtDescription}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Government</h2>
            <p>{generatedVillage?.government}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Leader</h2>
            <h1 className="font-semibold">
              {generatedVillage?.leader.leaderName}
            </h1>
            <p>{generatedVillage?.leader.leaderDescription}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Leader</h2>
            <h1 className="font-semibold">
              {generatedVillage?.leader.leaderName}
            </h1>
            <p>{generatedVillage?.leader.leaderDescription}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">NPCs</h2>
            {generatedVillage?.npcs.map((npc, index) => (
              <div className=" ml-4 mb-1" key={index}>
                <p>
                  - <b>{npc.npcName}</b>, {npc.npcRace}, {npc.npcOccupation}
                </p>
                <p>{npc.npcQuote}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="Enter a theme for the village"
          className="input input-bordered input-primary w-full"
          onChange={(e) => setTheme(e.currentTarget.value)}
        />
        <button
          className="btn btn-primary w-full mt-4"
          onClick={async () => {
            if (theme) {
              await generateVillage(theme);
            }
          }}
        >
          Generate Village
        </button>
      </div>
    </div>
  );
}

export default App;
