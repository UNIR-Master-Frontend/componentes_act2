import { createContext, useState, type ReactNode } from "react";

export const LoadingContext = createContext({
  loading: false,
  setLoading: (isLoading: boolean): void => {
    isLoading;
  },
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
