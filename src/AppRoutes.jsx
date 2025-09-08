import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import LoginCreate from "./components/Login/LoginCreate";
import User from "./components/User/User";
import styles from "./components/Login/Login.module.css";
import ProtectedRouter from "./components/Helpers/ProtectedRouter";
import { UserContext } from "./UserContext";

const AppRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <section className={styles.login}>
            <div className={styles.forms}>
              <Outlet />
            </div>
          </section>
        }
      >
        <Route index element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
      </Route>

      <Route
        path="/conta/*"
        element={
          <ProtectedRouter>
            <User />
          </ProtectedRouter>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
