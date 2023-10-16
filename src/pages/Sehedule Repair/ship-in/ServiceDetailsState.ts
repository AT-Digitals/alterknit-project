import ShipInDetails from "./ShipInDetails";
import moreDetails from "./moreDetails";
import serviceDetails from "./serviceDetails";

interface ServiceDetailsState {
  services: string[];
  service_details: serviceDetails;
  more_details: moreDetails;
}

export default ServiceDetailsState;
