import { Button, Stack, Typography, styled } from "@mui/material";
import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import bgmore from "../../../assets/bg_syr_more_info.svg";
import ShipCard from "./ShipCard";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";

const StyledButton = styled(CustomButton)({
    fontWeight: 400,
    fontSize: "1.5rem",
    fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
    padding: "30px",
    width: "270px",
    height: "200px",
    borderRadius: "30px",
    backgroundColor: Colors.HOME_BACKGROUND,
    color: Colors.BLACK,
    boxShadow: "none",
    ":hover": {
        backgroundColor: Colors.LINK,
    },
});

const StyledButtom1 = styled(CustomButton)({
    fontSize: "20px",
    borderRadius: "8px",
    padding: "10px 20px",
    textTransform: "none",
    boxShadow: "none",
    width: "30px",
    margin: "10px  auto 0px",
    ":hover": {
        color: Colors.WHITE,
    },
});

const StyleButtonNew = styled(Button)({
    color: Colors.BLACK,
    backgroundColor: Colors.HOME_BACKGROUND,
    fontWeight: 400,
    fontSize: "2.5rem",
    fontFamily: `"IndustrialGothicBannerStd", sans-serif`,
    padding: "30px",
    width: "270px",
    height: "200px",
    borderRadius: "30px",
    ":hover": {
        backgroundColor: Colors.LINK
    }
})


export default function MoreDetailsPage() {
    return (
        <Stack gap={30}
            sx={{ backgroundImage: `url(${bgmore})`, backgroundSize: "104%", backgroundPosition: "center" }} >
            <Stack
                paddingY={5}
                maxWidth={1300}
                margin="0 auto"
                justifyContent="center"
                direction="column"
                spacing={3}
                alignItems="center"

            >
                <Typography
                    fontWeight={400}
                    fontSize="5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                >
                    just a few more details...
                </Typography>
                <Typography
                    fontWeight={400}
                    fontSize="3.5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                    lineHeight={1}
                    maxWidth={900}
                >
                    8. has this garment been previously repaired by a dry cleaner or another
                    individual?
                </Typography>
                <Stack
                    direction="row"
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                    pt={2}
                    pb={2}
                >
                    <StyleButtonNew>Yes</StyleButtonNew>
                    <StyleButtonNew>NO</StyleButtonNew>
                </Stack>
            </Stack>
            <Stack paddingY={5}
                maxWidth={1300}
                margin="0 auto"
                justifyContent="center"
                direction="column"
                spacing={3}
                alignItems="center" >
                <Typography
                    fontWeight={400}
                    fontSize="3.5rem"
                    fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                    textAlign="center"
                    lineHeight={1}
                >
                    9. has this garment been recently cleaned?
                </Typography>
                <Typography textAlign="center" maxWidth={850} >
                    Cleaning will only make holes bigger and incur higher repair cost.
                    Please let us examine your garment first. If the garment has already
                    been cleaned before you found us, don't worry.
                </Typography>
                <Stack
                    direction="row"
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                    pt={2}
                    pb={10}
                >
                    <StyleButtonNew>Yes</StyleButtonNew>
                    <StyleButtonNew>NO</StyleButtonNew>
                </Stack>
                <ShipCard link={routes.DOORTODOOR} />
            </Stack>

        </Stack>
    );
}
