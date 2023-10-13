export default interface ShipInDetails {
  ShipInformation: {
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
  BillInformation: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    city: string;
    state: string;
    zipcode: string;
    apartment: string;
  };
}
