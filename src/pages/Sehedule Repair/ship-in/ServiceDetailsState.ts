interface ServiceDetailsState {
  services: {
    name: string[];
  };
  service_details: {
    color: string;
    visible_holes: string;
    brand: string;
    howMany: string;
    brief: string;
  };
  more_details: {
    previous_service: string;
    latest_service: string;
  };
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
  };
}

export default ServiceDetailsState;
