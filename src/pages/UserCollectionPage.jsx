import React from "react";
import { useFavoritesPlants } from "../services/localStorage/useFavoritesPlants";

export const UserCollectionPage = () => {
  const { favoritesPlants, toggleFavoritePlant } = useFavoritesPlants();

  return (
    <ul>
      {favoritesPlants.map(plant => {
        return (
          <li key={plant.id}>
            {plant.common_name}
            <button onClick={() => toggleFavoritePlant(plant)}>Ulubione</button>
          </li>
        );
      })}
    </ul>
  );
};
