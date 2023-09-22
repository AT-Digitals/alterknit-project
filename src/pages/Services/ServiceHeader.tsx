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
                            borderRadius: "45px",
                            border: "4px dashed black",
                            width: "1010px",
                            height: "151px",
                            textAlign: "center",
                            paddingTop: "37px",
                            marginTop: "270px",
                        }}
                        position={"absolute"}
                        color={"black"}
                        fontSize={"5rem"}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    >
                        HAPPINESS 100% GUARANTEED
                    </Typography>
                </Box>
                <img width={"100%"} src={ServiceHead} alt="service-header" />
                <img style={{
                    marginTop: "-10%",
                }} src={Service} alt="service-header" />
            </Box>
        </>
    );
}
