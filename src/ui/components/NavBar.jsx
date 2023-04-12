import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar rounded-5">
      <a href="https://fabiomedina.com" target="blank">
        <img src="/favicon.png" alt="Fabio Medina" height="30" />
      </a>
      <span className="navbar-brand ms-2 mb-0 h1 d-flex flex-column">
        Héroes App <small>(by Fabio Medina)</small>
      </span>
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

      <div className="collapse navbar-collapse my-3 mx-2 my-lg-0 mx-lg-0" id="navbarNav">
        <span className="nav-item nav-link name-user me-3 mb-3 mb-lg-0 order-0 order-lg-1">
          Bienvenido, <strong>{user?.name}!</strong>
        </span>
        <div className="navbar-nav w-80 order-1 order-lg-0 me-auto">
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
        <button
          className="btn btn-sm btn-outline-light rounded-pill px-3 btn-logout order-2 order-lg-2 mt-3 mt-lg-0"
          onClick={onLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
