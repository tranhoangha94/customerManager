import { CUSTOMER, STATES } from "../data";

const unique = (arr: Array<any>) => {
  return Array.from(new Set(arr)); //
};

const getCitys = () => {
  return CUSTOMER.map((item) => item.city);
};

const initState = {
  states: STATES,
  cities: unique(getCitys()),
};

export const addressReducer = (state: any = initState, action: any) => {
  return state;
};
