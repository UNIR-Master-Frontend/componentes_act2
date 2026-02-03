import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./features/home/Home.tsx";
import Library from "./features/library/Library.tsx";
import Coworking from "./features/coworking/Coworking.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="library/*" element={<Library />} />
          <Route path="coworking/*" element={<Coworking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
