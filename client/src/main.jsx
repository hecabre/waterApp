import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import BombProvider from "./context/BombContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as ComponentsProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ComponentsProvider>
        <BombProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </BrowserRouter>
        </BombProvider>
      </ComponentsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
