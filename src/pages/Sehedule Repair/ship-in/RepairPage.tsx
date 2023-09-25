import { Box, Stack, Typography } from "@mui/material";
import sweater from "../../../assets/sweater_guy.png";
import Colors from "../../../CommonComponent/Colors";
import DeleteIcon from '@mui/icons-material/Delete';

export default function RepairPage() {
    return (
        <Stack
            paddingY={5}
            maxWidth={1300}
            margin="0 auto"
            justifyContent="center"
            direction="column"
        >
            <Stack direction="row" spacing={3}>
                <img src={sweater} alt="" width={250} height={250} />
                <Box>
                    <Typography
                        fontWeight={400}
                        fontSize="5rem"
                        fontFamily={"IndustrialGothicBannerStd, sans-serif"}
                        textAlign="center"
                    >
                        repair cart review
                    </Typography>
                    <Typography textAlign="center">
                        This is the preview of all current repairs in the order. Please make
                        sure all information is correct and any missing information is
                        filled in to the best of your ability. We look forward to receiving
                        your garment shortly.
                    </Typography>
                </Box>
                <img
                    src={sweater}
                    alt=""
                    width={250}
                    height={250}
                    style={{
                        transform: "scaleX(-1)",
                    }}
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    Service Needed
                </Typography>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    Brand
                </Typography>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    Color
                </Typography>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    Age of Garment
                </Typography>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    # of Holes
                </Typography>
                <Typography
                    paddingX={3}
                    paddingY={1}
                    sx={{ backgroundColor: Colors.HOME_BACKGROUND, borderRadius: "50px" }}
                >
                    Brief Description
                </Typography>
            </Stack>
            <Stack direction="row">
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <Typography>1</Typography>
                <DeleteIcon />
            </Stack>
        </Stack>
    );
}
