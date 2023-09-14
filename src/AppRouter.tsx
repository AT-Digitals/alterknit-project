import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import routes from "./routes";
import AppLayout from "./AppLayout";
import LoginPage from "./LoginPage";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.LOGIN} element={<LoginPage />} />
                <Route path={routes.LOGOUT} />
                <Route
                    path={routes.ROOT}
                    element={
                        // <AuthenticatedRoute
                        //   role={PortalUserRole.CONSULTANT}
                        //   fallbackRoute={routes.LOGIN}
                        // >
                        <AppLayout />
                        // {/* </AuthenticatedRoute> */}
                    }
                ></Route>
            </Routes>
        </Router>
    );
}
