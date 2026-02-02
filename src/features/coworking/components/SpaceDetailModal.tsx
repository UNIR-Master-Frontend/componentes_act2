import { useState } from "react";
import { Modal } from "../../../components/modal/Modal";
import "../styles/modal_styles.css";
import { Button } from "../../../components/button/Button";

export const SpaceDetailModal = (props) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  if (!props.space) return null;

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const horarios = [
    { hora: "09:00 - 10:00", disponible: false },
    { hora: "10:00 - 11:00", disponible: true },
    { hora: "11:00 - 12:00", disponible: true },
    { hora: "12:00 - 13:00", disponible: true },
    { hora: "13:00 - 14:00", disponible: true },
    { hora: "14:00 - 15:00", disponible: false },
  ];

  const servicios = props.space.servicios || [];

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="modal-grid">
        <div className="modal-header-title">
          <h1>Detalle Sala Coworking</h1>
        </div>

        <div className="main-content">
          <div className="hero-image">
            <img src={props.space.imagen} alt={props.space.nombre} />

            <div className="hero-overlay">
              <span className="badge">{props.space.categoria}</span>
              <h2 className="hero-title">{props.space.nombre}</h2>
              <p className="hero-rating">
                ⭐ {props.space.rating} - {props.space.valoraciones}{" "}
                Valoraciones
              </p>
            </div>
          </div>

          <div className="info-pills">
            <div className="pill">
              <span className="pill-icon">👥</span>
              <span className="pill-text">
                {props.space.capacidad} personas
              </span>
            </div>
            <div className="pill">
              <span className="pill-icon">🕐</span>
              <span className="pill-text">{props.space.horario}</span>
            </div>
            <div className="pill">
              <span className="pill-icon">📏</span>
              <span className="pill-text">
                {props.space.metros_cuadrados} m²
              </span>
            </div>
          </div>

          <div className="section-about">
            <h3>Sobre este espacio</h3>
            <p>
              {props.space.descripcion ||
                "Espacio de trabajo compartido con luz natural, mobiliario ergonómico y conexión WiFi de alta velocidad. Ideal para equipos pequeños o trabajo individual."}
            </p>
          </div>

          <div className="section-calendar">
            <div className="section-header">
              <h3>Selecciona una fecha</h3>
            </div>

            <div className="calendar">
              <div className="calendar-caption">
                <i className="icon-circle-left"></i>
                <h3>Enero</h3>
                <i className="icon-circle-right"></i>
              </div>

              <div className="calendar-header">
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
                <div>D</div>
              </div>

              <div className="calendar-body">
                {days.map((day) => (
                  <button
                    key={day}
                    className={selectedDay === day ? "active" : ""}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedDay && (
            <div className="section-schedule visible">
              <h3>Horario</h3>

              <div className="schedule">
                {horarios.map((horario, index) => (
                  <button
                    key={index}
                    className={`hour ${!horario.disponible ? "disabled" : ""} ${
                      selectedHour === horario.hora ? "selected" : ""
                    }`}
                    onClick={() =>
                      horario.disponible && setSelectedHour(horario.hora)
                    }
                    disabled={!horario.disponible}
                  >
                    {horario.hora}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="section-services">
            <h3>Servicios incluidos</h3>

            <div className="services-grid">
              {servicios.map((servicio, index) => (
                <div key={index} className="service-item">
                  <div className="service-icon">{servicio.icono}</div>
                  <div className="service-content">
                    <h4>{servicio.nombre}</h4>
                    <p>{servicio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="price-header">
              <span className="price-amount">{props.space.precio}€</span>
              <span className="price-label">Por hora</span>
            </div>

            <div className="reservation-details">
              <h3>Tu reserva</h3>

              <div className="detail-row">
                <span className="detail-label">Fecha</span>
                <span className="detail-value">
                  {selectedDay
                    ? `Día ${selectedDay} de Enero`
                    : "No seleccionada"}
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Horario</span>
                <span className="detail-value">
                  {selectedHour || "No seleccionado"}
                </span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Duración</span>
                <span className="detail-value">1 hora</span>
              </div>

              <div className="detail-divider"></div>

              <div className="detail-total">
                <span className="detail-total-label">Total</span>
                <span className="total-amount">€{props.space.precio}.00</span>
              </div>
            </div>

            <Button
              label={
                props.space.estado === "disponible"
                  ? "Reservar ahora"
                  : `No disponible (${props.space.estado})`
              }
              variant="primary"
              onClick={props.onReserve}
              disabled={props.space.estado !== "disponible"}
            />

            <p className="cancel-policy">
              ✓ Cancelación gratuita hasta 24h antes
            </p>
          </div>
        </aside>
      </div>
    </Modal>
  );
};
