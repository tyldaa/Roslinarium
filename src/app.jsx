import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./routes/Router";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

root.render(<App />);
