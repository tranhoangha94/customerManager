import { combineReducers } from "redux";
import { addressReducer } from "./address.reducer";
import { customerReducer } from "./customer.reducer";

export const rootReducer = combineReducers({
  customerData: customerReducer,
  addressData: addressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
