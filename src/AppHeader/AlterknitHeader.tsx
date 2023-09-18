import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import Alterknit from "../assets/alterknit.png";
import { Link } from "react-router-dom";
import React from "react";
import routes from "../routes/routes";

const ServiceItem = styled(Link)`
  text-decoration: none;
  position: relative;

  color: graytext; /* Default text color */

  &:hover {
    color: black; /* Change the text color on hover */
  }

  &:hover::before {
    content: "•";
    color: black;
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    font-size: 40px;
  }
`;

export default function AlterknitHeader() {
  const services = ["Services", "Our Story", "Portfolio", "Care", "Blog"];

  return (
    <Box
      bgcolor={"white"}
      width="100%"
      minHeight={136}
      borderBottom={"1px solid black"}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1440 }}>
        <Stack
          pt={4.5}
          direction={"row"}
          justifyContent="space-around"
          alignItems="center"
          spacing={5}
        >
          <Box>
            <Link to={""}>
              <img width={170} src={Alterknit} alt="alterknit" />
            </Link>
          </Box>
          <Stack
            whiteSpace="nowrap"
            alignItems="center"
            spacing={6}
            direction="row"
          >
            {services.map((service, index) => (
              <ServiceItem key={index} to="" className="service-item">
                <Typography variant="h5" key={index}>
                  {service.trim()}
                </Typography>
              </ServiceItem>
            ))}
          </Stack>
          <Link
            to={""}
            style={{
              fontSize: "20px",
              textDecoration: "none",
              backgroundColor: "black",
              color: "white",
              padding: "20px",
              borderRadius: 5,
            }}
          >
            Schedule your repair
          </Link>
          <Link to={routes.SIGN_IN}>
            <Button
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "black",
                textTransform: "capitalize",
                width: 150,
                height: 62,
                fontSize: "20px",
              }}
            >
              Logout
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
