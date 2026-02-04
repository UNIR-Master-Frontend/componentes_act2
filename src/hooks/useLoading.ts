import { useContext } from "react";
import { LoadingContext } from "../context/loadingContext";

export default function useLoading() {
  const { loading, setLoading } = useContext(LoadingContext);

  return {
    loading,
    setLoading,
  };
}
