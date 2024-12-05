import React, { useState } from "react";
import styles from "../FavoritePlantInformation/FavoritePlantInformation.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { ColorRing } from "react-loader-spinner";
import { useFavoritesPlants } from "../../services/localStorage/useFavoritesPlants";
import { FavoritePlant } from "../../components/FavoritePlant/FavoritePlant";
import { PlantAttributeInput } from "../../components/plantAttributeInput/plantAttributeInput";
import { EditingPlantName } from "../../components/EditingPlantName/EditingPlantName";
import { DatePlantAttributeInput } from "../../components/DatePlantAttributeInput/DatePlantAttributeInput";

export const FavoritePlantInformation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const { favoritesPlants, toggleFavoritePlant, isPlantInFavorites, editPlant } = useFavoritesPlants();

  const plantId = pathname.split("/")[2];
  const plant = favoritesPlants.find(plant => {
    return plant.id === Number(plantId);
  });

  const onPlaceSave = place => {
    plant.place = place;
    editPlant(plant);
  };

  const onDateSave = date => {
    plant.date = date;
    editPlant(plant);
  };

  const onPlantNameSave = plantName => {
    plant.plantName = plantName;
    editPlant(plant);
  };

  const onRemoveFromFavorites = () => {
    toggleFavoritePlant(plant);
    navigate("/collection");
  };

  if (!plant) {
    return (
      <div className={styles.loading}>
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#849b87", "#849b87", "#849b87", "#849b87", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <section className={styles.nav}>
        <Logo />
        <Navigation />
      </section>
      <section className={styles.plant_details}>
        <div className={styles.plant_info}>
          <EditingPlantName initialValue={plant.plantName} plantName={plant.common_name} onSave={onPlantNameSave} />
          <p className={styles.description}>{plant.description}</p>
        </div>
        <div className={styles.plant}>
          <div className={styles.plant_image} style={{ backgroundImage: `url(${plant.default_image.original_url})` }}></div>
          <FavoritePlant isFavorite={isPlantInFavorites(plant)} onClick={() => onRemoveFromFavorites(plant)}></FavoritePlant>
        </div>
        <div className={styles.treatments}>
          <p className={styles.treatment_title}>Treatment & Facts</p>
          <div className={styles.content}>
            <div className={styles.watering}>
              <img src="/assets/water.png" alt="water" />
              <h3>WATERING</h3>
            </div>
            <p>{plant.watering}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.sunlight}>
              <img src="/assets/sun.png" alt="sun" />
              <h3>SUNLIGHT</h3>
            </div>
            <p>{plant.sunlight}</p>
          </div>
          <DatePlantAttributeInput
            initialValue={plant.date}
            onSave={onDateSave}
            iconSrc={"/assets/calendar.png"}
            title={"DATE OF PURCHASE"}
            editingPlaceholder={"e.g. 20.12.2023"}
          />
          <PlantAttributeInput
            initialValue={plant.place}
            onSave={onPlaceSave}
            iconSrc={"/assets/house.png"}
            title={"PLACE IN THE HOUSE"}
            editingPlaceholder={"name a place in your house"}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
