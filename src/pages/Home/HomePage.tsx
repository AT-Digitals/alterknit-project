import {
    Box,
    CardMedia,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";


import SubscribePage from "./SubscribePage";
import Feature from "./Feature";
import WelcomeSection from "./WelcomeSection";
import ClothSection from "./ClothSection";
import ServiceSection from "./ServiceSection";
import CustomSection from "./CustomSection";
import BlackBoxSection from "./BlackBoxSection";
import BehindSection from "./BehindSection";



export default function HomePage() {
    return (
        <Stack>
            <WelcomeSection />
            <Stack direction="column" spacing={2} width="100%">
                <Divider sx={{ borderColor: Colors.BLACK }} />
                <Marquee>
                    <Typography fontSize="20px" color={Colors.BLACK} fontWeight={600}>
                        Invisible Repair - Reweaving - Reknitting - Knit Alteration -
                        Restyling - Custom Knit - Moth Hole Repair - Cleaning - Depilling -
                        Invisible Repair - Reweaving - Reknitting - Knit Alteration -
                        Restyling - Custom Knit - Moth Hole Repair - Cleaning - Depilling -{" "}
                    </Typography>
                </Marquee>
                <Divider sx={{ borderColor: Colors.BLACK }} />
            </Stack>
            <ClothSection />
            <ServiceSection />
            <CustomSection />
            <BlackBoxSection />
            <BehindSection />
            <Feature />
            <SubscribePage />
        </Stack>
    );
}
