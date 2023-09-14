
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import routes from "./routes";
import FormFile from "./components/FormFile";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path={routes.LOGIN} />
                <Route path={routes.LOGOUT} />
                <Route path={routes.FORMFILE} element={<FormFile />} />
            </Routes>
        </Router>
    );
}
