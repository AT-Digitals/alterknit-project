import { Button, Grid, Stack, Typography, styled } from "@mui/material";
import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import ShipCard from "./ShipCard";
import { useState } from "react";
import routes from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import RepairPage from "./RepairPage";

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
    lineHeight: 1,
    ":hover": {
        backgroundColor: Colors.LINK
    }
})

export default function ShipInPage() {
    const navigate = useNavigate();

    const routeChange = () => {
        let path = routes.SHIP_IN_FIELDS;
        navigate(path);
    }

    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

    const handleButtonClick = (buttonIndex: string) => {
        if (selectedButtons.includes(buttonIndex)) {
            setSelectedButtons(
                selectedButtons.filter((index) => index !== buttonIndex)
            );
        } else {
            setSelectedButtons([...selectedButtons, buttonIndex]);
        }
    };

    const handleNextButtonClick = () => {
        if (selectedButtons.length > 0) {
            routeChange();
        } else {
            alert("Please select a service first");
        }
    };

    return (
        <Stack
            paddingY={5}
            maxWidth={1300}
            margin="0 auto"
            justifyContent="center"
            direction="column"
        >
            <Typography
                fontWeight={400}
                fontSize="5rem"
                fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                textAlign="center"
            >
                let's start with your first item!
            </Typography>
            <Typography
                textAlign="center"
                maxWidth={670}
                margin="0 auto"
                sx={{
                    padding: "15px 20px",
                    border: `5px solid ${Colors.LINK}`,
                    borderRadius: "20px",
                    backgroundColor: Colors.HOME_BACKGROUND,
                }}
            >
                You will be able to add as many items as you like and to select multiple
                services per item.
            </Typography>
            <Typography variant="body1" textAlign="center" pt={10}>
                Please choose at least one service
            </Typography>
            <Grid container rowGap={5} paddingX={3} pb={5} pt={2}>
                <Grid item xs={3}>
                    <StyleButtonNew
                        onClick={() => handleButtonClick("reweaving for knits")}
                        style={{
                            backgroundColor: selectedButtons.includes("reweaving for knits")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }}
                    >
                        reknitting for knits
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew
                        onClick={() => handleButtonClick("reweaving for suits")}
                        style={{
                            backgroundColor: selectedButtons.includes("reweaving for suits")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }}
                    >
                        reweaving for suits
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew
                        onClick={() => handleButtonClick("knit alteration")}
                        style={{
                            backgroundColor: selectedButtons.includes("knit alteration")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }}
                    >
                        knit alteration
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew
                        onClick={() => handleButtonClick("other fabric repair")}
                        style={{
                            backgroundColor: selectedButtons.includes("other fabric repair")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }}
                    >
                        other fabric repair
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew onClick={() => handleButtonClick("cleaning")}
                        style={{
                            backgroundColor: selectedButtons.includes("cleaning")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }} >cleaning</StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew
                        onClick={() => handleButtonClick("restyling")}
                        style={{
                            backgroundColor: selectedButtons.includes("restyling")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }} >
                        restyling
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew onClick={() => handleButtonClick("de-pilling")}
                        style={{
                            backgroundColor: selectedButtons.includes("de-pilling")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }}>
                        de-pilling
                    </StyleButtonNew>
                </Grid>
                <Grid item xs={3}>
                    <StyleButtonNew onClick={() => handleButtonClick("custom knit work")}
                        style={{
                            backgroundColor: selectedButtons.includes("custom knit work")
                                ? Colors.LINK
                                : Colors.HOME_BACKGROUND,
                        }} >
                        custom knit work
                    </StyleButtonNew>
                </Grid>
            </Grid>
            <ShipCard onClick={handleNextButtonClick} link={routes.FIXME} />
            <RepairPage />
        </Stack>
    );
}