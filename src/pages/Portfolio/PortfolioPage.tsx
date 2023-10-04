import PorfolioHeader from "./PortfolioHeader";
import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack>
      <PorfolioHeader />
      <SubscribePage />
    </Stack>
  );
}
