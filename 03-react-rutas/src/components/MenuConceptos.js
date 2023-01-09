import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menú HTML (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contácto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contácto</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            exact="true"
            to="/acerca"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Acerca
          </NavLink>
          <NavLink
            exact="true"
            to="/contacto"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contácto
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
