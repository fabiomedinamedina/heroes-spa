import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {

  const { user, logoutUser } = useContext( AuthContext );
  const navigate = useNavigate();


  const onLogout = () => {
    logoutUser();
    navigate( '/login', {
      replace: true
    });
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-navbar rounded-pill">
      <a href="https://fabiomedina.com" target="blank">
        <img src="/favicon.png" alt="Fabio Medina" height="30" />
      </a>
      <span className="navbar-brand ms-2 mb-0 h1">Héroes App <small>(by Fabio Medina)</small></span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse w-80 order-1">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Searchs Heros
          </NavLink>
        </div>
      </div>

      <div className="w-20 order-3 d-flex justify-content-end align-items-center">
          <span className="nav-item nav-link name-user me-3 mb-0">Bienvenido, <strong>{user?.name}!</strong></span>
          <button
            className="btn btn-sm btn-outline-light rounded-pill px-3 btn-logout"
            onClick={ onLogout }
          >
            Cerrar Sesión
          </button>
      </div>
    </nav>
  );
};
