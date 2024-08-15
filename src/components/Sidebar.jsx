import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <sidebar className="flex flex-col h-full pr-24">
      <div className="h-1/6"></div>
      <div className="flex flex-col h-4/6 gap-10 text-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/tranferir"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Transferir
        </NavLink>
        <NavLink
          to="/transfer"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Recargar
        </NavLink>
        <NavLink
          to="/intercambiar"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Intercambiar
        </NavLink>
        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Perfil
        </NavLink>
        <NavLink
          to="/ayuda"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-semibold bg-vwBlue2 py-4 rounded-r-[32.5px]"
              : "text-2xl font-normal"
          }
        >
          Ayuda
        </NavLink>
      </div>
      <div className="h-1/6 text-center">
        <NavLink className="text-2xl font-normal" onClick={logout}>
          Cerrar Sesion
        </NavLink>
      </div>
    </sidebar>
  );
};

export default Sidebar;
