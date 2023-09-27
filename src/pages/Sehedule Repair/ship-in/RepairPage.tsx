import { Box, Grid, Stack, Typography, styled } from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
import sweater from "../../../assets/sweater_guy.png";

const StyledButtom = styled(CustomButton)({
  fontSize: "22px",
  borderRadius: "8px",
  padding: "10px 20px",
  textTransform: "none",
  boxShadow: "none",
  width: "30px",
  margin: "0px  auto 0px",
  ":hover": {
    color: Colors.WHITE,
  },
});

export default function RepairPage() {
  return (
    <Stack
      paddingY={6}
      maxWidth={1300}
      margin="0 auto"
      justifyContent="center"
      direction="column"
      paddingX={3}
      spacing={8}
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
      <Stack
        direction="column"
        spacing={3}
        sx={{
          overflowX: "scroll",
          borderBottom: "1px solid #000",
          paddingBottom: "1rem",
          marginBottom: "3rem",
        }}
      >
        <Grid container columnGap={3}>
          <Grid item xs={2}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              Service Needed
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
          <Grid item xs={1}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              Brand
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
          <Grid item xs={1}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              Color
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              Age of Garment
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              # of Holes
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
          <Grid item xs={2.5}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
              }}
            >
              Brief Description
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              paddingX={3}
            ></Typography>
          </Grid>
        </Grid>
        <Grid container columnGap={3} flexWrap="nowrap" mb={3}>
          <Grid item xs={2}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              hfghgj
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              hgjhgj
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              jhgjgj
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              jhg
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              jhgjg
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography textAlign="center" variant="body2" paddingX={3}>
              ghfhfh
            </Typography>
          </Grid>
          <Grid item xs={0.5} textAlign="end">
            <DeleteIcon />
          </Grid>
        </Grid>
      </Stack>
      <Stack
        direction="row"
        spacing={8}
        alignItems="center"
        justifyContent="center"
      >
        <Link to={routes.MORE_DETAILS}>
          <StyledButtom
            bgColor={"#f8f1eb"}
            color={Colors.LINK}
            sx={{ paddingTop: "15px", paddingBottom: "15px" }}
          >
            Back
          </StyledButtom>
        </Link>
        <Link to={routes.SHIP_IN_FIELDS}>
          <StyledButtom
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{ paddingTop: "15px", paddingBottom: "15px", width: "270px" }}
          >
            Add Another Item
          </StyledButtom>
        </Link>
        <Link to={routes.CHECK_OUT}>
          <StyledButtom
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{ paddingTop: "15px", paddingBottom: "15px", width: "270px" }}
          >
            Proceed to Checkout
          </StyledButtom>
        </Link>
      </Stack>
    </Stack>
  );
}
