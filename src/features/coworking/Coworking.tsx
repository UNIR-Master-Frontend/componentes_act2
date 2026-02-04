import { SpaceGrid } from "./views/SpaceGrid";
import { MyReservations } from "./views/MyReservations";
import { useState } from "react";
import NavItem from "../../components/NavItem";

import "./styles.css";
import { Navigate, Route, Routes } from "react-router";

// interface CoworkingProps {
//   showReservations: boolean;
//   setShowReservations: (value: boolean) => void;
// }

export default function Coworking() {
  return (
    <div className="coworking-page">
      <div className="coworking-navbar">
        <NavItem label="Espacios" path="/coworking/spaces"></NavItem>
        <NavItem label="Reservas" path="/coworking/reservations"></NavItem>
      </div>

      <Routes>
        <Route>
          <Route index path="/" element={<Navigate to="spaces" replace />} />
          <Route path="spaces" element={<SpaceGrid />}></Route>
          <Route path="reservations" element={<MyReservations />} />
        </Route>
      </Routes>
    </div>
  );
}
