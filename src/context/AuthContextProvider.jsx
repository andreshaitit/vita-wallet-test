import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "./authContext";

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [authHeaders, setAuthHeaders] = useState({});
  const [profileData, setProfileData] = useState(null);
  const [cryptoPrices, setCryptoPrices] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedAuth = localStorage.getItem("authData");

    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://api.qa.vitawallet.io/api/auth/sign_in",
        {
          email,
          password,
          dev_mode: "true",
        },
        {
          headers: {
            "app-name": "INITIAL ANGIE, CURRENT ANGIE, SCOPE Collection",
          },
        }
      );

      const authData = response.data;
      const authHeaders = {
        "access-token": response.headers["access-token"],
        uid: response.headers.uid,
        expiry: response.headers.expiry,
        client: response.headers.client,
      };

      setAuth(authData);
      setAuthHeaders(authHeaders);

      localStorage.setItem("authData", JSON.stringify(authData));
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Obtener el perfil del usuario y los siguientes datos automáticamente después del login
      getProfile(authHeaders);
      getCryptoPrices(authHeaders);
      getTransactions(authHeaders);
      setIsLoading(false)
    } catch (error) {
      console.error("Error durante el login:", error);
    }
  };

  const getProfile = async (authHeaders) => {
    try {
      const response = await axios.get(
        "https://api.qa.vitawallet.io/api/profile",
        {
          headers: {
            "app-name": "INITIAL ANGIE, CURRENT ANGIE, SCOPE Collection",
            "access-token": authHeaders["access-token"],
            uid: authHeaders.uid,
            expiry: authHeaders.expiry,
            client: authHeaders.client,
          },
        }
      );

      setProfileData(response.data);
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  const getCryptoPrices = async (authHeaders) => {
    try {
      const response = await axios.get(
        "https://api.qa.vitawallet.io/api/users/get_crypto_multi_prices",
        {
          headers: {
            "app-name": "INITIAL ANGIE, CURRENT ANGIE, SCOPE Collection",
            "access-token": authHeaders["access-token"],
            uid: authHeaders.uid,
            expiry: authHeaders.expiry,
            client: authHeaders.client,
          },
        }
      );
      setCryptoPrices(response.data);
      const dateNow = new Date();
      const dateToken = new Date(response.data.valid_until);
      const difference = dateToken - dateNow;
      setTimeout(async () => {
        const emailSaved = localStorage.getItem("email");
        const passwordSaved = localStorage.getItem("password");
        await login(emailSaved, passwordSaved).then((res) => {
          const authHeaders = {
            "access-token": res.headers["access-token"],
            uid: res.headers.uid,
            expiry: res.headers.expiry,
            client: res.headers.client,
          };
          getCryptoPrices(authHeaders);
        });
      }, Number(difference));
    } catch (error) {
      console.error("Error al obtener los precios de criptomonedas:", error);
    }
  };

  const getTransactions = async (authHeaders) => {
    try {
      const response = await axios.get(
        "https://api.qa.vitawallet.io/api/transactions",
        {
          headers: {
            "app-name": "INITIAL ANGIE, CURRENT ANGIE, SCOPE Collection",
            "access-token": authHeaders["access-token"],
            uid: authHeaders.uid,
            expiry: authHeaders.expiry,
            client: authHeaders.client,
          },
        }
      );

      setTransactions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener las transacciones:", error);
    }
  };

  const executeExchangeTransaction = async (exchangeData) => {
    try {
      const response = await axios.post(
        "https://api.qa.vitawallet.io/api/transactions/exchange",
        exchangeData,
        {
          headers: {
            "app-name": "INITIAL ANGIE, CURRENT ANGIE, SCOPE Collection",
            "access-token": authHeaders["access-token"],
            uid: authHeaders.uid,
            expiry: authHeaders.expiry,
            client: authHeaders.client,
          },
        }
      );

      console.log("Transacción de intercambio exitosa:", response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error al realizar la transacción de intercambio:", error);
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("authData");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        showModal,
        setShowModal,
        login,
        profileData,
        logout,
        cryptoPrices,
        getCryptoPrices,
        transactions,
        executeExchangeTransaction,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
