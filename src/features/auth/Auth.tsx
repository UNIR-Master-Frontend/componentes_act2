import { Navigate, Route, Routes } from "react-router";
import Login from "./views/Login/Login";
import useLoading from "../../hooks/useLoading";
import Loading from "../../components/Loading/Loading";
import useUser from "../../hooks/useUser";

export default function Auth() {
  const { loading } = useLoading();
  const { user } = useUser();

  return (
    <>
      {loading ? <Loading /> : <></>}

      <Routes>
        <Route>
          <Route
            index
            path="/"
            element={<Navigate to={user ? "/" : "login"} replace />}
          />
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}
