import { Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import Layout from "../CommonComponent/Layout";
import AlterknitHeader from "../AppHeader/AlterknitHeader";

export default function AppLayout({ children, ...props }: BoxProps) {
    //   const dispatch = useDispatch<ProfileStateDispatchType>();

    // Basic app state fetch from API
    //   useEffect(() => {
    //     dispatch(GetAllProfiles());
    //   }, [dispatch]);

    return (
        <Layout {...props}>
            <AlterknitHeader />
            <Box display="flex" flexDirection="column" width="100%" flexGrow={1}>
                <Box display="flex" flexDirection="column" flexGrow={1}>
                    <Box display="flex" flexDirection="column" flexGrow={1}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
