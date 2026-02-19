import { SpaceGrid } from "./views/SpaceGrid";
import { MyReservations } from "./views/MyReservations";
import NavItem from "../../components/NavItem/NavItem";

import "./styles.css";
import { Navigate, Route, Routes } from "react-router";
import useUser from "../../hooks/useUser";
import AuthGuard from "../auth/guards/AuthGuard";

export default function Coworking() {
  const { user } = useUser();

  return (
    <div className="coworking-page">
      <div className="coworking-navbar">
        <NavItem label="Espacios" path="/coworking/spaces"></NavItem>
        {user && (
          <NavItem label="Reservas" path="/coworking/reservations"></NavItem>
        )}
      </div>

      <Routes>
        <Route>
          <Route index path="/" element={<Navigate to="spaces" replace />} />
          <Route path="spaces" element={<SpaceGrid />}></Route>

          <Route element={<AuthGuard />}>
            <Route path="reservations" element={<MyReservations />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
