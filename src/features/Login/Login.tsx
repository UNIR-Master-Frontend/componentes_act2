import React, { useState } from 'react';
import "./LoginStyles.css"

const Login = () => {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [error, setError] = useState<string>("");
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (email === "usuario@nexus.com" && password === "123456") {
    setIsLoggedIn(true);
    setError("");
  } else {
    setError("Credenciales incorrectas");
  }
};

const handleLogout = () => {
  setIsLoggedIn(false);
  setEmail("");
  setPassword("");
  setError("");
};


if (isLoggedIn) {
  return (
    <div className="login-container">
      <h2>¡Bienvenido!</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
}

return (
  <div className="login-container">
    <h2>Iniciar Sesión</h2>
    
    <form onSubmit={handleLogin}>
      
      {}
      <div className="input-group">
        <label>Correo Electrónico:</label>
        <input
          type="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario@nexus.com"
          required
        />
      </div>

      {}
      <div className="input-group">
        <label>Contraseña:</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="123456"
          required
        />
      </div>

      {}
      {error && <p className="error-message">{error}</p>}

      {}
      <button type="submit" className="login-button">
        Ingresar
      </button>
    </form>
  </div>
);
};

export default Login;