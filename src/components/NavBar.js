import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineMore, AiOutlineNotification } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdLogout, MdOutlineAccountCircle, MdOutlineLogout, MdOutlineNotificationsNone } from "react-icons/md";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import axios from "axios";


function NavBar({ openSidebar }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("daaaa", data2)

  let [notification, setNotification]= React.useState()
  React.useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/logger-all`)
    .then(res => {
      console.log(res.data)
      setNotification(res.data)
    })
    .catch(err => console.log(err.message))
  },[])

  const router = useRouter();
    const { username, is_organisor } = useSelector(
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
    <React.Fragment>
      {/* ==================  Modal Efe Roy ======================  */}
      {/* ==================  Modal Efe Roy ======================  */}

      <Modal show={show} onHide={handleClose} size="lg" >
        
        <Modal.Header closeButton>
          <Modal.Title>Notificación de acciones realizadas en el sitio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light" >
          <ListGroup>
              {/* <pre>{JSON.stringify(notification)}</pre> */}

              {notification?.map(dataValue =>(
                <ListGroup.Item key={dataValue.id} className="d-flex justify-content-between my-1">
                  <div className="">
                    <AiOutlineNotification className="text-danger"/> {dataValue.msg}
                  </div>
                  <div className="">
                    {dataValue.createdAt}
                  </div>
                </ListGroup.Item>
              ))}

          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* ==================  Modal Efe Roy ======================  */}
      {/* ==================  Modal Efe Roy ======================  */}

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
                {is_organisor? 
                <span className="badge bg-primary rounded-pill position-relative" onClick={handleShow}>
                  <MdOutlineNotificationsNone
                    className="fs-6" 
                   />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0+
                    <span className="visually-hidden">Mensajes no leídos</span>
                  </span>
                </span> :
                <AiOutlineMore/>
                }
                <div className="mx-4"></div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};


export default NavBar;