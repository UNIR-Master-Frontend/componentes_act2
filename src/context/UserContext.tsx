import { createContext, useState, type ReactNode } from "react";
import type { User } from "../features/auth/interfaces/user.interface";

export const UserContext = createContext({
  user: undefined as User | undefined,
  setUser: (user: any): void => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(undefined);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
