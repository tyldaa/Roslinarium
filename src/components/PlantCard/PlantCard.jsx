import React from "react";
import styles from "../PlantCard/PlantCard.module.css";
import { useFavoritesPlants } from "../../services/localStorage/useFavoritesPlants";
import { FavoritePlant } from "../FavoritePlant/FavoritePlant";
import { Link } from "react-router-dom";

export const PlantCard = ({ plant, link }) => {
  const { toggleFavoritePlant, isPlantInFavorites } = useFavoritesPlants();
  return (
    <li className={styles.plant}>
      <Link to={link}>
        <div className={styles.plant_image} style={{ backgroundImage: `url(${plant.default_image.original_url})` }}></div>
        <h3 className={styles.plant_title}>{plant.common_name}</h3>
      </Link>
      <FavoritePlant isFavorite={isPlantInFavorites(plant)} onClick={() => toggleFavoritePlant(plant)}></FavoritePlant>
    </li>
  );
};
