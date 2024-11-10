import React from "react";
import { useState, useEffect } from "react";
import { plantsListResponse } from "../api/mocks/plantsListResponse";
import { apiKey } from "../config";
import { useFavoritesPlants } from "../services/localStorage/useFavoritesPlants";
import { useNavigate } from "react-router-dom";

export const PlantListPage = () => {
  const [plants, setPlants] = useState(null);
  const { favoritesPlants, toggleFavoritePlant } = useFavoritesPlants();
  const navigate = useNavigate();

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
    <>
      <ul>
        {plants.map(plant => {
          return (
            <li key={plant.id}>
              {plant.common_name}
              <button onClick={() => toggleFavoritePlant(plant)}>Ulubione</button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => navigate("/collection")}>Przejdź do ulubionych</button>
    </>
  );
};
