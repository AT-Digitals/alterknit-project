import { Stack, styled, useMediaQuery } from "@mui/material";

import Colors from "../../../CommonComponent/Colors";
import CustomButton from "../../../CommonComponent/CustomButton";
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
  onChange?: () => void;
}
export default function ShipCard({ onClick, onChange }: linkprops) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      direction="row"
      spacing={isXsScreen ? 4 : 10}
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
      paddingY={2}
    >
      <StyledButtom bgColor={"#f8f1eb"} color={Colors.LINK} onClick={onChange}>
        Back
      </StyledButtom>

      <StyledButtom bgColor={"#f8f1eb"} color={Colors.BLACK} onClick={onClick}>
        Next
      </StyledButtom>
    </Stack>
  );
}
