import { ADD_CUSTOMER, GET_CUSTOMER_INFOR } from ".";
import {
  CustomerType,
  IParamGetCustomer,
} from "../views/customerView/customer.config";
import { GET_ALL_CUSTOMERS, GET_CUSTOMER_LIST } from "./constants";

export const getAllCustomers = () => {
  return {
    type: GET_ALL_CUSTOMERS,
  };
};

export const getCustomerList = (params: IParamGetCustomer) => {
  return {
    type: GET_CUSTOMER_LIST,
    params,
  };
};

export const addCustomer = (newCustomer: CustomerType) => {
  return {
    type: ADD_CUSTOMER,
    newCustomer,
  };
};

export const getCustomerInfor = (id: number) => {
  return {
    type: GET_CUSTOMER_INFOR,
    params: {
      id,
    },
  };
};
