import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppLayout from "../component/AppLayout";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/ContactPage";
import FixmePage from "../pages/Sehedule Repair/FixmePage";
import HomePage from "../pages/Home/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ScheduleReapir from "../pages/Sehedule Repair/ScheduleRepair";
import SignInPage from "../signin-details/SignInPage";
import SignUpPage from "../signup-details/SignUpPage";
import TermsCondition from "../pages/TermsCondition";
import routes from "./routes";
import ServicePage from "../pages/Services/ServicePage";
import OurStoryPage from "../pages/our-tory/OurStoryPage";
import CarePage from "../pages/Care/CarePage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_UP} element={<SignUpPage />} />
        <Route path={routes.SIGN_IN} element={<SignInPage />} />
        <Route path={routes.SIGN_OUT} />
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<HomePage />} />
          <Route path={routes.SERVICES} element={<ServicePage />} />
          <Route path={routes.OUR_STORY} element={<OurStoryPage />} />
          <Route path={routes.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={routes.CARE} element={<CarePage />} />
          <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
          <Route path={routes.CONTACT_US} element={<ContactPage />} />
          <Route path={routes.SCHEDULE_REPAIR} element={<ScheduleReapir />} />
          <Route path={routes.FIXME} element={<FixmePage />} />
          <Route path={routes.TERM} element={<TermsCondition />} />
          <Route path={routes.PRIVACY} element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}
