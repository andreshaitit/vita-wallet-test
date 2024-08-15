import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import TransactionSummary from "../components/exchange/TransactionSummary";
import TransactionMount from "../components/exchange/TransactionMount";

const Exchange = () => {
  const { executeExchangeTransaction } = useContext(AuthContext);
  const [confirmTransaction, setConfirmTransaction] = useState(false);
  const handleExchange = () => {
    const exchangeData = {
      currency_sent: "usd",
      currency_received: "usdc",
      amount_sent: 1.0,
    };
    executeExchangeTransaction(exchangeData);
  };

  return (
    <div className="pl-[35px]">
      {confirmTransaction ? (
        <TransactionSummary
          setConfirmTransaction={setConfirmTransaction}
          handleExchange={handleExchange}
        />
      ) : (
        <TransactionMount
          confirmTransaction={confirmTransaction}
          setConfirmTransaction={setConfirmTransaction}
        />
      )}
    </div>
  );
};

export default Exchange;
