const DashboardName = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <img src="/logos/coin.svg" width={46} height={46} />
      <span className="font-bold text-[28px]">
        ¡Hola{" "}
        <span className="bg-vwBlueGradient bg-clip-text text-transparent">
          {name}
        </span>
        !
      </span>
    </div>
  );
};

export default DashboardName;
