import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { login } from "./router/login";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth ? (
        <RouterProvider router={router} />
      ) : (
        <RouterProvider router={login} />
      )}
    </>
  );
}

export default App;
