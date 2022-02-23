import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../action";
import { DropDownIconSVG } from "../../assets";
import { AddCustomerParamType, fieldNamesType } from "./customer.config";
import { StateType } from "../stateconfig";

const AddCustomer: React.FC = () => {
  const dispatch = useDispatch();
  const states = useSelector((state: any) => state.system.addressData.states);
  const cities = useSelector((state: any) => state.system.addressData.cities);
  const [params, setParams] = useState<AddCustomerParamType>({
    firstName: "",
    lastName: "",
    gender: "male",
    address: "",
    state: "56f861a8a38a3d28e63b6c6b",
    city: "Phoenix",
  });

  const submit = () => {
    const _state = states.find((item: StateType) => item._id === params.state);
    const _params = {
      ...params,
      id: 0,
      state: { name: _state.name, abbreviation: _state.abbreviation },
    };
    dispatch(addCustomer(_params));
  };

  const setInfor = (value: any, fieldName: fieldNamesType) => {
    setParams((_params: AddCustomerParamType) => ({
      ..._params,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mt-5">
      <form className="w-full max-w-xl">
        <div className="flex flex-wrap -mx-3 mb-5 mt-10">
          <div className="w-full md:w-full px-3 mb-5 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Type your First Name"
              value={params.firstName}
              onChange={(e) => setInfor(e.target.value, "firstName")}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-full px-3 mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type your Last Name"
              value={params.lastName}
              onChange={(e) => setInfor(e.target.value, "lastName")}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                value={params.gender}
                onChange={(e) => setInfor(e.target.value, "gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <DropDownIconSVG />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-adress"
              type="text"
              placeholder="Type your Address"
              value={params.address}
              onChange={(e) => setInfor(e.target.value, "address")}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-full px-3 mb-5 md:mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                value={params.city}
                onChange={(e) => setInfor(e.target.value, "city")}
              >
                {cities.map((item: string) => (
                  <option key={`city-${item}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <DropDownIconSVG />
            </div>
          </div>
          <div className="w-full md:w-full px-3 mb-5 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={params.state}
                onChange={(e) => setInfor(e.target.value, "state")}
              >
                {states.map((item: StateType) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddCustomer;
