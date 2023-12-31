import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppLayout from "../component/AppLayout";
import BlogPage from "../pages/Blog/BlogPage";
import BlogPageReadingContent from "../pages/Blog/BlogPageReading";
import CarePage from "../pages/Care/CarePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/Home/HomePage";
import OurStoryPage from "../pages/our-tory/OurStoryPage";
import PartnerPage from "../pages/PartnerPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ServicePage from "../pages/Services/ServicePage";
import ShipInDetailsPage from "../pages/Sehedule Repair/ship-in/ShipInDetailsPage";
import SignInPage from "../signin-details/SignInPage";
import SignUpPage from "../signup-details/SignUpPage";
import TermsCondition from "../pages/TermsCondition";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.SIGN_UP} element={<SignUpPage />} />
        {/* <Route path={routes.SIGN_IN} element={<SignInPage />} /> */}
        <Route path={routes.SIGN_OUT} />
        <Route path={routes.ROOT} element={<SignInPage />} />

        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />

          <Route path={routes.SERVICES} element={<ServicePage />} />
          <Route path={routes.OUR_STORY} element={<OurStoryPage />} />
          <Route path={routes.PORTFOLIO} element={<PortfolioPage />} />
          <Route path={routes.CARE} element={<CarePage />} />
          <Route path={routes.BLOG_PAGE} element={<BlogPage />} />
          <Route path={routes.CONTACT_US} element={<ContactPage />} />
          {/* <Route path={routes.DOORTODOOR} element={<DoorToDoorPage />} /> */}
          <Route
            path={routes.SCHEDULE_REPAIR}
            element={<ShipInDetailsPage />}
          />
          {/* <Route path={routes.FIXME} element={<FixmePage />} /> */}
          <Route path={routes.TERM} element={<TermsCondition />} />
          <Route path={routes.PRIVACY} element={<PrivacyPolicy />} />
          {/* <Route path={routes.SHIP_IN_FIELDS} element={<ShipinFields />} /> */}
          {/* <Route path={routes.DARN_IT} element={<DoorToDoor />} /> */}
          <Route path={routes.PARTNER} element={<PartnerPage />} />
          {/* <Route path={routes.SHIPIN} element={<ShipInDetailsPage />} /> */}
          <Route
            path={routes.BLOG_PAGE_CONTENT}
            element={<BlogPageReadingContent />}
          />

          {/* <Route path={routes.MORE_DETAILS} element={<MoreDetailsPage />} /> */}
          {/* <Route path={routes.REPAIR_PAGE} element={<RepairPage />} /> */}
          {/* <Route path={routes.CHECK_OUT} element={<CheckOut />} /> */}
          {/* <Route path={routes.LAST_STEP} element={<LastStep />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
