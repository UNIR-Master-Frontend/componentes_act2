import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./features/home/Home.tsx";
import Library from "./features/library/Library.tsx";
import Coworking from "./features/coworking/Coworking.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import Auth from "./features/auth/Auth.tsx";
import { UserProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="library/*" element={<Library />} />
              <Route path="coworking/*" element={<Coworking />} />
            </Route>
            <Route path="auth/*" element={<Auth />} />
          </Routes>
        </UserProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
);
