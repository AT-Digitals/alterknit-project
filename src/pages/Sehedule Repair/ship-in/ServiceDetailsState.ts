import moreDetails from "./moreDetails";
import serviceDetails from "./serviceDetails";

interface ServiceDetailsState {
  services: string[];
  service_details: serviceDetails;
  more_details: moreDetails;
  shipin_details: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
    phone_number: string;
    email: string;
    sameAddress: string;
    apartment: string;
  };
}

export default ServiceDetailsState;
