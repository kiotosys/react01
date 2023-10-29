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

            <Nav.Link as={Link} to="/home"> Home </Nav.Link>
            <Nav.Link as={Link} to="/acerca-de"> Acerca de </Nav.Link>
            <Nav.Link as={Link} to="/contacto"> contacto </Nav.Link>

            <NavDropdown title="Aplicaciones" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/sistema-crud"> Sistema </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeria-privada"> Galeria </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/nuevo-registro"> Registro </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/iniciar-sesion"> Iniciar Sesión </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/nuevo-registro"> Registro </Nav.Link>
            <Nav.Link as={Link} to="/iniciar-sesion"> Iniciar Sesión </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              name='buscador'
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button name='btnBuscar' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;