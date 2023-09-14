import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AlterknitHeader from "../AppHeader/AlterknitHeader";
import LoginPage from "../Login-details/LoginPage";
import ResgidterEmail from "../LoginDetails/ResgisterEmail";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.LOGOUT} />
        <Route path={routes.ALTERKNIT_HEADER} element={<AlterknitHeader />} />
        <Route path={routes.REEGISTER_EMAIL} element={<ResgidterEmail />} />
      </Routes>
    </Router>
  );
}
