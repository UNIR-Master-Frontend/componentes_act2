import { useState, useEffect } from "react";
import {
  getReservations,
  deleteReservation,
} from "../../services/coworking.service";
import "../styles/reservations.css";

export const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReservations = async () => {
      setLoading(true);
      const data = await getReservations();
      setReservations(data);
      setLoading(false);
    };

    loadReservations();
  }, []);

  const handleCancelReservation = async (reservationId) => {
    if (!confirm("¿Estás seguro de cancelar esta reserva?")) return;

    try {
      await deleteReservation(reservationId);
      setReservations(reservations.filter((r) => r.id !== reservationId));
    } catch (error) {
      console.error("Error al cancelar reserva:", error);
      alert("Error al cancelar la reserva");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="reservations-container">
        <div className="loading">Cargando reservas...</div>
      </div>
    );
  }

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <h1>Mis Reservas</h1>
        <p className="reservations-subtitle">
          Gestiona tus espacios de co-working reservados
        </p>
      </div>

      {reservations.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📅</div>
          <h3>No tienes reservas activas</h3>
          <p>Reserva un espacio de co-working para empezar</p>
        </div>
      ) : (
        <div className="reservations-list">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="reservation-card">
              <div className="card-header">
                <div className="space-info">
                  <h3>Reserva ID: {reservation.id}</h3>
                  <span className="space-detail">
                    Espacio {reservation.espacioId}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <div className="date-info">
                  <div className="date-item">
                    <span className="date-label">Entrada</span>
                    <span className="date-value">
                      {formatDate(reservation.fecha_reserva)}
                    </span>
                  </div>
                  <div className="date-item">
                    <span className="date-label">Salida</span>
                    <span className="date-value">
                      {formatDate(reservation.fecha_salida)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button
                  className="cancel-btn"
                  onClick={() => handleCancelReservation(reservation.id)}
                >
                  Cancelar Reserva
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
