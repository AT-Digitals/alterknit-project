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
  showDeleteConfirmation: any;
  handleDeleteCancelled: any;
  handleDeleteConfirmed: any;
}
export default function DeletePopup({
  handleDeleteConfirmed,
  showDeleteConfirmation,
  handleDeleteCancelled,
}: DeletePopupProps) {
  return (
    <Dialog open={showDeleteConfirmation} onClose={handleDeleteCancelled}>
      <Box style={{ padding: "16px", textAlign: "center" }}>
        <DialogTitle>
          <img width={100} src={alter} alt="alter" />
        </DialogTitle>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <CustomButton bgColor="black" onClick={handleDeleteCancelled}>
            Cancel
          </CustomButton>
          <CustomButton bgColor="black" onClick={handleDeleteConfirmed}>
            Delete
          </CustomButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
