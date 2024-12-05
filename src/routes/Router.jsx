import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantListPage } from "../pages/PlantListPage";
import { UserCollectionPage } from "../pages/UserCollectionPage";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlantListPage />} />
          <Route path="/collection" element={<UserCollectionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
