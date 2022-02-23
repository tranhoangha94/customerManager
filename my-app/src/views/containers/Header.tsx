import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { headerStyle } from "./Header.style";

const Header: React.FC = () => {
  return (
    <div className="w-full p-5 px-10" style={headerStyle}>
      <nav className="bg-white border-gray-200 lg:px-10 sm:px-4 py-2.5 rounded-lg dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={""} className="flex">
            <img
              src={Logo}
              className="rounded-full w-12 h-12 object-cover p-1"
              style={headerStyle}
              alt=""
            />{" "}
            <span className="ml-2 self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Customer Manager
            </span>
          </Link>
          {/* <MenuButtonSVG /> */}
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-700 block py-2 pr-4 pl-3 md:hover:text-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Customer
                </Link>
              </li>
              <li>
                <Link
                  to={"/settings"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent disabled"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
