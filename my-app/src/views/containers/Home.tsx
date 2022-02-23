import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerList from "../customerView/CustomerList";
import Header from "./Header";
import Settings from "../settings/Settings";
import CustomerInfor from "../customerView/CustomerInfor";

const Home: React.FC = () => (
  <div className="container-fluid w-screen h-full lg:px-64 md:px-24 pt-0">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="customer/:id" element={<CustomerInfor />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default Home;
