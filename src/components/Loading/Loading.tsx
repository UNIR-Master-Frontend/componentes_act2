import { useContext } from "react";

import "./styles.css";
import { LoadingContext } from "../../context/LoadingContext";

export default function Loading() {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
}
