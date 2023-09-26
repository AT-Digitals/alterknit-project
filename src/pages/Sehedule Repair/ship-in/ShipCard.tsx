import { Stack, styled } from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import { Link } from "react-router-dom";

const StyledButtom = styled(CustomButton)({
    fontSize: "20px",
    borderRadius: "8px",
    padding: "10px 20px",
    textTransform: "none",
    boxShadow: "none",
    width: "30px",
    margin: "0px  auto 0px",
    ":hover": {
        color: Colors.WHITE,
    },
});

interface linkprops {
    onClick?: (event: any) => void;
    link: string;
}
export default function ShipCard({ onClick, link }: linkprops) {
    return (
        <Stack direction="row" spacing={10} margin="0 auto" alignItems="center" justifyContent="center" paddingY={8}>
            <Link to={link}>
                <StyledButtom bgColor={"#f8f1eb"} color={Colors.LINK} sx={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    Back
                </StyledButtom>
            </Link>
            <StyledButtom bgColor={"#f8f1eb"} color={Colors.BLACK} onClick={onClick} >
                Next
            </StyledButtom>
        </Stack>
    )
}
