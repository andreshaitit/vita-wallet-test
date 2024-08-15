import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ModalExchangeSuccess from "../components/ModalExchangeSuccess";

const LayoutPrivate = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5 bg-vwBlue1 text-white h-full">
        <Sidebar />
      </div>
      <main className="w-4/5 bg-white pl-[53px] pt-[76px] pr-[120px] overflow-y-auto">
        <Outlet />
      </main>
      <ModalExchangeSuccess />
    </div>
  );
};

export default LayoutPrivate;
