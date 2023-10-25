import { Box, useMediaQuery } from "@mui/material";

import DarnIt from "./DarnIt";

interface DoorProps {
  prevStep: () => void;
}

export default function DoorToDoor({ prevStep }: DoorProps) {
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      maxWidth={1200}
      margin={"0 auto"}
      padding={isXsScreen ? "1rem" : "0 10rem"}
      pt={"2rem"}
      pb={"6rem"}
    >
      <DarnIt prevStep={prevStep} />
    </Box>
  );
}
