import { Female, Male } from "../../../assets";
import { CustomerType } from "../customer.config";

const CustomerCard: React.FC<CustomerType> = (props: CustomerType) => {
  const { id, firstName, lastName, state, city, gender } = props;
  return (
    <div className="w-1/2 center flex justify-center bg-slate-100">
      <div className="w-4/5 flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md flex-wrap bg-white">
        <img
          src={gender === "male" ? Male : Female}
          alt="image"
          className="h-14 w-14 rounded-full"
        />
        <div>
          <h3>{`${firstName} ${lastName}`}</h3>
          <p className="mt-1 text-gray-400 text-sm cursor-pointer">
            {state.name},
          </p>
          <p className="mt-1 text-gray-400 text-sm cursor-pointer">{city}</p>
          <a href={`/customer/${id}`} className="text-blue-400">
            View Order
          </a>
        </div>
      </div>
    </div>
  );
};
export default CustomerCard;
