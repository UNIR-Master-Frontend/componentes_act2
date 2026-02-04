import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-link" onClick={() => navigate(-1)}>
      ← Volver
    </button>
  );
}
