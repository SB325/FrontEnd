import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand id="nbBrand" href="#home">
                S. Bish
                </Navbar.Brand>
                <Navbar.Toggle className="toggler" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link className="headlinks">Blogs</Nav.Link>
                        <Nav.Link className="headlinks">Portfolio</Nav.Link>
                        <Nav.Link className="headlinks">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
