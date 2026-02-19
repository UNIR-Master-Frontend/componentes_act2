import { useState, useEffect } from "react";
import { getSpaces, getSpaceById } from "../services/coworking.service";
import { useModal } from "../../../hooks/useModal";
import { SpaceDetailModal } from "../components/SpaceDetailModal/SpaceDetailModal";
import { ReservationForm } from "../components/ReservationForm/ReservationForm";
import "../styles/coworking-grid.css";
import useLoading from "../../../hooks/useLoading";

const fixedGridClasses = [
  "sala-a",
  "reuniones-1",
  "sala-b",
  "cabina-1",
  "cabina-2",
  "reuniones-2",
  "laboratorio",
  "sala-c",
  "sala-d",
  "pasillo",
];

export const SpaceGrid = () => {
  const [spaces, setSpaces] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const modalDetalle = useModal();
  const modalReserva = useModal();
  const { setLoading } = useLoading();

  useEffect(() => {
    const loadSpacesWithStatus = async () => {
      setLoading(true);
      const spacesData = await getSpaces();
      const first10 = spacesData.slice(0, 10);

      const spacesWithStatus: any = await Promise.all(
        first10.map(async (space: any) => {
          try {
            const detailData = await getSpaceById(space.id);
            return {
              ...space,
              estado: detailData.estado,
              capacidad: detailData.capacidad,
            };
          } catch (error) {
            console.error(`Error loading space ${space.id}:`, error);
            return { ...space, estado: "disponible" };
          }
        }),
      );

      setSpaces(spacesWithStatus);
      setLoading(false);
    };

    loadSpacesWithStatus();
  }, []);

  const handleSpaceClick = (space: any) => {
    setSelectedSpace(space);
    modalDetalle.openModal();
  };

  const handleReservarClick = () => {
    modalDetalle.closeModal();
    modalReserva.openModal();
  };

  const isUnavailable = (estado: any) => {
    return estado === "ocupado" || estado === "reservado";
  };

  return (
    <>
      <div className="spaces-header">
        <h1>Espacios disponibles</h1>
        <p className="reservations-subtitle">
          Encuentra espacios disponibles de co-working
        </p>
      </div>

      <div className="coworking-grid">
        {spaces.map((space: any, index) => {
          const gridClass = fixedGridClasses[index] || "grid-item";
          const unavailable = isUnavailable(space.estado);

          return (
            <div
              key={space.id}
              className={`grid-item ${gridClass} ${unavailable ? "unavailable" : ""}`}
              onClick={() => !unavailable && handleSpaceClick(space)}
            >
              <span className="space-name">{space.nombre}</span>
              {unavailable && (
                <span className="unavailable-badge">No disponible</span>
              )}
            </div>
          );
        })}
      </div>

      <SpaceDetailModal
        isOpen={modalDetalle.isOpen}
        onClose={modalDetalle.closeModal}
        space={selectedSpace}
        onReserve={handleReservarClick}
      />

      <ReservationForm
        isOpen={modalReserva.isOpen}
        onClose={modalReserva.closeModal}
        space={selectedSpace}
      />
    </>
  );
};
