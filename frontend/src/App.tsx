import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import "./index.css";
import PermissionsPage from "./pages/PermissionsPage";
import { ROUTES } from "./constants/routes";
import DashboardPage from "./pages/DashboardPage";
import AllParcelsPage from "./pages/AllParcelsPage";
import AllUsersPage from "./pages/AllUsersPage";
import UserRolesPage from "./pages/UserRolesPage";
import CompanyPage from "./pages/CompanyPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store/store";
import { getAuthUser } from "./store/auth.slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      dispatch(getAuthUser());
    }
  }, [isAuth, dispatch]);

  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen">
        {isAuth && <MainMenu />}

        <div className="flex flex-col flex-1 w-full">
          {isAuth && <Header />}

          <div className="flex-1 overflow-auto p-2">
            <Routes>
              <Route
                path={ROUTES.LOGIN}
                element={isAuth ? <DashboardPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.HOME}
                element={isAuth ? <DashboardPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.PARCELS}
                element={isAuth ? <AllParcelsPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.USERS}
                element={isAuth ? <AllUsersPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.USER_ROLES}
                element={isAuth ? <UserRolesPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.PERMISSIONS}
                element={isAuth ? <PermissionsPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.COMPANY}
                element={isAuth ? <CompanyPage /> : <LoginPage />}
              />
              <Route
                path={ROUTES.NOT_FOUND}
                element={isAuth ? <NotFoundPage /> : <LoginPage />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
