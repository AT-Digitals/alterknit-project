import { useState } from "react";
import ShipInPage from "./ShipInPage";
import ShipinFields from "./ShipIn-Fields";
import MoreDetailsPage from "./MoreDetailsPage";
import ScheduleReapir from "../ScheduleRepair";
import FixmePage from "../FixmePage";

export default function ShipInDetailsPage() {
    //   const [serviceDetails, setServiceDetails] = useState({
    //     step: 1,
    //     serviceType: "",
    //     color: "",
    //     visibleholes: "",
    //     brand: "",
    //     howMany: "",
    //     brief: "",
    //   });

    //   const prevStep = () => {
    //     const { step } = serviceDetails;
    //     setServiceDetails({
    //       step: step - 1,
    //       serviceType: "",
    //       color: "",
    //       visibleholes: "",
    //       brand: "",
    //       howMany: "",
    //       brief: "",
    //     });
    //   };

    //   const nextStep = () => {
    //     const { step } = serviceDetails;
    //     setServiceDetails({ step: step + 1,  
    //         serviceType: "",
    //         color: "",
    //         visibleholes: "",
    //         brand: "",
    //         howMany: "",
    //         brief: "", });
    //   }

    //   const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setServiceDetails({ ...serviceDetails, [name]: value });
    //   }

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <ScheduleReapir nextStep={nextStep} />
            )
        case 2:
            return (
                <FixmePage nextStep={nextStep} />
            )
        case 3:
            return (
                <ShipInPage nextStep={nextStep} prevStep={prevStep} />
            )
        case 4:
            return (
                <ShipinFields nextStep={nextStep} prevStep={prevStep} />
            )
        case 5:
            return (
                <MoreDetailsPage />
            )
        default:
            return null;
    }
}
