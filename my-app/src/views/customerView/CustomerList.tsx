import { useState } from "react";
import { GridIconSVG, ListIconSVG, PlusIconSVG } from "../../assets";
import AddCustomer from "./AddCustomer";
import CardList from "./cardView/CardList";
import CustomerTable from "./tableView/CustomerTable";

type ViewType = "list" | "card" | "add";

const CustomerList: React.FC = () => {
  const [view, setView] = useState<ViewType>("card");
  return (
    <div className="w-full bg-white mt-10">
      <h1>Customer List</h1>
      <div className="flex mt-5">
        <button
          className={`border-0 text-lg mr-10 font-medium hover:text-black hover:fill-black flex items-center ${
            view === "card"
              ? "text-black fill-black"
              : "text-gray-400 fill-gray-400"
          }`}
          onClick={() => setView("card")}
        >
          <i>
            {" "}
            <GridIconSVG className="w-4 h-4 mr-1" />
          </i>
          Card View
        </button>
        <button
          className={`border-0 text-lg mr-10 font-medium hover:text-black hover:fill-black flex items-center ${
            view === "list"
              ? "text-black fill-black"
              : "text-gray-400 fill-gray-400"
          }`}
          onClick={() => setView("list")}
        >
          <i>
            {" "}
            <ListIconSVG className="w-4 h-4 mr-1" />
          </i>
          List View
        </button>
        <button
          className="border-0 text-lg mr-10 font-medium text-gray-400 fill-gray-400 hover:fill-black hover:text-black flex items-center"
          onClick={() => setView("add")}
        >
          <i>
            {" "}
            <PlusIconSVG className="w-4 h-4 mr-1" />
          </i>
          New Customer
        </button>
      </div>
      {view === "list" && <CustomerTable />}
      {view === "card" && <CardList />}
      {view === "add" && <AddCustomer />}
    </div>
  );
};

export default CustomerList;
