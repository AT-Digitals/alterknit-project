import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import CustomButton from "../CommonComponent/CustomButton";
import alter from "../assets/alterknit.png";

interface DeletePopupProps {
  handleYesConfirmed: any;
  showcancelConfirmation: any;
  handleCancelled: any;
}
export default function NavigationPopup({
  handleYesConfirmed,
  showcancelConfirmation,
  handleCancelled,
}: DeletePopupProps) {
  return (
    <Dialog open={showcancelConfirmation} onClose={handleCancelled}>
      <Box style={{ padding: "16px", textAlign: "center" }}>
        <DialogTitle>
          <img width={100} src={alter} alt="alter" />
        </DialogTitle>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <CustomButton bgColor="black" onClick={handleCancelled}>
            Cancel
          </CustomButton>
          <CustomButton bgColor="black" onClick={handleYesConfirmed}>
            Yes
          </CustomButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
