import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiMenuAltLeft } from "react-icons/bi";

function Navv() {
    
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      // variant="dark"
      className="shadow-sm"
    >
      <Container className="">
        <Navbar.Brand href="#home">
          <div className="menu-icon">
            <BiMenuAltLeft />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Image
                src="/LogoCDNR.png"
                alt="Vercel Logo"
                className=""
                width={100}
                height={34}
                priority
              />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
