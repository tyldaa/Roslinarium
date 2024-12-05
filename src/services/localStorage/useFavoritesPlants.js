import { useLocalStorage } from "usehooks-ts";

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

  const isPlantInFavorites = plant => {
    const isPlantInFavorites = favoritesPlants.some(favoritePlant => favoritePlant.id === plant.id);
    return isPlantInFavorites;
  };

  const editPlant = plant => {
    const indexOfPlant = favoritesPlants.findIndex(favoritePlant => {
      favoritePlant.id === plant.id;
    });
    favoritesPlants[indexOfPlant] = plant;
    setFavoritesPlants(favoritesPlants);
  };

  return {
    favoritesPlants,
    toggleFavoritePlant,
    isPlantInFavorites,
    editPlant,
  };
};
