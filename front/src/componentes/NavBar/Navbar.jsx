import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import imagenLogo from '../../img/logo.webp'
import './Navbar.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar pb-2">
      <Container fluid>
        <Navbar.Brand><Link to="/home"><img src={imagenLogo} alt="imagen" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>  <Link className="navbar-item" to="/home">Home</Link>  </Nav.Link>
            <Nav.Link>  <Link className="navbar-item" to="/about">Acerca</Link></Nav.Link>
            <NavDropdown title="Ropa" id="navbarScrollingDropdown" className='' >
              <NavDropdown.Item className="navbar-menu">
                <Link className="navbar-item" to="/zapatillas">Zapatillas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-menu">
              <Link className="navbar-item" to="/camperas">Camperas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-menu">
              <Link className="navbar-item" to="/pantalones">Pantalones</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;