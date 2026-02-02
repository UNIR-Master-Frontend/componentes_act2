import { SpaceGrid } from "./components/SpaceGrid";
import { MyReservations } from "./components/MyReservations";

interface CoworkingProps {
  showReservations: boolean;
  setShowReservations: (value: boolean) => void;
}

export const Coworking = ({ showReservations }: CoworkingProps) => {
  return (
    <div className="coworking-page">
      {showReservations ? <MyReservations /> : <SpaceGrid />}
    </div>
  );
};
