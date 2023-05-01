import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineMore } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdLogout, MdOutlineAccountCircle, MdOutlineLogout, MdOutlineNotificationsNone } from "react-icons/md";
import { useSelector } from "react-redux";


function NavBar({ openSidebar }) {
  const router = useRouter();
    const { username } = useSelector(
      (stateData) => ({
        ...stateData.auth,
      })
  );
    const logOut = () => {
      if (localStorage.getItem("profile")) {
        localStorage.removeItem("profile");
        router.push("/login");
      }
    };
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
          <div className="menu-icon" onClick={openSidebar}>
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
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <NavDropdown
              title={
                <>
                  <span className="text-uppercase mx-1">{username}</span>
                  <MdOutlineAccountCircle className="fs-3" />
                </>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">
                <span onClick={logOut}>
                  <MdOutlineLogout /> Cerrar sesión
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/changepass">
                Cambiar contraseña
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Otros</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <AiOutlineMore/>
              {/* <span className="badge bg-primary rounded-pill position-relative">
                <MdOutlineNotificationsNone className="fs-6" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0+
                  <span className="visually-hidden">Mensajes no leídos</span>
                </span>
              </span> */}
              <div className="mx-4"></div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;