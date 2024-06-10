import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import BombProvider from "./context/BombContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as ComponentsProvider } from "@material-tailwind/react";
import { LoginForm } from "./pages/LoginForm.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ComponentsProvider>
          <BombProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/" element={<LoginForm />} />
              </Routes>
            </BrowserRouter>
          </BombProvider>
        </ComponentsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
