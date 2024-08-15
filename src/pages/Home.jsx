import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DashboardName from "../components/home/DashboardName";
import MoneyCards from "../components/home/MoneyCards";

const Home = () => {
  const { profileData, transactions, cryptoPrices, isLoading } = useContext(AuthContext);
  console.log(transactions, "transactions");
  console.log(cryptoPrices, "cryptoPrices");
  console.log(profileData, "profileData");
  return (
    <>
      {isLoading ? (
        <>Cargando</>
      ) : (
        <div className="h-screen">
          <DashboardName name={profileData?.data.attributes.first_name} />
          <MoneyCards balances={profileData?.data.attributes.balances} />

          <div className="mt-[56px]">
            <h2 className="text-2xl mb-8">Historial</h2>

            {transactions?.data?.map((transaction) => (
              <div
                className="flex justify-between border-b-[1px] border-vwGrey2 py-5 text-base"
                key={transaction.id}
              >
                <p>{transaction.attributes.category_translate}</p>
                <p className="text-vwBlue2 font-bold">
                  + ${transaction.attributes.amount} CLP
                </p>
              </div>
            ))}
            <div className="flex justify-between border-b-[1px] border-vwGrey2 py-5 text-base">
              <p>Transferiste</p>
              <p className="text-vwRed font-bold">+ $2.000,00 CLP</p>
            </div>
            <div className="flex justify-between border-b-[1px] border-vwGrey2 py-5 text-base">
              <p>Recargaste</p>
              <p className="text-vwBlue2 font-bold">+ $2.000,00 CLP</p>
            </div>
            <div className="flex justify-between border-b-[1px] border-vwGrey2 py-5 text-base">
              <p>Intercambiaste</p>
              <p className="text-vwBlack font-bold">+ $2.000,00 CLP</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
