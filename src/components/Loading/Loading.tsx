import { useContext } from "react";
import { LoadingContext } from "../../context/loadingContext";

import "./styles.css";

export default function Loading() {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
}
