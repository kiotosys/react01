import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <nav style={{ background:"silver" }}>
      <ul>
        <li> <Link to="/home">Home</Link> </li>
        <li> <Link to="/acerca-de">Acerca de</Link> </li>
        <li> <Link to="/contacto">Contacto</Link> </li>
        <li> <Link to="/sistema-crud">Sistema</Link> </li>
        <li> <Link to="/nuevo-registro">Registro</Link> </li>
        <li> <Link to="/iniciar-sesion">Iniciar Sesión</Link> </li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;
