import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import CustomDialog from "../../../Popup/Popup";
import DeleteIcon from "@mui/icons-material/Delete";
import DeletePopup from "../../../Popup/DeletePoup";
import ServiceDetailsState from "./ServiceDetailsState";
import sweater from "../../../assets/sweater_guy.png";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledTableCell = styled.td`
  color: black;
  font-weight: 600;
  font-family: "ProximaNovaSemibold", sans-serif;
`;
const StyledTr = styled.tr`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledTableCellValue = styled.td`
  vertical-align: top;

  font-weight: 400;
  font-family: "ProximaNovaRegular", sans-serif;
`;

const StyledButton = styled(CustomButton)({
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

interface repairprops {
  nextStep: (value: any) => void;
  prevStep: () => void;
  addItem: () => void;
  serviceDetails: ServiceDetailsState[];
  setServiceDetails: (data: ServiceDetailsState[]) => void;
  onDelete: (value: ServiceDetailsState) => void;
}

export default function RepairPage({
  nextStep,
  prevStep,
  addItem,
  serviceDetails,
  setServiceDetails,
  onDelete,
}: repairprops) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = (value: ServiceDetailsState) => {
    setShowDeleteConfirmation(true);

    setNewData(value);
  };

  const handleDeleteConfirmed = (value: ServiceDetailsState) => {
    onDelete(value);
    setShowDeleteConfirmation(false);
  };

  const handleDeleteCancelled = () => {
    setShowDeleteConfirmation(false);
  };
  const [error, setError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newData, setNewData] = useState<ServiceDetailsState>();

  const isServiceDetailsEmpty = serviceDetails.length === 0;

  const [displayedEntry, setDisplayedEntry] = useState(0);
  const handleDisplayEntry = (entry: number) => {
    setDisplayedEntry(entry);
  };

  const handleProceedToCheckout = () => {
    if (isServiceDetailsEmpty) {
      setError("Your cart is empty. Please add an item first.");
      setIsDrawerOpen(true);
    } else {
      nextStep("check-out");
    }
  };
  const handleCloseModal = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Stack
      paddingY={6}
      maxWidth={1300}
      //margin="0 auto"
      justifyContent="center"
      direction="column"
      paddingX={{ xs: 3, sm: 6, lg: 13 }}
      spacing={8}
    >
      <Box
        display={{ xs: "flex", sm: "flex", md: "flex", lg: "none" }}
        paddingX={{ xs: 0, sm: 2, md: 7, lg: 7 }}
        margin="0 auto"
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontWeight={500}
            fontSize={{ xs: "45px", sm: "5rem" }}
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
        </Stack>
      </Box>
      <Box display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}>
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
              This is the preview of all current repairs in the order. Please
              make sure all information is correct and any missing information
              is filled in to the best of your ability. We look forward to
              receiving your garment shortly.
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
      </Box>
      <Box
        display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
        bgcolor={"#f8f1ec"}
        margin={{ xs: 0, sm: 0, md: "64px auto 0" }}
        border={"5px solid #df7c6d"}
        borderRadius={"20px"}
        maxWidth={"780px"}
        position={"relative"}
        padding={{ xs: "1rem", sm: "3rem" }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {serviceDetails.map((serviceData, index) => (
            <li style={{ display: "inline" }} key={index}>
              <button
                style={{
                  marginLeft: "20px",
                  marginBottom: "20px",
                  background: displayedEntry === index ? "#df7c6d" : "white",
                  color: displayedEntry === index ? "white" : "black",
                  padding: "5px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontFamily: `"ProximaNovaMedium", sans-serif`,
                  fontWeight: 500,
                }}
                onClick={() => handleDisplayEntry(index)}
              >
                ITEM {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <table
          style={{
            width: "100%",
            borderSpacing: "2rem",
            tableLayout: "fixed",
          }}
        >
          <tbody>
            <div
              style={{
                marginTop: "-30px",
              }}
            >
              <Grid container>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell>Service Needed</StyledTableCell></StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {serviceDetails[displayedEntry].services}
                    </StyledTableCellValue>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell>Brand</StyledTableCell>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {serviceDetails[displayedEntry].service_details.brand}
                    </StyledTableCellValue>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell>Color</StyledTableCell>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {serviceDetails[displayedEntry].service_details.color}
                    </StyledTableCellValue>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell>Age of Garment</StyledTableCell>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {serviceDetails[displayedEntry].service_details.howMany}
                    </StyledTableCellValue>
                  </StyledTr> </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell># of Holes</StyledTableCell>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {
                        serviceDetails[displayedEntry].service_details
                          .visible_holes
                      }
                    </StyledTableCellValue>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCell>Brief Description</StyledTableCell>
                  </StyledTr>
                </Grid>
                <Grid item xs={6}>
                  <StyledTr>
                    <StyledTableCellValue>
                      {serviceDetails[displayedEntry].service_details.brief}
                    </StyledTableCellValue>
                  </StyledTr>
                </Grid>
              </Grid>
              {/* {serviceDetails.length > 0 && (
                  <Grid item xs={6}>
                    <StyledTr>
                      <StyledTableCellValue>
                        {serviceDetails[displayedEntry].services}
                      </StyledTableCellValue>
                    </StyledTr>
                    <StyledTr>
                      <StyledTableCellValue>
                        {serviceDetails[displayedEntry].service_details.brand}
                      </StyledTableCellValue>
                    </StyledTr>
                    <StyledTr>
                      <StyledTableCellValue>
                        {serviceDetails[displayedEntry].service_details.color}
                      </StyledTableCellValue>
                    </StyledTr>
                    <StyledTr>
                      <StyledTableCellValue>
                        {serviceDetails[displayedEntry].service_details.howMany}
                      </StyledTableCellValue>
                    </StyledTr>
                    <StyledTr>
                      <StyledTableCellValue>
                        {
                          serviceDetails[displayedEntry].service_details
                            .visible_holes
                        }
                      </StyledTableCellValue>
                    </StyledTr>
                    <StyledTr>
                      <StyledTableCellValue>
                        {serviceDetails[displayedEntry].service_details.brief}
                      </StyledTableCellValue>
                    </StyledTr>
                  </Grid>
                )} */}
              {/* </Grid> */}
            </div>
          </tbody>
        </table>
      </Box>
      <Stack
        display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
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
          <Typography>
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
                <IconButton onClick={() => handleDeleteClick(serviceData)}>
                  <DeleteIcon style={{ color: "black" }} />
                </IconButton>
              </Grid>
            </Grid>
            {newData && (
              <DeletePopup
                showDeleteConfirmation={showDeleteConfirmation}
                handleDeleteCancelled={handleDeleteCancelled}
                handleDeleteConfirmed={() => handleDeleteConfirmed(newData)}
              />
            )}
          </Typography>
        ))}
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        spacing={{ xs: 3, sm: 6, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        <StyledButton
          onClick={prevStep}
          bgColor={"#f8f1eb"}
          color={Colors.LINK}
          disabled={serviceDetails.length === 0 ? true : false}
        >
          Back
        </StyledButton>
        <Link onClick={addItem}>
          <StyledButton
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{
              minWidth: {
                xs: "270px !important",
                sm: "150px !important",
                md: "270px !important",
              },
              fontFamily: `"ProximaNovaRegular", sans-serif`,
              fontWeight: 400,
            }}
          >
            Add Another Item
          </StyledButton>
        </Link>
        <Link onClick={handleProceedToCheckout}>
          <StyledButton
            bgColor={"#f8f1eb"}
            color={Colors.BLACK}
            sx={{
              minWidth: {
                xs: "270px !important",
                sm: "150px !important",
                md: "270px !important",
              },
              fontWeight: 600,
              fontFamily: `"ProximaNovaSemibold", sans-serif`,
            }}
          >
            Proceed to Checkout
          </StyledButton>
        </Link>
      </Stack>
      <CustomDialog
        isOpen={isDrawerOpen}
        onClose={handleCloseModal}
        message={error}
      />
    </Stack>
  );
}
