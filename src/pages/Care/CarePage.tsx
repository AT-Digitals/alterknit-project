import Care from "./Care";
import { Stack } from "@mui/material";
import SubscribePage from "../Home/SubscribePage";
import { useEffect } from "react";

export default function CarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack>
      <Care />
      <SubscribePage />
    </Stack>
  );
}
