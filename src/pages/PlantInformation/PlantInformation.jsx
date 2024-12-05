import React, { useEffect, useState } from "react";
import styles from "../PlantInformation/PlantInformation.module.css";
import { useLocation } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { apiKey } from "../../config";
import { ColorRing } from "react-loader-spinner";
import { plantDetail } from "../../api/mocks/plantDetails";
import { useFavoritesPlants } from "../../services/localStorage/useFavoritesPlants";
import { FavoritePlant } from "../../components/FavoritePlant/FavoritePlant";

export const PlantInformation = () => {
  const [plant, setPlant] = useState(null);
  const location = useLocation();
  const { pathname } = location;
  const { toggleFavoritePlant, isPlantInFavorites } = useFavoritesPlants();

  const plantId = pathname.split("/")[2];
  useEffect(() => {
    setPlant(plantDetail);
    // fetch(`https://perenual.com/api/species/details/${plantId}?key=${apiKey}`)
    //   .then(res => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then(res => {
    //     console.log(JSON.stringify(res));
    //     setPlant(res);
    //   })
    //   .catch(err => {
    //     // Todo error handling
    //     console.log(err);
    //   });
  }, [plantId]);

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
          <h2 className={styles.plant_name}>{plant.common_name}</h2>
          <p className={styles.description}>{plant.description}</p>
        </div>
        <div className={styles.plant}>
          <div className={styles.plant_image} style={{ backgroundImage: `url(${plant.default_image.original_url})` }}></div>
          <FavoritePlant isFavorite={isPlantInFavorites(plant)} onClick={() => toggleFavoritePlant(plant)}></FavoritePlant>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};
