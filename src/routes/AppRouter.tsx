import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppLayout from "../component/AppLayout";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/ContactPage";
import FaqPage from "../pages/FaqPage";
import FixmePage from "../pages/FixmePage";
import HomePage from "../pages/Home/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ScheduleReapir from "../pages/Sehedule Repair/ScheduleRepair";
import SignInPage from "../signin-details/SignInPage";
import SignUpPage from "../signup-details/SignUpPage";
import SubscribePage from "../pages/Home/SubscribePage";
import TermsCondition from "../pages/TermsCondition";
import routes from "./routes";
import BoxCreation from "../pages/BoxCreation";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_UP} element={<SignUpPage />} />
        <Route path={routes.SIGN_IN} element={<SignInPage />} />
        <Route path={routes.SIGN_OUT} />
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
          <Route path={routes.CONTACT_US} element={<ContactPage />} />
          <Route path={routes.TERM} element={<TermsCondition />} />
          <Route path={routes.SUBSCRIBE} element={<SubscribePage />} />
          <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
          <Route path={routes.SCHEDULE_REPAIR} element={<ScheduleReapir />} />
          <Route path={routes.FAQ} element={<FaqPage />} />
          <Route path={routes.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={routes.FIXME} element={<FixmePage />} />
          <Route path={routes.CREATION} element={<BoxCreation />} />
        </Route>
      </Routes>
    </Router>
  );
}
