import { Box, DialogContent, DialogTitle, styled } from "@mui/material";

import CustomButton from "../CommonComponent/CustomButton";
import Dialog from "@mui/material/Dialog";
import React from "react";
import alter from "../assets/alterknit.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const StyledButton = styled(CustomButton)({
  borderRadius: "5px",
  fontSize: "22px",
  fontWeight: 600,
  // padding: "16px 30px",
  textTransform: "none",
  whiteSpace: "nowrap",
  fontFamily: `"ProximaNovaSemibold", sans-serif !important`,
  backgroundColor: "black",
});

export default function CustomDialog({ isOpen, onClose, message }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box gap={10} style={{ padding: "16px", textAlign: "center" }}>
        <DialogTitle>
          <img width={100} src={alter} alt="alter" />
        </DialogTitle>
        <DialogContent> {message} </DialogContent>
        <StyledButton bgColor="black" onClick={onClose}>
          Close
        </StyledButton>
      </Box>
    </Dialog>
  );
}
