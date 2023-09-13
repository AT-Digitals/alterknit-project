
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import routes from "./routes";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.LOGIN} />
                <Route path={routes.LOGOUT} />
            </Routes>
        </Router>
    );
}
