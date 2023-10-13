import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/acerca-de">Acerca de</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link> {/* Enlace para registrar nuevo usuario */}
        </li>
        <li>
          <Link to="/inicio-sesion">Iniciar Sesión</Link> {/* Enlace para iniciar sesión */}
        </li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;
