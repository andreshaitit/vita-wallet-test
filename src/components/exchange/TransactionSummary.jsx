// eslint-disable-next-line react/prop-types
const TransactionSummary = ({ handleExchange, setConfirmTransaction }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img
          src="/logos/back.svg"
          width={48}
          height={48}
          onClick={() => setConfirmTransaction(false)}
          className="cursor-pointer"
        />
        <h1 className="font-bold text-[28px]">Resumen de transacción</h1>
      </div>

      <div className="mt-24 ml-20 bg-[#f9f9f9] w-[488px] p-6 rounded-[6px]">
        <div className="flex justify-between  items-center mt-2">
          <p className="text-sm">Monto a intercambiar</p>
          <p className="text-base font-bold">$ 5.000.000,00 CLP</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm">Tasa de cambio</p>
          <p className="text-base font-bold">1 BTC = 62.512.668,43 CLP</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm">Total a recibir</p>
          <p className="text-base font-bold text-vwBlue1">0,080 BTC</p>
        </div>
      </div>

      <div className="flex ml-20 mt-[361px] gap-32">
        <button
          className="flex items-center justify-center py-4 px-[71px] border-[1px] border-vwBlue1 text-vwBlue1 rounded-[6px]"
          onClick={() => setConfirmTransaction(false)}
        >
          Atras
        </button>
        <button
          className="flex items-center justify-center py-4 px-[71px] bg-vwBlueGradient text-vwWhite rounded-[6px]"
          onClick={handleExchange}
        >
          Intercambiar
        </button>
      </div>
    </div>
  );
};

export default TransactionSummary;
