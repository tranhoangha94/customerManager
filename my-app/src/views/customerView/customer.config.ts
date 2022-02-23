export const customerHeader = [
  "",
  "First Name",
  "Last Name",
  "Address",
  "City",
  "State",
  "Order total",
  "",
];

type OrderType = {
  productName: string;
  itemCost: number;
};

type StateType = {
  abbreviation: String;
  name: String;
};

export type CustomerType = {
  id: number;
  firstName: String;
  lastName: String;
  gender: "male" | "female";
  address: String;
  city: String;
  state: StateType;
  orders?: OrderType[];
  latitude?: Number;
  longitude?: Number;
};

export type IParamGetCustomer = {
  pageSize: number;
  page: number;
  search: String;
};

export type AddCustomerParamType = {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  address: string;
  state: string;
  city: string;
};

export type fieldNamesType =
  | "firstName"
  | "lastName"
  | "gender"
  | "address"
  | "state"
  | "city";

export const sumOfArray = (arr: Array<number>) => {
  return arr.reduce((total: number, current: number) => total + current, 0);
};

export const totalOrder = (orders: Array<OrderType>) => {
  let totalCosts = orders.map((order) => order.itemCost);
  return sumOfArray(totalCosts).toFixed(2);
};
