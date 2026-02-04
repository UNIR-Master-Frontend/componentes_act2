import { Navigate, Outlet } from "react-router";
import useUser from "../../../hooks/useuser";

interface AuthGuardProps {
  redirectTo?: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({
  redirectTo = "/auth/login",
}) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
