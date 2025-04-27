import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./screens/Welcome";
import { Register } from "./screens/Register";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { Members } from "./screens/Members";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);