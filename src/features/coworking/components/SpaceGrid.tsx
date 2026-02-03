import { useState, useEffect } from "react";
import { getSpaces, getSpaceById } from "../services/coworking.service";
import { useModal } from "../../../hooks/useModal";
import { SpaceDetailModal } from "./SpaceDetailModal";
import { ReservationForm } from "./ReservationForm";
import "../styles/coworking-grid.css";

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

  useEffect(() => {
    const loadSpacesWithStatus = async () => {
      const spacesData = await getSpaces();
      const first10 = spacesData.slice(0, 10);

      const spacesWithStatus = await Promise.all(
        first10.map(async (space) => {
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
    };

    loadSpacesWithStatus();
  }, []);

  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
    modalDetalle.openModal();
  };

  const handleReservarClick = () => {
    modalDetalle.closeModal();
    modalReserva.openModal();
  };

  const isUnavailable = (estado) => {
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
        {spaces.map((space, index) => {
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
