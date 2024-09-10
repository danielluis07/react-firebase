import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened during sign-out.
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Principal</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Listas</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Usuários</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Pedidos</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Entrega</span>
          </li>
          <p className="title">Utilidade</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Estatísticas</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notificações</span>
          </li>
          <p className="title">Serviço</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Configurações</span>
          </li>
          <p className="title">Usuário</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
};

export default Sidebar;
