import React from "react";
import { useWorldData, useCountryData, useGraphData } from "../api";
import { LineGraph, Map } from "../components";


// Define the ChartsandMapspage component
const ChartsandMapspage: React.FC = () => {
    // Use custom hooks to fetch data for world, country, and graph
  const worldDataQuery = useWorldData();
  const countryDataQuery = useCountryData();
  const graphDataQuery = useGraphData();
   // Display loading message if data is being fetched
  if (
    worldDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  )
    return <div>Loading...</div>;
  // Display error message
  if (
    worldDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isLoading
  )
    return <div>Error fetching data</div>;

  const worldData = worldDataQuery.data;
  return (
    <div className="flex flex-col gap-4 items-center w-full h-full">
      <h1 className="text-lg font-cursive py-1">COVID-19 Dashboard</h1>

      <div className="flex flex-col items-center">
        <h1 className="font-cursive">Worldwide Data</h1>
        <p>Total Cases: {worldData.cases}</p>
        <p>Total Active Cases: {worldData.active}</p>
        <p>Total Recovered: {worldData.recovered}</p>
      </div>
      {/* Render the Map component with country data */}
      <div className="border-8 border-white shadow-xl w-5/6 ">
        <Map countries={countryDataQuery.data} />
      </div>
      {/* Render the LineGraph component with graph data */}
      <div className="p-4 mb-2 w-3/6 border-8 border-white shadow-xl">
        <LineGraph data={graphDataQuery.data} />
      </div>
    </div>
  );
};

export default ChartsandMapspage;
