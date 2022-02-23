import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerList } from "../../../action";
import { CustomerType, IParamGetCustomer } from "../customer.config";
import CustomerCard from "./CustomerCard";
import { Pagination } from "../../components/Pagination";

const CardList: React.FC = () => {
  const [params, setParams] = useState<IParamGetCustomer>({
    page: 0,
    pageSize: 6,
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
    <div className="w-full flex flex-row flex-wrap bg-slate-100 mt-10">
      {customers.map((customer: CustomerType) => (
        <CustomerCard key={`customer-${customer.id}`} {...customer} />
      ))}
      <div className="w-full">
        <Pagination
          page={params.page}
          pageSize={params.pageSize}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default CardList;
