import {
  ADD_CUSTOMER,
  GET_ALL_CUSTOMERS,
  GET_CUSTOMER_INFOR,
  GET_CUSTOMER_LIST,
} from "../action";
import { default as CUSTOMER } from "../data/customers.json";
import {
  CustomerType,
  IParamGetCustomer,
} from "../views/customerView/customer.config";

const initState = {
  customers: CUSTOMER,
  showCustomers: [],
  total: CUSTOMER.length,
  infor: null,
};

export const getCustomers = (params: IParamGetCustomer) => {
  const { page, pageSize, search } = params;
  const _customers = CUSTOMER.filter(
    (element: any) =>
      element.firstName.includes(search) || element.lastName.includes(search)
  );
  let result = [];
  let startIndex: number = page * pageSize;
  let endIndex: number = page * pageSize + pageSize - 1;
  endIndex =
    endIndex > _customers.length - 1 ? _customers.length - 1 : endIndex;
  for (let i = startIndex; i <= endIndex; i++) {
    result.push(_customers[i]);
  }
  return result;
};

export const customerReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS:
      return initState;
    case GET_CUSTOMER_LIST:
      return { ...state, showCustomers: getCustomers(action.params) };
    case ADD_CUSTOMER:
      const _customers = state.customers;
      _customers.push({ ...action.newCustomer, id: state.customers.length });
      return { ...state, customers: _customers };
    case GET_CUSTOMER_INFOR:
      const _customer = state.customers.find(
        (customer: CustomerType) => customer.id === action.params.id
      );
      return { ...state, infor: _customer };
    default:
      break;
  }
  return initState;
};
