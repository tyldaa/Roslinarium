import React from "react";
import { useState, useEffect } from "react";
import { plantsListResponse } from "../api/mocks/plantsListResponse";
import { apiKey } from "../config";

export const PlantListPage = () => {
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    setPlants(plantsListResponse.data);
    // fetch(`https://perenual.com/api/species-list?key=${apiKey}&page=1`)
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(res => {
    //     setPlants(res.data);
    //   })
    //   .catch(err => {
    //     // Todo error handling
    //     console.log(err);
    //   });
  }, []);
  if (!plants) {
    return <p>Loading plants...</p>;
  }

  return (
    <ul>
      {plants.map(plant => {
        return <li key={plant.id}>{plant.common_name}</li>;
      })}
    </ul>
  );
};
