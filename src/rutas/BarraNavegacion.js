import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <nav style={{ background:"violet" }}>
      <ul>
        <li> <Link to="/home">Home</Link> </li>
        <li> <Link to="/acerca-de">Acerca de</Link> </li>
        <li> <Link to="/contacto">Contacto</Link> </li>
        <li> <Link to="/sistema-crud">Sistema</Link> </li>
        <li> <Link to="/registro">Registro</Link> </li>
        <li> <Link to="/inicio-sesion">Iniciar Sesión</Link> </li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;
