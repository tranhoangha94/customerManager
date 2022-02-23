import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerList } from "../../../action";
import { Female, Male } from "../../../assets";
import { Pagination } from "../../components/Pagination";

import {
  customerHeader,
  IParamGetCustomer,
  totalOrder,
} from "../customer.config";

const CustomerTable: React.FC = () => {
  const [params, setParams] = useState<IParamGetCustomer>({
    page: 0,
    pageSize: 5,
    search: "",
  });
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: any) => state.system.customerData.showCustomers
  );
  const setPage = (pageNumb: number) => {
    setParams((params) => ({ ...params, page: pageNumb }));
  };

  useEffect(() => {
    dispatch(getCustomerList(params));
  }, []);

  useEffect(() => {
    dispatch(getCustomerList(params));
  }, [params]);

  return (
    <div className="w-full mt-10">
      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {customerHeader.map((item) => (
              <th
                key={item}
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {customers.map((customer: any) => (
            <tr
              key={`customer- ${customer.id}`}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  src={customer.gender === "male" ? Male : Female}
                  className="w-10 h-10"
                  alt=""
                />
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.firstName}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.lastName}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.address}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.city}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.state.name}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.orders && totalOrder(customer.orders)}
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a href={`/customer${customer.id}`}>View Orders</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={params.page}
        pageSize={params.pageSize}
        setPage={setPage}
      />
    </div>
  );
};
export default CustomerTable;
