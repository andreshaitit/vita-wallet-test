const MoneyCards = ({ balances }) => {
  return (
    <div className="mt-[75px]">
      <h1 className="text-2xl font-normal mb-6">Mis Saldos</h1>

      <div className="flex gap-5">
        <div className="bg-vwGrey2 w-1/3 p-6 rounded-[6px]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-base leading-[21px]">Peso chileno</h4>

            <img src="/logos/chile.svg" width={24} height={24} />
          </div>
          <h4 className="font-bold text-2xl leading-8">$ 900.000</h4>
        </div>

        <div className="bg-vwGrey2 w-1/3 p-6 rounded-[6px]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-base leading-[21px]">Bitcoin</h4>

            <img src="/logos/bitcoin.svg" width={24} height={24} />
          </div>
          <h4 className="font-bold text-2xl leading-8">$ {balances?.btc}</h4>
        </div>

        <div className="bg-vwGrey2 w-1/3 p-6 rounded-[6px]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-base leading-[21px]">Tether</h4>

            <img src="/logos/tether.svg" width={24} height={24} />
          </div>
          <h4 className="font-bold text-2xl leading-8">$ {balances?.usdt}</h4>
        </div>
      </div>
    </div>
  );
};

export default MoneyCards;
