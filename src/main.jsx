import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/authContextProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
);
