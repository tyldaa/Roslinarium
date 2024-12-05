import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantListPage } from "../pages/PlantListPage/PlantListPage";
import { UserCollectionPage } from "../pages/UserCollectionPage/UserCollectionPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PlantInformation } from "../pages/PlantInformation/PlantInformation";
import { FavoritePlantInformation } from "../pages/FavoritePlantInformation/FavoritePlantInformation";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:page?" element={<PlantListPage />} />
          <Route path="/plant/*" element={<PlantInformation />} />
          <Route path="/collection" element={<UserCollectionPage />} />
          <Route path="/favorite-plant/*" element={<FavoritePlantInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
