import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DeletePopup from "../../../Popup/DeletePoup";
import ServiceDetailsState from "./ServiceDetailsState";
import sweater from "../../../assets/sweater_guy.png";
import { useState } from "react";

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

// interface Data {
//   color: string;
//   visibleHoles: string;
//   brand: string;
//   howLong: string;
//   brief: string;
// }

interface repairprops {
  nextStep: (value: any) => void;
  prevStep: () => void;
  addItem: () => void;
  serviceDetails: ServiceDetailsState[];
  onDelete: (index: number) => void;
}

export default function RepairPage({
  nextStep,
  prevStep,
  addItem,
  serviceDetails,
  onDelete,
}: repairprops) {
  // const [data, setData] = useState<Data[]>([]);

  // console.log("gfhgfj", data);

  // useEffect(() => {
  //   // Make a GET request to your API
  //   fetch('https://alterknit-backend.onrender.com/service-details')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmed = (index: number) => {
    onDelete(index);
    setShowDeleteConfirmation(false);
  };

  const handleDeleteCancelled = () => {
    setShowDeleteConfirmation(false);
  };

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
            fontWeight={500}
            fontSize="5rem"
            fontFamily={"IndustrialGothicBannerStd, sans-serif"}
            textAlign="center"
            textTransform={"lowercase"}
            lineHeight={1.3}
          >
            repair cart review
          </Typography>
          <Typography
            textAlign="center"
            maxWidth={700}
            fontSize="16px"
            fontFamily={`"ProximaNovaMedium", sans-serif`}
            fontWeight={500}
          >
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
        <Grid container columnGap={3} pb={2}>
          <Grid item xs={2}>
            {" "}
            <Typography
              paddingX={3}
              paddingY={1}
              textAlign="center"
              sx={{
                backgroundColor: Colors.HOME_BACKGROUND,
                borderRadius: "50px",
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
                fontFamily: `"ProximaNovaRegular", sans-serif`,
                fontWeight: 400,
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
        {serviceDetails.map((serviceData, index) => (
          <Grid container columnGap={3} flexWrap="nowrap" mb={3} key={index}>
            <Grid item xs={2}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.services.join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.service_details.brand}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.service_details.color}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.service_details.howMany}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.service_details.visible_holes}
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography textAlign="center" variant="body2" paddingX={3}>
                {serviceData.service_details.brief}
              </Typography>
            </Grid>
            <Grid item xs={0.5} textAlign="end">
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Stack>
      <Stack
        direction="row"
        spacing={8}
        alignItems="center"
        justifyContent="center"
      >
        <Link onClick={prevStep}>
          <StyledButtom bgColor={"#f8f1eb"} color={Colors.LINK}>
            Back
          </StyledButtom>
        </Link>
        <Link onClick={addItem}>
          <StyledButtom
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{
              width: "270px",
              fontFamily: `"ProximaNovaRegular", sans-serif`,
              fontWeight: 400,
            }}
          >
            Add Another Item
          </StyledButtom>
        </Link>
        <Link onClick={nextStep}>
          <StyledButtom
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{
              width: "270px",
              fontWeight: 600,
              fontFamily: `"ProximaNovaSemibold", sans-serif`,
            }}
          >
            Proceed to Checkout
          </StyledButtom>
        </Link>
      </Stack>
      <DeletePopup
        showDeleteConfirmation={showDeleteConfirmation}
        handleDeleteCancelled={handleDeleteCancelled}
        handleDeleteConfirmed={handleDeleteConfirmed}
      />
      {/* <Dialog open={showDeleteConfirmation} onClose={handleDeleteCancelled}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancelled}>Cancel</Button>
          <Button onClick={handleDeleteConfirmed}>Delete</Button>
        </DialogActions>
      </Dialog> */}
    </Stack>
  );
}
