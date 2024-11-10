import React from "react";
import { useState, useEffect } from "react";
import { plantsListResponse } from "../api/mocks/plantsListResponse";
import { apiKey } from "../config";
import { useFavoritesPlants } from "../services/localStorage/useFavoritesPlants";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

export const PlantListPage = () => {
  const [plants, setPlants] = useState(null);
  const { favoritesPlants, toggleFavoritePlant } = useFavoritesPlants();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch] = useDebounce(searchValue, 650);

  useEffect(() => {
    const params = new URLSearchParams({
      key: apiKey,
      page: 1,
      q: debouncedSearch,
    }).toString();
    setPlants(plantsListResponse.data);
    //   fetch(`https://perenual.com/api/species-list?${params}`)
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(res => {
    //       setPlants(res.data);
    //     })
    //     .catch(err => {
    //       // Todo error handling
    //       console.log(err);
    //     });
  }, [debouncedSearch]);

  if (!plants) {
    return <p>Loading plants...</p>;
  }

  return (
    <>
      <input onChange={event => setSearchValue(event.currentTarget.value)} type="text" id="search" name="search" placeholder="Wyszukaj" />
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
