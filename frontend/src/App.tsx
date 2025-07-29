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

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <MainMenu />

        <div className="flex flex-col flex-1 w-full">
          <Header />

          <div className="p-2">
            <Routes>
              <Route path={ROUTES.HOME} element={<DashboardPage />} />
              <Route path={ROUTES.PARCELS} element={<AllParcelsPage />} />
              <Route path={ROUTES.USERS} element={<AllUsersPage />} />
              <Route path={ROUTES.USER_ROLES} element={<UserRolesPage />} />
              <Route path={ROUTES.PERMISSIONS} element={<PermissionsPage />} />
              <Route path={ROUTES.COMPANY} element={<CompanyPage />} />
              <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
