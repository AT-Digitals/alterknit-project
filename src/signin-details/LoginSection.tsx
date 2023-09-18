/* eslint-disable jsx-a11y/img-redundant-alt */

import { Stack, Typography } from "@mui/material";

import image from "../assets/alterknit-image.jpg";

export default function LoginSection() {
  return (
    <Stack direction="column" spacing={3} paddingX={8}>
      <img
        src="https://alterknitnewyork.com/wp-content/themes/alterknit/assets/img/logo.svg"
        alt="image"
        width="20%"
        height="20%"
      />
      <Typography variant="h5" textAlign="justify">
        Real repair We save the clothing that you, your tailor, or dry cleaner
        can't.
      </Typography>
      <img src={image} alt="" width={100} height={100} />
    </Stack>
  );
}
