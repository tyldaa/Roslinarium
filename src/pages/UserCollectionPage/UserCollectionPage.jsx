import React from "react";
import { useFavoritesPlants } from "../../services/localStorage/useFavoritesPlants";
import styles from "../UserCollectionPage/UserCollectionPage.module.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { PlantCard } from "../../components/PlantCard/PlantCard";
import { Logo } from "../../components/Logo/Logo";

export const UserCollectionPage = () => {
  const { favoritesPlants, toggleFavoritePlant } = useFavoritesPlants();

  return (
    <div className={styles.container}>
      <section className={styles.nav}>
        <Logo />
        <Navigation />
      </section>
      <div className={styles.banner}>
        <h2>Hi plant lover !</h2>
        <p>Browse through your plants</p>
      </div>
      <section className={styles.plants_collection}>
        <ul>
          {favoritesPlants.map(plant => {
            return <PlantCard link={`/favorite-plant/${plant.id}`} plant={plant} key={plant.id} />;
          })}
        </ul>
      </section>
      <Footer />
    </div>
  );
};
