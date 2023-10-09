import { Box } from "@mui/material";
import DarnIt from "./DarnIt";

interface DoorProps {
  prevStep: () => void;
}

export default function DoorToDoor({ prevStep }: DoorProps) {
  return (
    <Box
      maxWidth={1200}
      margin={"0 auto"}
      padding={"0 10rem"}
      pt={"2rem"}
      pb={"6rem"}
    >
      <DarnIt prevStep={prevStep} />
    </Box>
  );
}
