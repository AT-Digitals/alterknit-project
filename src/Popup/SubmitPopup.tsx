import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import CustomButton from "../CommonComponent/CustomButton";
import alter from "../assets/alterknit.png";

interface SubmitPopupProps {
    showSubmitConfirmation: any;
    handleSubmitCancelled: any;
    handleSubmitConfirmed: any;
}
export default function SubmitPopup({
    handleSubmitConfirmed,
    showSubmitConfirmation,
    handleSubmitCancelled,
}: SubmitPopupProps) {
    return (
        <Dialog open={showSubmitConfirmation} onClose={handleSubmitCancelled}>
            <Box style={{ padding: "16px", textAlign: "center" }}>
                <DialogTitle>
                    <img width={100} src={alter} alt="alter" />
                </DialogTitle>
                {/* <DialogTitle>Confirm Submit</DialogTitle> */}
                <DialogContent>
                    Are you sure you want to submit this order?
                </DialogContent>
                <DialogActions>
                    <CustomButton bgColor="black" onClick={handleSubmitCancelled}>
                        Cancel
                    </CustomButton>
                    <CustomButton bgColor="black" onClick={handleSubmitConfirmed}>
                        Submit
                    </CustomButton>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
