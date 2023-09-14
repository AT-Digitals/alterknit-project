
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AlterknitHeader from "../AppHeader/AlterknitHeader";
import ResgidterEmail from "../LoginDetails/ResgisterEmail";
import routes from "./routes";
import LoginPage from "../Login-details/LoginPage";
import FormFile from "../components/FormFile";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.LOGIN} element={<LoginPage />} />
                <Route path={routes.LOGOUT} />
                <Route path={routes.ALTERKNIT_HEADER} element={<AlterknitHeader />} />
                <Route path={routes.ReEGISTER_EMAIL} element={<ResgidterEmail />} />
                <Route path={routes.FORMFILE} element={<FormFile />} />
            </Routes>
        </Router>
    );
}
