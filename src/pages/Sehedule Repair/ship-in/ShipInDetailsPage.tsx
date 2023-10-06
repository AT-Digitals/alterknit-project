import { useState } from "react";
import ShipInPage from "./ShipInPage";
import ShipinFields from "./ShipIn-Fields";
import MoreDetailsPage from "./MoreDetailsPage";
import ScheduleReapir from "../ScheduleRepair";
import FixmePage from "../FixmePage";
import DoorToDoorPage from "../DoorToDoorPage";
import DoorToDoor from "../door-to-door/DoorToDoor";
import RepairPage from "./RepairPage";
import CheckOut from "../ProcessToCheckOut/CheckOut";
import LastStep from "./Last step/LastStep";
import ServiceDetailsState from "./ServiceDetailsState";

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
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);

    const [serviceDetails, setServiceDetails] = useState<ServiceDetailsState>({
        services: {
            name: [],
        },
        service_details: {
            color: "",
            visible_holes: "",
            brand: "",
            howMany: "",
            brief: "",
        },
        more_details: {
            previous_service: "",
            latest_service: "",
        },
        shipin_details: {
            firstName: "",
            lastName: "",
            streetAddress: "",
            city: "",
            state: "",
            zipcode: "",
            phone_number: "",
            email: "",
            sameAddress: "",
        },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setServiceDetails((prevState) => ({
            ...prevState,
            services: {
                ...prevState.services,
                [name]: value,
            },
            service_details: {
                ...prevState.service_details,
                [name]: value,
            },
            more_details: {
                ...prevState.more_details,
                [name]: value,
            },
            shipin_details: {
                ...prevState.shipin_details,
                [name]: value,
            },
        }));
    };

    const nextStep = (option: any) => {
        setSelectedOption(option);
        setSelectedOption1(option);
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step === 4) {
            setSelectedOption(null); // Reset selectedOption when going back
        }
        setStep(step - 1);
    };

    console.log("select", serviceDetails);

    switch (step) {
        case 1:
            return <ScheduleReapir nextStep={nextStep} />;
        case 2:
            return (
                <FixmePage
                    nextStep={() => nextStep("ship-in")}
                    secondNextStep={() => nextStep("door-to-door")}
                />
            );
        case 3:
            return (
                <>
                    {selectedOption === "ship-in" && step === 3 && (
                        <ShipInPage
                            nextStep={nextStep}
                            prevStep={prevStep}
                            serviceDetails={serviceDetails}
                            setServiceDetails={setServiceDetails}
                        />
                    )}
                    {selectedOption === "door-to-door" && step === 3 && (
                        <DoorToDoorPage nextStep={nextStep} prevStep={prevStep} />
                    )}
                </>
            );

        case 4:
            return (
                <>
                    {/* {selectedOption === "ship-in" && step === 4 && */}
                    <ShipinFields nextStep={nextStep} prevStep={prevStep} />

                    {/* {selectedOption === "door-to-door" && selectedOption1 === 'new yorkers' && step === 4 && */}
                    {/* <DoorToDoor /> */}
                </>
            );
        case 5:
            return <MoreDetailsPage nextStep={nextStep} prevStep={prevStep} />;
        case 6:
            return <RepairPage nextStep={nextStep} prevStep={prevStep} />;
        case 7:
            return <CheckOut nextStep={nextStep} prevStep={prevStep} />;
        case 8:
            return <LastStep />;
        default:
            return null;
    }
}
