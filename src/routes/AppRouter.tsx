import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import ContactPage from "../pages/ContactPage";
import SignUpPage from "../signup-details/SignUpPage";
import SignInPage from "../signin-details/SignInPage";
import AppLayout from "../component/AppLayout";
import HomePage from "../pages/HomePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_UP} element={<SignUpPage />} />
        <Route path={routes.SIGN_IN} element={<SignInPage />} />
        <Route path={routes.SIGN_OUT} />
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CONTACT_US} element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
