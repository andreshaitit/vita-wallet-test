import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("prospecto@vitawallet.io");
  const [password, setPassword] = useState("Vita.1212");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isFormValid = email !== "" && password !== "";

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="w-screen h-screen flex p-[120px]">
      <div className="w-1/2 pr-[209px]">
        <h1 className="font-bold text-5xl">Iniciar Sesión</h1>
        <form className="mt-32" onSubmit={(e) => handleLogin(e)}>
          <div className="mt-4 flex flex-col">
            <label htmlFor="email" className="text-sm mb-[5px] text-vwBlack">
              Correo electrónico
            </label>
            <div
              className={`p-4 border-[1px] rounded-[6px] flex mb-[22px] ${
                emailFocused ? "border-vwBlue" : "border-vwGrey1"
              }`}
            >
              <input
                id="email"
                type="email"
                placeholder="Escribe tu correo electrónico"
                className="w-11/12 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              {isValidEmail(email) && (
                <div className="w-1/12 flex justify-end">
                  <img src="/logos/check.svg" width={24} height={24} />
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="password" className="text-sm mb-[5px] text-vwBlack">
              Contraseña
            </label>
            <div
              className={`p-4 border-[1px] rounded-[6px] flex ${
                passwordFocused ? "border-vwBlue" : "border-vwGrey1"
              }`}
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Escribe tu contraseña"
                className="w-11/12 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <div className="w-1/12 flex justify-end">
                <img
                  src={`/logos/${showPassword ? "eye.svg" : "eye-close.svg"}`}
                  width={24}
                  height={24}
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs mt-[5px]">¿Olvidaste tu contraseña?</span>
          </div>
          <button
            disabled={!isFormValid}
            type="submit"
            className={`text-center py-4 px-[142px] text-white rounded-[6px] w-full mt-20 ${
              isFormValid ? "bg-vwBlueGradient" : "bg-vwGrey2"
            }`}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
      <div className="w-1/2 items-end justify-center flex">
        <img src="/logos/imgLogin.svg" />
      </div>
    </div>
  );
};

export default Login;
