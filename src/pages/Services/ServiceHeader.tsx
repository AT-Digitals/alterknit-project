import { Box, Typography } from "@mui/material";
import Service from "../../assets/services_services_bg_top.svg";
import ServiceHead from "../../assets/bg_services.jpg";


export default function ServiceHeader() {
    return (
        <Box bgcolor={"#f8f1eb"}>
            <Box display={"flex"} justifyContent={"center"}>
                <Typography
                    border={"4px dashed black"}
                    sx={{
                        backgroundColor: "#f8f1ec",
                        borderRadius: "45px",
                        border: "4px dashed black",
                        width: "100%",
                        maxWidth:"1010px",
                        textAlign: "center",
                        padding: "35px 30px",
                        marginTop: "225px",
                    }}
                    position={"absolute"}
                    color={"black"}
                    fontSize={"80px"}
                    fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                    fontWeight={500}
                    textTransform={"lowercase"}
                >
                    HAPPINESS 100% GUARANTEED
                </Typography>
            </Box>
            <img width={"100%"} src={ServiceHead} alt="service-header" />
            <img style={{
                marginTop: "-10%",
            }} src={Service} alt="service-header" />
        </Box>
    );
}
