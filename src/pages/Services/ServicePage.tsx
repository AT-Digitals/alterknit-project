import BoxCreation from "./BoxCreation";
import CardPage from "./CardPage";
import FaqPage from "./FaqPage";
import HelpPage from "./HelpPage";
import ServiceHeader from "./ServiceHeader";
import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import { useEffect } from "react";

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack>
      <ServiceHeader />
      <HelpPage />
      <CardPage />
      <BoxCreation />
      <FaqPage />
      <SubscribePage />
    </Stack>
  );
}
