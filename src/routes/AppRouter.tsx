import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUpPage from "../signup-details/SignUpPage";
import routes from "./routes";
import AppLayout from "../component/AppLayout";
import ContactPage from "../pages/ContactPage";
import SignInPage from "../signin-details/SignInPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_UP} element={<SignUpPage />} />
        <Route path={routes.SIGN_IN} element={<SignInPage />} />
        <Route path={routes.SIGN_OUT} />
        <Route path={routes.ROOT}
          element={<AppLayout />}
        >
          <Route path={routes.CONTACT_US} element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

