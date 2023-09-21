import { Box, Typography } from "@mui/material";
import Service from "../../assets/services_services_bg_top.svg";
import ServiceHead from "../../assets/bg_services.jpg";

export default function ServiceHeader() {
    return (
        <>
            <Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Typography
                        border={"4px dashed black"}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            border: "4px dashed black",
                            width: "990px",
                            height: "112px",
                            textAlign: "center",
                            paddingTop: "54px",
                            marginTop: "270px",
                        }}
                        position={"absolute"}
                        color={"black"}
                        fontWeight={"bold"}
                        fontSize={"45px"}
                    >
                        HAPPINESS 100% GUARANTEED
                    </Typography>
                </Box>
                <img width={"100%"} src={ServiceHead} alt="service-header"></img>
                <img src={Service} alt="service-header" />
            </Box>
        </>
    );
}