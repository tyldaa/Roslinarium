import { useLocalStorage } from "react-use";

export const useFavoritesPlants = () => {
  const [favoritesPlants, setFavoritesPlants] = useLocalStorage("favorites", []);

  const toggleFavoritePlant = plant => {
    const isPlantInFavorites = favoritesPlants.some(favoritePlant => favoritePlant.id === plant.id);

    if (!isPlantInFavorites) {
      const newFavoritesPlants = [...favoritesPlants, plant];

      setFavoritesPlants(newFavoritesPlants);
    } else {
      const removeFavoritePlant = favoritesPlants.filter(removePlant => removePlant.id !== plant.id);

      setFavoritesPlants(removeFavoritePlant);
    }
  };

  return {
    favoritesPlants,
    toggleFavoritePlant,
  };
};
