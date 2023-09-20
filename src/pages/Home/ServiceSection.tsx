import {
    Stack,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import Colors from "../../CommonComponent/Colors";
import CustomButton from "../../CommonComponent/CustomButton";
import topImage from "../../assets/home_services_bg_top.svg";
import bottomImage from "../../assets/home_services_bg_bottom.svg";
import bugImage from "../../assets/bug_02.png";

export default function ServiceSection() {
    return (
        <Stack>
            <img src={topImage} alt="top" />
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                margin="0 auto"
                paddingY={3}
                paddingX={28}
                sx={{ backgroundColor: Colors.HOME_BACKGROUND }}
            >
                <Grid item xs={6}>
                    <Typography
                        fontSize="80px"
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        fontWeight={400}
                        textTransform="uppercase"
                    >
                        holes?
                    </Typography>
                    <Typography
                        fontSize="80px"
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        fontWeight={400}
                        textTransform="uppercase"
                    >
                        we fix them
                    </Typography>
                    <CustomButton
                        bgColor={Colors.BLACK}
                        sx={{
                            borderRadius: "5px",
                            padding: "20px 30px",
                            textTransform: "none",
                            fontSize: "20px",
                            marginTop: 2,
                            fontWeight: "bold",
                        }}
                    >
                        See our Services
                    </CustomButton>
                </Grid>
                <Grid item xs={6}>
                    <List sx={{
                        listStyleType: 'disc',
                        // listStylePosition: 'inside'
                        fontSize: "20px"
                    }}>
                        <ListItem sx={{ fontSize: "22px", display: 'list-item', marginBottom: "30px" }}>

                            We work with you to determine the scope of service you need.
                        </ListItem>
                        <ListItem sx={{ fontSize: "22px", display: 'list-item', marginBottom: "30px" }}>

                            Our unmatched team works diligently to restore your items.

                        </ListItem>
                        <ListItem sx={{ fontSize: "22px", display: 'list-item' }}>

                            Your items come back to you repaired and ready to enjoy again.

                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <img src={bottomImage} alt="bottom" />
            {/* <img src={bugImage} alt="bug2" width="20%" height="20%" /> */}
        </Stack>
    );
}
