import { Box, Typography } from "@mui/material";

import BeforeText from "./BeforeText";
import CheckBox from "./CheckBox";
import CustomButton from "../../../../CommonComponent/CustomButton";
import routes from "../../../../routes/routes";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledTableCell = styled.td`
  color: black;
  width: 150px;
  font-weight: 600;
`;

const StyledTableCellValue = styled.td`
  vertical-align: top;
  word-wrap: break-word;
  width: 150px;
  font-weight: 600;
`;

const StyledButton = styled(CustomButton)({
  borderRadius: "8px",
  ":hover": {
    backgroundColor: "#f58977",
  },
});

export default function LastStep() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked1, setIsChecked1] = useState(false);

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
            gap={"30rem"}
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
              padding={"2rem 2rem 2rem 2rem"}
            >
              <a href={routes.SHIPIN}>
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
              </a>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ display: "inline" }}>
                  <button
                    style={{
                      marginLeft: "22px",
                      background: "#df7c6d",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    ITEM 1
                  </button>
                </li>
              </ul>
              <table
                style={{
                  width: "100%",
                  borderSpacing: "2rem",
                  tableLayout: "fixed",
                }}
              >
                <tbody>
                  <tr>
                    <StyledTableCell>Service Needed</StyledTableCell>
                    <StyledTableCellValue>restyling</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Brand</StyledTableCell>
                    <StyledTableCellValue>kjb</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Color</StyledTableCell>
                    <StyledTableCellValue>hjbjk</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Age of Garment</StyledTableCell>
                    <StyledTableCellValue>jhvjh</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell># of Holes</StyledTableCell>
                    <StyledTableCellValue>hjvk</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Brief Description</StyledTableCell>
                    <StyledTableCellValue>jhbj</StyledTableCellValue>
                  </tr>
                </tbody>
              </table>
              <BeforeText label="Order Summary" />
            </Box>
            <Box
              bgcolor={"#f8f1ec"}
              border={"5px solid #df7c6d"}
              borderRadius={"20px"}
              position={"relative"}
              padding={"2rem 2rem 2rem 2rem"}
            >
              <a href={routes.CHECK_OUT}>
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
              </a>

              <table
                style={{
                  width: "100%",
                  borderSpacing: "2rem",
                  tableLayout: "fixed",
                }}
              >
                <colgroup>
                  <col style={{ width: "150px" }} />{" "}
                  <col style={{ width: "150px" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCellValue>restyling</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Address</StyledTableCell>
                    <StyledTableCellValue>kjb</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Phone Number</StyledTableCell>
                    <StyledTableCellValue>hjbjk</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>E-Mail Address</StyledTableCell>
                    <StyledTableCellValue>jhvjh</StyledTableCellValue>
                  </tr>
                  <tr>
                    <StyledTableCell>Order Type</StyledTableCell>
                    <StyledTableCellValue>hjvk</StyledTableCellValue>
                  </tr>
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
              fontFamily={"Proxima Nova,sans-serif "}
            >
              By checking this box, you agree to our{" "}
              <a
                style={{
                  color: "#df7c6d",
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  transition: "color .35s ease-in-out",
                }}
                href={routes.TERM}
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
              fontFamily={"Proxima Nova,sans-serif "}
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
            >
              <Box width={"100%"} display={"flex"} gap={"30px"}>
                <input
                  placeholder="Apply coupon code"
                  style={{
                    border: "1px solid black",
                    borderRadius: "6px",
                    outline: 0,
                    padding: "1rem",
                    fontFamily: "Proxima Nova,sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                    width: "100%",
                    maxWidth: "270px",
                  }}
                />
                <StyledButton
                  style={{
                    background: "#df7c6d",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  Check Validity
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mb={10} mt={10} textAlign={"center"}>
        <StyledButton
          style={{
            background: "#df7c6d",
            color: "black",
            width: 160,
            height: 50,
            fontSize: "22px",
            fontFamily: "Proxima Nova,sans-serif",
            textTransform: "capitalize",
          }}
        >
          Submit
        </StyledButton>{" "}
      </Box>
    </>
  );
}
