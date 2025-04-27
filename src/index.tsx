import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./screens/Welcome";
import { Register } from "./screens/Register";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { Members } from "./screens/Members";
import { Finances } from "./screens/Finances";
import { ContributionMethod } from "./screens/Finances";
import { Meetings } from "./screens/Meetings";
import { Profile } from "./screens/Profile";
import { SplashScreen } from "./screens/SplashScreen";

const hasSeenSplash = () => {
  return sessionStorage.getItem("hasSeenSplash") === "true";
};

const setSeenSplash = () => {
  sessionStorage.setItem("hasSeenSplash", "true");
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route
          path="/"
          element={
            hasSeenSplash() ? (
              <Welcome />
            ) : (() => {
                setSeenSplash();
                return <SplashScreen />;
              })()
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/contribute-method" element={<ContributionMethod />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);