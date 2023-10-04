import { Divider, Stack, Typography } from "@mui/material";

import BehindSection from "./BehindSection";
import BlackBoxSection from "./BlackBoxSection";
import ClothSection from "./ClothSection";
import Colors from "../../CommonComponent/Colors";
import CustomSection from "./CustomSection";
import Feature from "./Feature";
import Marquee from "react-fast-marquee";
import ServiceSection from "./ServiceSection";
import SubscribePage from "./SubscribePage";
import WelcomeSection from "./WelcomeSection";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack>
      <WelcomeSection />
      <Stack direction="column" spacing={2} width="100%">
        <Divider sx={{ borderColor: Colors.BLACK }} />
        <Marquee>
          <Typography fontSize="20px" color={Colors.BLACK} fontWeight={600}>
            Invisible Repair - Reweaving - Reknitting - Knit Alteration -
            Restyling - Custom Knit - Moth Hole Repair - Cleaning - Depilling -
            Invisible Repair - Reweaving - Reknitting - Knit Alteration -
            Restyling - Custom Knit - Moth Hole Repair - Cleaning - Depilling -{" "}
          </Typography>
        </Marquee>
        <Divider sx={{ borderColor: Colors.BLACK }} />
      </Stack>
      <ClothSection />
      <ServiceSection />
      <CustomSection />
      <BlackBoxSection />
      <BehindSection />
      <Feature />
      <SubscribePage />
    </Stack>
  );
}
