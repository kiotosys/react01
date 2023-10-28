import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//style={{ background:"silver" }}
//style="--bs-scroll-height: 100px;"
function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

            <Nav.Link> <Link to="/home">Home</Link> </Nav.Link>
            <Nav.Link> <Link to="/acerca-de">Acerca de</Link> </Nav.Link>
            <Nav.Link> <Link to="/contacto">Contacto</Link> </Nav.Link>

            <NavDropdown title="Aplicaciones" id="navbarScrollingDropdown">
              <NavDropdown.Item> <Link to="/sistema-crud">Sistema</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/galeria-privada">Galeria</Link> </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item> <Link to="/nuevo-registro">Registro</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/iniciar-sesion">Iniciar Sesión</Link> </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link> <Link to="/nuevo-registro">Registro</Link> </Nav.Link>
            <Nav.Link> <Link to="/iniciar-sesion">Iniciar Sesión</Link> </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
