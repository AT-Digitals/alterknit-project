import { Divider, Stack, Typography } from "@mui/material";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import feature5 from "../../assets/feature5.png";
import Colors from "../../CommonComponent/Colors";


export default function Feature() {
    return (
        <Stack sx={{ backgroundColor: Colors.LINK }} spacing={3} padding={5}>
            <Typography fontSize="16px" letterSpacing="5px" textAlign="center" textTransform="uppercase" color={Colors.WHITE}>FEATURED IN</Typography>
            <Divider sx={{ borderColor: Colors.WHITE }} />
            <Stack direction="row" alignItems="center" justifyContent="space-around">
                <img src={feature1} alt="Feature1" width="84px" height="34px" />
                <img src={feature2} alt="Feature2" width="230px" height="34px" />
                <img src={feature3} alt="Feature3" width="310px" height="34px" />
                <img src={feature4} alt="Feature4" width="150px" height="34px" />
                <img src={feature5} alt="Feature5" width="200px" height="34px" />
            </Stack>
        </Stack>
    )
}