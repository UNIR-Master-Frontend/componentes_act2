import { SpaceGrid } from "./components/SpaceGrid";
import { MyReservations } from "./components/MyReservations";
import { useState } from "react";

// interface CoworkingProps {
//   showReservations: boolean;
//   setShowReservations: (value: boolean) => void;
// }

export default function Coworking() {
  const [showReservations, setShowReservations] = useState(false);

  return (
    <div className="coworking-page">
      {showReservations ? <MyReservations /> : <SpaceGrid />}
    </div>
  );
}
