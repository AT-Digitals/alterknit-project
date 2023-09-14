import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Alterknit from "./alterknit.png";
import { Link } from "react-router-dom";
import React from "react";
import routes from "../routes/routes";

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
              <Link style={{ textDecoration: "none" }} to="">
                <Typography color="GrayText" variant="h5" key={index}>
                  {service.trim()}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Link
            to={""}
            style={{
              fontSize: "20px",
              textDecoration: "none",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: 5,
            }}
          >
            Schedule your repair
          </Link>
          <Link to={routes.LOGIN}>
            <Button variant="contained" style={{ backgroundColor: "black" }}>
              Login
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
