import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomerInfor } from "../../action";
import { EditIconSVG, GridIconSVG, TagsIconSVG } from "../../assets";
import CustomerDetail from "./detailView/CustomerDetail";
import CustomerEdit from "./detailView/CustomerEdit";
import CustomerOrder from "./detailView/CustomerOrder";

type ViewType = "detail" | "edit" | "order";

const CustomerInfor: React.FC = () => {
  const [view, setView] = useState<ViewType>("detail");
  const { id } = useParams();
  const dispatch = useDispatch();
  const customerInfor = useSelector(
    (state: any) => state.system.customerData.infor
  );
  useEffect(() => {
    dispatch(getCustomerInfor(Number(id) || 0));
    console.log(customerInfor);
  }, []);
  return (
    <div className="w-full bg-white mt-10">
      <h1>Customer Infor</h1>
      <div className="flex mt-5">
        <button
          className={`border-0 text-lg mr-10 font-medium hover:text-black hover:fill-black flex items-center ${
            view === "detail"
              ? "text-black fill-black"
              : "text-gray-400 fill-gray-400"
          }`}
          onClick={() => setView("detail")}
        >
          <i>
            {" "}
            <GridIconSVG className="w-4 h-4 mr-1" />
          </i>
          Customer Detail
        </button>
        <button
          className="border-0 text-lg mr-10 font-medium text-gray-400 fill-gray-400 hover:fill-black hover:text-black flex items-center"
          onClick={() => setView("order")}
        >
          <i>
            <TagsIconSVG className="w-5 h-5 mr-1" />
          </i>
          Orders
        </button>
        <button
          className={`border-0 text-lg mr-10 font-medium hover:text-black hover:fill-black flex items-center ${
            view === "edit"
              ? "text-black fill-black"
              : "text-gray-400 fill-gray-400"
          }`}
          onClick={() => setView("edit")}
        >
          <i>
            {" "}
            <EditIconSVG className="w-4 h-4 mr-1" />
          </i>
          Customer Edit
        </button>
      </div>
      {view === "detail" && <CustomerDetail {...customerInfor} />}
      {view === "edit" && <CustomerEdit {...customerInfor} />}
      {view === "order" && <CustomerOrder {...customerInfor} />}
    </div>
  );
};

export default CustomerInfor;
