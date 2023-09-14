import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AlterknitHeader from "../AppHeader/AlterknitHeader";
import ResgidterEmail from "../LoginDetails/ResgisterEmail";
import routes from "./routes";
import LoginPage from "../Login-details/LoginPage";
import SignUpPage from "../Register/SignUpPage";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.LOGIN} element={<LoginPage />} />
                <Route path={routes.LOGOUT} />
                <Route path={routes.ALTERKNIT_HEADER} element={<AlterknitHeader />} />
                <Route path={routes.REGISTER_EMAIL} element={<ResgidterEmail />} />
                <Route path={routes.SIGNUP} element={<SignUpPage />} />
            </Routes>
        </Router>
    );

}