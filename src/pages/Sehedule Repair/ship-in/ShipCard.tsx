import { Stack, styled } from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StyledButtom = styled(CustomButton)({
  fontSize: "22px",
  borderRadius: "8px",
  padding: "13px 20px",
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack
      direction="row"
      spacing={10}
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
      paddingY={2}
    >
      <Link to={link}>
        <StyledButtom bgColor={"#f8f1eb"} color={Colors.LINK}>
          Back
        </StyledButtom>
      </Link>
      <StyledButtom bgColor={"#f8f1eb"} color={Colors.BLACK} onClick={onClick}>
        Next
      </StyledButtom>
    </Stack>
  );
}
