import { useState } from "react";
import { createReservation } from "../services/coworking.service";
import Modal from "../../../components/modal/Modal";
import "../styles/reservations.css";
import Button from "../../../components/Button/Button";

export const ReservationForm = (props: any) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaReserva, setFechaReserva] = useState("");
  const [metodoPago, setMetodoPago] = useState("tarjeta");

  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [expiracion, setExpiracion] = useState("");
  const [cvv, setCvv] = useState("");

  const [tipoPersona, setTipoPersona] = useState("natural");
  const [banco, setBanco] = useState("");
  const [emailPse, setEmailPse] = useState("");

  const handleReservar = async () => {
    try {
      const fechaBase = fechaReserva || new Date().toISOString().slice(0, 16);
      const entrada = new Date(fechaBase);
      const salida = new Date(entrada);
      salida.setHours(salida.getHours() + 8);

      const reservaData = {
        reservas: [
          {
            espacioId: props.space.id,
            fecha_reserva: entrada.toISOString(),
            fecha_salida: salida.toISOString(),
            usuariosId: [1],
          },
        ],
      };

      await createReservation(reservaData);

      alert("¡Reserva confirmada exitosamente! ✅");
      props.onClose();
    } catch (error) {
      console.log(error);
      alert("Error al crear la reserva");
    }
  };

  if (!props.space) return null;

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="reservation-container">
        <section className="reservation-space">
          <img
            src="https://images.unsplash.com/photo-1604328704120-91e8d2fdc188?q=80&w=1770"
            alt={props.space.nombre}
          />
          <div className="space-info">
            <h2>{props.space.nombre}</h2>
            <p>
              {props.space.descripcion ||
                "Espacio ideal para trabajo colaborativo"}
            </p>
            <ul className="space-details">
              <li>👥 {props.space.capacidad} personas</li>
              <li>☕ Café incluido</li>
              <li>❄️ Climatización</li>
            </ul>
          </div>
        </section>

        <section className="reservation-form">
          <div className="form-card">
            <h3>Datos personales</h3>
            <div className="form-grid">
              <div>
                <label>Nombre completo</label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div>
                <label>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="correo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>Teléfono</label>
                <input
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div>
                <label>Fecha de reserva</label>
                <input
                  type="datetime-local"
                  value={fechaReserva}
                  onChange={(e) => setFechaReserva(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Método de pago</h3>

            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="pago"
                  value="tarjeta"
                  checked={metodoPago === "tarjeta"}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                Tarjeta débito / crédito
              </label>

              <label>
                <input
                  type="radio"
                  name="pago"
                  value="pse"
                  checked={metodoPago === "pse"}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                PSE
              </label>
            </div>

            {metodoPago === "tarjeta" && (
              <div className="form-grid">
                <div>
                  <label>Número de tarjeta</label>
                  <input
                    type="text"
                    placeholder="**** **** **** 1234"
                    value={numeroTarjeta}
                    onChange={(e) => setNumeroTarjeta(e.target.value)}
                  />
                </div>

                <div>
                  <label>Nombre en la tarjeta</label>
                  <input
                    type="text"
                    value={nombreTarjeta}
                    onChange={(e) => setNombreTarjeta(e.target.value)}
                  />
                </div>

                <div>
                  <label>Fecha de expiración</label>
                  <input
                    type="month"
                    value={expiracion}
                    onChange={(e) => setExpiracion(e.target.value)}
                  />
                </div>

                <div>
                  <label>CVV</label>
                  <input
                    type="password"
                    placeholder="***"
                    maxLength={3}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            )}

            {metodoPago === "pse" && (
              <div className="form-grid">
                <div>
                  <label>Tipo de persona</label>
                  <select
                    value={tipoPersona}
                    onChange={(e) => setTipoPersona(e.target.value)}
                  >
                    <option value="natural">Persona natural</option>
                    <option value="juridica">Persona jurídica</option>
                  </select>
                </div>

                <div>
                  <label>Banco</label>
                  <select
                    value={banco}
                    onChange={(e) => setBanco(e.target.value)}
                  >
                    <option value="">Selecciona tu banco</option>
                    <option value="bancolombia">Bancolombia</option>
                    <option value="davivienda">Davivienda</option>
                    <option value="bbva">BBVA</option>
                    <option value="bogota">Banco de Bogotá</option>
                    <option value="nequi">Nequi</option>
                  </select>
                </div>

                <div>
                  <label>Correo para PSE</label>
                  <input
                    type="email"
                    placeholder="correo@email.com"
                    value={emailPse}
                    onChange={(e) => setEmailPse(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <Button
            label="Confirmar Reserva"
            variant="primary"
            onClick={handleReservar}
          />
        </section>
      </div>
    </Modal>
  );
};
