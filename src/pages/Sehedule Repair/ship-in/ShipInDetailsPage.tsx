import { useCallback, useEffect, useState } from "react";

import CheckOut from "../ProcessToCheckOut/CheckOut";
import DoorToDoor from "../door-to-door/DoorToDoor";
import DoorToDoorPage from "../DoorToDoorPage";
import FixmePage from "../FixmePage";
import LastStep from "./Last step/LastStep";
import MoreDetailsPage from "./MoreDetailsPage";
import RepairPage from "./RepairPage";
import ScheduleReapir from "../ScheduleRepair";
import ServiceDetailsState from "./ServiceDetailsState";
import ShipInDetails from "./ShipInDetails";
import ShipInPage from "./ShipInPage";
import ShipinFields from "./ShipIn-Fields";
import { UseunSavedChangesListener } from "./useUnsavesListener";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function ShipInDetailsPage() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [ask, setAsk] = useState(false);
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
  });

  const [serviceData, setServiceData] = useState<ServiceDetailsState[]>([]);

  const [selectedButtons, setSelectedButtons] = useState(
    serviceDetails.services
  );

  const [serviceFormData, setServiceFormData] = useState(
    serviceDetails.service_details
  );

  const [moreDetails, setMoreDetails] = useState(serviceDetails.more_details);

  const [shipDetails, setShipDetails] = useState<ShipInDetails>({
    ShipInformation: {
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
    BillInformation: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipcode: "",
      apartment: "",
    },
  });

  const [status, setStatus] = useState(false);

  const handleObject1Change = (
    field: keyof ShipInDetails["ShipInformation"],
    value: string | number
  ) => {
    setShipDetails((prevState) => ({
      ...prevState,
      ShipInformation: {
        ...prevState.ShipInformation,
        [field]: value,
      },
    }));
  };
  const handleObject2Change = (
    field: keyof ShipInDetails["BillInformation"],
    value: string | number
  ) => {
    setShipDetails((prevState) => ({
      ...prevState,
      BillInformation: {
        ...prevState.BillInformation,
        [field]: value,
      },
    }));
  };

  const data = {
    services: selectedButtons,
    service_details: serviceFormData,
    more_details: moreDetails,
  };

  const updateLastElement = () => {
    setServiceData((prevArray) => {
      if (prevArray.length > 0) {
        const updatedArray = [...prevArray];
        const lastElement = updatedArray[updatedArray.length - 1];
        lastElement.services = selectedButtons;
        lastElement.service_details = serviceFormData;
        lastElement.more_details = moreDetails;
        return updatedArray;
      } else {
        return prevArray;
      }
    });
  };

  const DataItem = serviceData.filter((obj, index) => {
    return index === serviceData.findIndex((o) => obj.services === o.services);
  });

  const nextStep = () => {
    console.log("1st step");
    if (selectedOption === "ship-in" || selectedOption === "door-to-door") {
      setAsk(true);
    } else {
      setStep(step + 1);
    }

    if (!status) {
      if (
        data.services.length > 0 &&
        data.service_details.color !== "" &&
        data.service_details.brand !== "" &&
        data.service_details.brief !== "" &&
        data.service_details.howMany !== "" &&
        data.service_details.visible_holes !== "" &&
        data.more_details.latest_service !== "" &&
        data.more_details.previous_service !== ""
      ) {
        serviceData.push(data);
        setStep(step + 1);
        console.log("clicked next click", step);
      } else if (serviceData) {
        const uniqueData = serviceData.filter(
          (obj: { services: string[]; service_details: {} }, index: number) => {
            return (
              index ===
              serviceData.findIndex((o) => obj.services === o.services)
            );
          }
        );
        setServiceData(uniqueData);
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    } else {
      updateLastElement();
      setStep(step + 1);
    }
    if (step === 6) {
      setServiceData(DataItem);
      setStep(step + 1);
    } else if (step === 7) {
      setServiceData(DataItem);
      setStep(step + 1);
    }
  };
  console.log("clickd44", step);
  console.log("before", serviceData);

  const prevStep = () => {
    if (step === 4 && selectedOption === "door-to-door") {
      setStep(2);
    } else if (step === 6) {
      setStatus(true);
      setStep(step - 1);
    } else {
      setStep(step - 1);
    }
  };

  const itemEditClick = () => {
    setStep(6);
  };

  const DetailsEditClick = () => {
    setStep(7);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    if (option === "ship-in" || option === "door-to-door") {
      setAsk(true);
      console.log("its clicked now");
    }

    nextStep();
  };
  useEffect(() => {
    console.log("ask state has been updated:", ask);
  }, [ask]);

  const addItem = () => {
    if (selectedOption === "ship-in") {
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
      setStatus(false);
    }
  };

  const deleteFormData = useCallback(
    (value: ServiceDetailsState) => {
      const objWithIdIndex = serviceData.findIndex((obj) => obj === value);
      if (objWithIdIndex > -1) {
        serviceData.splice(objWithIdIndex, 1);
      }
      setServiceData(serviceData);
      //return serviceDetails;
    },
    [serviceData]
  );
  const navigate = useNavigate();

  const onCancelChanges = useCallback(
    (e?: any) => {
      if (e !== "/schedule-repair") {
        if (ask === true) {
          const userConfirmed = window.confirm(
            "Are you sure you want to leave this page? "
          );

          console.log("navigation url:", ask, e);
          if (userConfirmed) {
            navigate(e);
          }
        } else {
          navigate(e);
        }
      }
      console.log(e);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ask]
  );

  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (serviceData.length > 0) {
      let result = await fetch(
        "https://alterknit-backend.onrender.com/service-data",
        {
          method: "post",
          body: JSON.stringify({
            service_details: serviceData,
            shipin_details: shipDetails,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        emailjs
          .send(
            "service_tby7lte",
            "template_75cwzjr",
            shipDetails.ShipInformation,
            "-LdTea8wtr-aVA1x_"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (err) {
              console.log("FAILED...", err);
            }
          );
      });

      console.log("result", result);
      setAsk(false);
    }
  };
  // this listener is used for when user comes inside schedule repair  cant navigate ask popup
  UseunSavedChangesListener(ask, onCancelChanges);

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
          setServiceDetails={setServiceData}
          onDelete={deleteFormData}
        />
      );
    case 7:
      return (
        <CheckOut
          nextStep={nextStep}
          prevStep={prevStep}
          shipDetails={shipDetails}
          setShipDetails={handleObject1Change}
          setBillDetails={handleObject2Change}
        />
      );
    case 8:
      return (
        <LastStep
          serviceDetails={serviceData}
          shipInDetails={shipDetails}
          itemEditClick={itemEditClick}
          detailsEditClick={DetailsEditClick}
          onSubmit={onSubmit}
        />
      );
    default:
      return null;
  }
}
