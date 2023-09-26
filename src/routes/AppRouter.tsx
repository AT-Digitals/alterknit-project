import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppLayout from "../component/AppLayout";
import BlogPage from "../pages/Blog/BlogPage";
import BlogPageReadingContent from "../pages/Blog/BlogPageReading";
import CarePage from "../pages/Care/CarePage";
import ContactPage from "../pages/ContactPage";
import DoorToDoor from "../pages/Sehedule Repair/door-to-door/DoorToDoor";
import DoorToDoorPage from "../pages/Sehedule Repair/DoorToDoorPage";
import FixmePage from "../pages/Sehedule Repair/FixmePage";
import HomePage from "../pages/Home/HomePage";
import MoreDetailsPage from "../pages/Sehedule Repair/ship-in/MoreDetailsPage";
import OurStoryPage from "../pages/our-tory/OurStoryPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ScheduleReapir from "../pages/Sehedule Repair/ScheduleRepair";
import ServicePage from "../pages/Services/ServicePage";
import ShipInPage from "../pages/Sehedule Repair/ship-in/ShipInPage";
import ShipinFields from "../pages/Sehedule Repair/ship-in/ShipIn-Fields";
import SignInPage from "../signin-details/SignInPage";
import SignUpPage from "../signup-details/SignUpPage";
import TermsCondition from "../pages/TermsCondition";
import routes from "./routes";

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
          <Route path={routes.DOORTODOOR} element={<DoorToDoorPage />} />
          <Route path={routes.SCHEDULE_REPAIR} element={<ScheduleReapir />} />
          <Route path={routes.FIXME} element={<FixmePage />} />
          <Route path={routes.TERM} element={<TermsCondition />} />
          <Route path={routes.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={routes.SHIP_IN_FIELDS} element={<ShipinFields />} />
          <Route path={routes.DARN_IT} element={<DoorToDoor />} />

          <Route
            path={routes.BLOG_PAGE_CONTENT}
            element={<BlogPageReadingContent />}
          />
          <Route path={routes.SHIPIN} element={<ShipInPage />} />
          <Route path={routes.MORE_DETAILS} element={<MoreDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
