import { useState } from "react";
import "./styles.css";

import { Button } from "../../../../components/Button/Button";
import nexusLogo from "../../../../assets/images/svg/logo_nexus.svg";
import useLoading from "../../../../hooks/useLoading";
import { login } from "../../services/auth.service";
import useUser from "../../../../hooks/useuser";
import { useNavigate } from "react-router";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { setLoading } = useLoading();
  const { setUserLogin } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const userData = await login({ user, password });
    setUserLogin(userData);
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <img src={nexusLogo} alt="Logo de Nexus" />

        <h2>Iniciar sesión</h2>

        <label>
          Usuario
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <Button
          type="submit"
          label="Entrar"
          disabled={!(user && password)}
        ></Button>
      </form>
    </div>
  );
}
