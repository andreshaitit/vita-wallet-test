import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const ModalExchangeSuccess = () => {
  const { showModal, setShowModal } = useContext(AuthContext);
  return (
    <div
      className={`${
        !showModal && "hidden"
      } h-full w-full bg-[#2b2b2b90] absolute flex items-center justify-center`}
    >
      <div className="bg-white w-[561px] h-[566px] flex flex-col items-center py-20 px-32 rounded-[6px] relative">
        <img src="/logos/exchange-success.svg" width={308} height={304} />
        <h1 className="mt-8 text-[28px] text-vwBlue1">¡Intercambio exitoso!</h1>
        <h2 className="mt-4 text-base">Ya cuentas con los BTC en tu saldo.</h2>
        <button
          className="absolute right-6 top-6"
          onClick={() => setShowModal(!showModal)}
        >
          <img src="/logos/close.svg" />
        </button>
      </div>
    </div>
  );
};

export default ModalExchangeSuccess;
