import './navbar.css';
import { Navbar,  Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
      <Navbar className='my-navbar'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className="nav-link" href='/'>Home</Nav.Link>
            <Nav.Link className="nav-link" href='/view-results'>Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavbar;
