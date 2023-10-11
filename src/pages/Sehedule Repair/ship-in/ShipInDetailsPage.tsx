import CheckOut from "../ProcessToCheckOut/CheckOut";
import DoorToDoor from "../door-to-door/DoorToDoor";
import DoorToDoorPage from "../DoorToDoorPage";
import FixmePage from "../FixmePage";
import LastStep from "./Last step/LastStep";
import MoreDetailsPage from "./MoreDetailsPage";
import RepairPage from "./RepairPage";
import ScheduleReapir from "../ScheduleRepair";
import ServiceDetailsState from "./ServiceDetailsState";
import ShipInPage from "./ShipInPage";
import ShipinFields from "./ShipIn-Fields";
import { useState } from "react";

export default function ShipInDetailsPage() {


    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");

    const [serviceDetails, setServiceDetails] = useState<ServiceDetailsState>({
        services: [],
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
            apartment: "",
        },
    });


    const [serviceData, setServiceData] = useState<ServiceDetailsState[]>([]);

    const [selectedButtons, setSelectedButtons] = useState(
        serviceDetails.services
    );

    const [serviceFormData, setServiceFormData] = useState(
        serviceDetails.service_details
    );

    const [moreDetails, setMoreDetails] = useState(serviceDetails.more_details);
    const [shipInformation, setShipInformation] = useState(
        serviceDetails.shipin_details
    );

    const deleteFormData = (index: number) => {
        setServiceData((prevData) => prevData.filter((_, i) => i !== index));
        // const indexValue = serviceData.findIndex((data) => {
        //     console.log("data", data)
        //     return data === serviceDetails;
        // });
        // console.log("index", indexValue)
        // if (indexValue !== -1) {
        //     serviceData.splice(indexValue, 1);
        // }

    };


    let newArray = [...serviceData];



    const nextStep = () => {
        setServiceDetails({
            services: selectedButtons,
            service_details: serviceFormData,
            more_details: moreDetails,
            shipin_details: shipInformation,
        });
        serviceData.push(serviceDetails);
        setStep(step + 1);
        console.log("select", serviceDetails);

    };


    const prevStep = () => {
        if (step === 4 && selectedOption === "door-to-door") {
            setStep(2); // Go back to Step 2 if Option 2 was selected
        } else {
            setStep(step - 1);
        }
    };

    const selectOption = (option: string) => {
        setSelectedOption(option);
        nextStep();
    };
    const addItem = () => {
        if (selectedOption === "ship-in") {
            setServiceData([...serviceData, serviceDetails]);
            setSelectedButtons([]);
            setServiceFormData({
                color: "",
                howMany: "",
                visible_holes: "",
                brief: "",
                brand: "",
            });
            setMoreDetails({ previous_service: "", latest_service: "" });
            setStep(3);
        }
    };

    switch (step) {
        case 1:
            return <ScheduleReapir nextStep={nextStep} />;
        case 2:
            return (
                <FixmePage
                    nextStep={() => selectOption("ship-in")}
                    secondNextStep={() => selectOption("door-to-door")}
                />
            );
        case 3:
            return (
                <>
                    {selectedOption === "ship-in" && (
                        <ShipInPage
                            nextStep={nextStep}
                            prevStep={prevStep}
                            selectedButtons={selectedButtons}
                            setSelectedButtons={setSelectedButtons}
                        />
                    )}
                    {selectedOption === "door-to-door" && (
                        <DoorToDoorPage nextStep={nextStep} prevStep={prevStep} />
                    )}
                </>
            );

        case 4:
            return (
                <>
                    {selectedOption === "ship-in" && (
                        <ShipinFields
                            nextStep={nextStep}
                            prevStep={prevStep}
                            serviceFormData={serviceFormData}
                            setServiceFormData={setServiceFormData}
                        />
                    )}
                    {selectedOption === "door-to-door" && (
                        <DoorToDoor prevStep={prevStep} />
                    )}
                </>
            );
        case 5:
            return (
                <MoreDetailsPage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    moreDetails={moreDetails}
                    setMoreDetails={setMoreDetails}
                />
            );
        case 6:
            return (
                <RepairPage
                    nextStep={nextStep}
                    prevStep={prevStep}
                    addItem={addItem}
                    serviceDetails={serviceData}
                    onDelete={deleteFormData}
                />
            );
        case 7:
            return (
                <CheckOut
                    nextStep={nextStep}
                    prevStep={prevStep}
                    shipInformation={shipInformation}
                    setShipInformation={setShipInformation}
                />
            );
        case 8:
            return <LastStep />;
        default:
            return null;
    }
};

