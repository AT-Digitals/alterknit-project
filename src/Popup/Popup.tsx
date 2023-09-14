import { Box, DialogContent, DialogTitle } from "@mui/material";

import CustomButton from "../CommonComponent/CustomButton";
import Dialog from "@mui/material/Dialog";
import React from "react";
import alter from "./alterknit.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function CustomDialog({ isOpen, onClose, message }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box gap={10} style={{ padding: "16px", textAlign: "center" }}>
        <DialogTitle>
          <img width={100} src={alter} alt="alter" />
        </DialogTitle>
        <DialogContent> {message} </DialogContent>
        <CustomButton onClick={onClose}>Close</CustomButton>
      </Box>
    </Dialog>
  );
}
