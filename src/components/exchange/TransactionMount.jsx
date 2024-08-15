import { useState } from "react";

const TransactionMount = ({ confirmTransaction, setConfirmTransaction }) => {
  const [showCoins, setShowCoins] = useState(false);
  return (
    <div>
      <h1 className="text-[28px] font-bold mb-10">¿Que desear intercambiar?</h1>
      <p className="text-base text-vwBlue2">
        Saldo disponible: $900.000.00 CLP
      </p>

      <div className="mt-12">
        <label className="mb-4">Monto a intercambiar</label>

        <div className="mt-4 flex gap-4">
          <div
            className="p-[16px] border-[1px] border-vwGrey1 rounded-[6px] w-20 flex gap-1"
            value={1}
          >
            <img src="/logos/chile.svg" width={24} height={24} />
            <img src="/logos/chevron-down.svg" width={24} height={24} />
          </div>

          <div className="w-[387px] border-[1px] border-vwGrey1 rounded-[6px] flex items-center p-4">
            <img src="/logos/dollar.svg" width={24} height={24} />
            <input value="5.000.000" />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <label className="mb-4">Quiero recibir</label>

        <div className="mt-4 flex gap-4">
          <div>
            <div
              className="p-[16px] border-[1px] border-vwGrey1 rounded-[6px] w-20 flex gap-1"
              value={1}
              onClick={() => setShowCoins(!showCoins)}
            >
              <img src="/logos/bitcoin.svg" width={24} height={24} />
              <img
                src="/logos/chevron-down.svg"
                width={24}
                height={24}
                className={showCoins && "rotate-180"}
              />
            </div>
            <div
              className={`${
                !showCoins && "hidden"
              } py-3 px-7 border-[1px] border-vwGrey1 rounded-[6px] w-20 gap-4 absolute flex flex-col items-center mt-2`}
              value={1}
            >
              <img src="/logos/usdc.svg" width={24} height={24} />
              <img src="/logos/tether.svg" width={24} height={24} />
            </div>
          </div>

          <div className="w-[387px] border-[1px] border-vwGrey1 rounded-[6px] flex items-center p-4">
            <input value="0,080" />
          </div>
        </div>
      </div>

      <div className="flex mt-80 gap-5">
        <button
          className="flex items-center justify-center py-4 px-[71px] border-[1px] border-vwBlue1 text-vwBlue1 rounded-[6px]"
          onClick={() => setConfirmTransaction(false)}
        >
          Atras
        </button>
        <button
          className="flex items-center justify-center py-4 px-[71px] bg-vwBlueGradient text-vwWhite rounded-[6px]"
          onClick={() => setConfirmTransaction(!confirmTransaction)}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default TransactionMount;
