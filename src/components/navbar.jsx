import logo from '../logo.webp'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Navigation(){
    return(
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt={logo} width="100" className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
              <button className="ms-auto button"><Nav.Link href="#action1" className="text-reset text-decoration-none">Login</Nav.Link></button>
              <Nav.Link href="#action2">Register</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}