import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import BeforeText from "./BeforeText";
import CheckBox from "./CheckBox";
import CustomButton from "../../../../CommonComponent/CustomButton";
import ServiceDetailsState from "../ServiceDetailsState";
import ShipInDetails from "../ShipInDetails";
import routes from "../../../../routes/routes";
import styled from "@emotion/styled";
import { useState } from "react";
import SubmitPopup from "../../../../Popup/SubmitPopup";
import alterknitImage from '../../../../assets/alterknit.png';

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
const StyledTr2 = styled.tr`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledTableCellValue = styled.td`
  vertical-align: top;
  word-wrap: break-word;
  font-weight: 400;
  font-family: "ProximaNovaRegular", sans-serif;
`;

const StyledButton = styled(CustomButton)({
  borderRadius: "8px",
  ":hover": {
    backgroundColor: "#f58977",
  },
});



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 24,
  p: 4,
};
interface LaststepProps {
  serviceDetails: ServiceDetailsState[];
  shipInDetails: ShipInDetails;
  detailsEditClick: () => void;
  itemEditClick: () => void;
  onSubmit: (e: { preventDefault: () => void; }) => void;
}

export default function LastStep({
  serviceDetails,
  shipInDetails,
  detailsEditClick,
  itemEditClick,
  onSubmit,
}: LaststepProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = '/home';
  };


  const handleSubmitClick = () => {
    setShowSubmit(true);
  };

  const handleSubmitConfirmed = (e: { preventDefault: () => void; }) => {
    onSubmit(e);
    setShowSubmit(false);
    setIsModalOpen(true);
  };

  const handleSubmitCancelled = () => {
    setShowSubmit(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked1, setIsChecked1] = useState(true);

  const [displayedEntry, setDisplayedEntry] = useState(0);

  const handleDisplayEntry = (entry: number) => {
    setDisplayedEntry(entry);
  };

  const handleChecOtherkboxChange = () => {
    setIsChecked1(!isChecked1);
  };

  return (
    <>
      <Box>
        <Box
          bgcolor={"#f8f1ec"}
          display={"flex"}
          flexDirection={"column"}
          padding={"4rem 0 2rem 0"}
        >
          <Box margin={"0 auto"} textAlign={"center"} maxWidth={900}>
            <Typography
              fontSize={"80px"}
              fontFamily={"IndustrialGothicBannerStd, sans-serif"}
              fontWeight={500}
              textTransform="lowercase"
            >
              ONE LAST STEP...
            </Typography>
          </Box>
        </Box>
        <img
          src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_stage_header.svg"
          alt="background"
        ></img>
      </Box>

      <Box marginTop="6rem">
        <Box
          sx={{
            backgroundImage: `url('https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/bg_syr_last_step.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "104%",
            backgroundPosition: "center",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"20rem"}
            maxWidth={780}
            width={"100%"}
            margin={"0 auto"}
          >
            <Box
              bgcolor={"#f8f1ec"}
              border={"5px solid #df7c6d"}
              borderRadius={"20px"}
              maxWidth={"780px"}
              position={"relative"}
              padding={"3rem"}
            >
              <Button style={{ display: "contents" }} onClick={itemEditClick}>
                <img
                  style={{
                    width: "24px",
                    cursor: "pointer",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginTop: "2rem",
                    marginRight: "2rem",
                  }}
                  src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/icon_edit.png"
                  alt="edit icon"
                  title="edit"
                />
              </Button>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {serviceDetails.map((serviceData, index) => (
                  <li style={{ display: "inline" }} key={index}>
                    <button
                      style={{
                        marginLeft: "22px",
                        background:
                          displayedEntry === index ? "#df7c6d" : "white",

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
                      <Grid item xs={4}>
                        <StyledTr>
                          <StyledTableCell>Service Needed</StyledTableCell>
                        </StyledTr>
                        <StyledTr>
                          <StyledTableCell>Brand</StyledTableCell>
                        </StyledTr>
                        <StyledTr>
                          <StyledTableCell>Color</StyledTableCell>
                        </StyledTr>
                        <StyledTr>
                          <StyledTableCell>Age of Garment</StyledTableCell>
                        </StyledTr>
                        <StyledTr>
                          <StyledTableCell># of Holes</StyledTableCell>
                        </StyledTr>
                        <StyledTr>
                          <StyledTableCell>Brief Description</StyledTableCell>
                        </StyledTr>
                      </Grid>
                      {serviceDetails.length > 0 && (
                        <Grid item xs={8}>
                          <StyledTr>
                            <StyledTableCellValue>
                              {serviceDetails[displayedEntry].services}
                            </StyledTableCellValue>
                          </StyledTr>
                          <StyledTr>
                            <StyledTableCellValue>
                              {
                                serviceDetails[displayedEntry].service_details
                                  .brand
                              }
                            </StyledTableCellValue>
                          </StyledTr>
                          <StyledTr>
                            <StyledTableCellValue>
                              {
                                serviceDetails[displayedEntry].service_details
                                  .color
                              }
                            </StyledTableCellValue>
                          </StyledTr>
                          <StyledTr>
                            <StyledTableCellValue>
                              {
                                serviceDetails[displayedEntry].service_details
                                  .howMany
                              }
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
                              {
                                serviceDetails[displayedEntry].service_details
                                  .brief
                              }
                            </StyledTableCellValue>
                          </StyledTr>
                        </Grid>
                      )}
                    </Grid>
                  </div>
                </tbody>
              </table>
              <BeforeText label="Order Summary" />
            </Box>
            <Box
              bgcolor={"#f8f1ec"}
              border={"5px solid #df7c6d"}
              borderRadius={"20px"}
              position={"relative"}
              padding={"3rem 2rem 3rem 3rem"}
            >
              <Button
                style={{ display: "contents" }}
                onClick={detailsEditClick}
              >
                <img
                  style={{
                    width: "24px",
                    cursor: "pointer",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginTop: "2rem",
                    marginRight: "2rem",
                  }}
                  src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/icon_edit.png"
                  alt="edit icon"
                  title="edit"
                />
              </Button>

              <table
                style={{
                  width: "100%",
                  borderSpacing: "2rem",
                  tableLayout: "fixed",
                }}
              >
                {/* <colgroup>
                  <col style={{ width: "150px" }} />{" "}
                  <col style={{ width: "150px" }} /> */}
                {/* </colgroup> */}
                <tbody>
                  <Grid container>
                    <Grid item xs={4}>
                      <StyledTr2>
                        <StyledTableCell>Name</StyledTableCell>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCell>Address</StyledTableCell>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCell>Phone Number</StyledTableCell>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCell>E-Mail Address</StyledTableCell>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCell>Order Type</StyledTableCell>
                      </StyledTr2>
                    </Grid>
                    <Grid item xs={8}>
                      <StyledTr2>
                        <StyledTableCellValue>
                          {shipInDetails.ShipInformation.firstName +
                            " " +
                            shipInDetails.ShipInformation.lastName}
                        </StyledTableCellValue>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCellValue>
                          {shipInDetails.ShipInformation.streetAddress +
                            " " +
                            shipInDetails.ShipInformation.apartment}
                        </StyledTableCellValue>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCellValue>
                          {shipInDetails.ShipInformation.phone_number}
                        </StyledTableCellValue>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCellValue>
                          {shipInDetails.ShipInformation.email}
                        </StyledTableCellValue>
                      </StyledTr2>
                      <StyledTr2>
                        <StyledTableCellValue>shipin</StyledTableCellValue>
                      </StyledTr2>
                    </Grid>
                  </Grid>
                </tbody>
              </table>
              <BeforeText label="Delivery Information" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"4rem"}
          maxWidth={1440}
          width={"100%"}
        >
          <Box mt={15} padding={"0 10rem"} textAlign={"left"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <label
                style={{
                  fontFamily: "IndustrialGothicBannerStd",
                  textTransform: "lowercase",
                  fontSize: "44px",
                  lineHeight: "4.5rem",
                  fontWeight: 500,
                  flex: 1,
                  textDecoration: "underline",
                }}
                onClick={handleCheckboxChange}
              >
                Terms & conditions*
              </label>
              <CheckBox
                isChecked={isChecked}
                handleCheckboxChange={handleCheckboxChange}
              />
            </Box>
            <Typography
              fontSize={"16px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
            >
              By checking this box, you agree to our{" "}
              <a
                style={{
                  color: "#df7c6d",
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  transition: "color .35s ease-in-out",
                  fontFamily: `"ProximaNovaMedium", sans-serif`,
                  fontWeight: 500,
                }}
                href={routes.TERM}
                target="_blank"
                rel="noreferrer"
              >
                terms and conditions
              </a>
            </Typography>
          </Box>

          <Box padding={"0 10rem"} textAlign={"left"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <label
                style={{
                  fontFamily: "IndustrialGothicBannerStd",
                  textTransform: "lowercase",
                  fontSize: "44px",
                  lineHeight: "4.5rem",
                  fontWeight: 500,
                  flex: 1,
                  textDecoration: "underline",
                }}
                onClick={handleChecOtherkboxChange}
              >
                SIGN UP FOR OUR NEWSLETTER
              </label>
              <CheckBox
                isChecked={isChecked1}
                handleCheckboxChange={handleChecOtherkboxChange}
              />
            </Box>
            <Typography
              fontSize={"16px"}
              fontFamily={`"ProximaNovaMedium", sans-serif`}
              fontWeight={500}
            >
              By checking this box, you agree to sign up for our newsletter.
            </Typography>
          </Box>
          <Box padding={"0 10rem"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"1.5rem"}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box mb={6} mt={10} textAlign={"center"}>
        <StyledButton
          style={{
            background: "#df7c6d",
            color: "black",
            width: 160,
            height: 50,
            fontSize: "22px",
            fontFamily: `"ProximaNovaMedium", sans-serif`,
            textTransform: "capitalize",
            fontWeight: 500,
            padding: "30px 40px ",
          }}
          type="submit"
          onClick={handleSubmitClick}
        >
          Submit
        </StyledButton>{" "}
      </Box>
      {showSubmit &&
        <SubmitPopup
          showSubmitConfirmation={showSubmit}
          handleSubmitCancelled={handleSubmitCancelled}
          handleSubmitConfirmed={handleSubmitConfirmed} />}
      {isModalOpen &&
        <Modal
          open={isModalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box display={"flex"} justifyContent={"center"}>
              <img
                src={alterknitImage}
                alt="logo"
                width="40%"
                height="15%"
              />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>

              <Typography fontSize={"20px"} id="modal-modal-description" sx={{ mt: 2 }}>
                Your Order Details Successfully Sent your Email!
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} padding={"9px 0px"}>
              <Button sx={{
                height: "30px",
                backgroundColor: "black",
                color: "white",
                marginTop: "10px",
                ":hover": {
                  backgroundColor: "rgb(223, 124, 109)",
                },
              }} onClick={closeModal}>OK</Button>
            </Box>
          </Box>
        </Modal>
      }
    </>

  );
}
