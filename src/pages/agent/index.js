import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import DataTable from "react-data-table-component";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { UserRoleCreate, getAgent, getFiles } from "@/redux/features/fileSlice";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";


const Agent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: ""
  });

  let dispatch = useDispatch();
  const router = useRouter();

  const { username, password, email, role, is_support, is_agent } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let is_agent = false;
    let is_support = false;
    if (role === "Support") is_support = true;
    if (role === "Agent") is_agent = true;
    
    let formDaa = {
      is_support: is_support,
      is_agent: is_agent,
      username: username,
      password: password,
      email: email
    };
    
    console.log("formDaa", formDaa);

    dispatch(UserRoleCreate({ formDaa, toast, router }));
  };

  const { loading, error, files, users } = useSelector((stateData) => ({
    ...stateData.files,
  }));

  const column = [
    {
      name: "Dirección de correo electrónico",
      selector: (row) => row.user.email,
      sortable: true,
    },
    {
      name: "Nombre de usuario",
      selector: (row) => row.user.username,
      sortable: true,
    },
    {
      name: "Role",
      cell: (row) => (
        <div>
          {row.user.is_agent && "responsable"}
          {row.user.is_support && "Atención al Agente"}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Acción",
      cell: (row) => (
        <div>
          <span className="badge bg-danger border-0 fs-6 mx-1">
            <AiFillDelete />
          </span>
        </div>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "blue",
        color: "white",
      },
    },
    headCell: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };


  useEffect(() => {
    dispatch(getFiles());

    dispatch(getAgent());
  }, [dispatch]);

  // console.log("aqwr", users);

  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* ==================  Modal Efe Roy ======================  */}
      {/* ==================  Modal Efe Roy ======================  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">
            {/* Create New User */}
            Crear nuevo usuario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Are you sure you really want to delete this file ? */}
          <div className="">
            <form onSubmit={onSubmit} className="px-md-5 px-2">
              <div className="form-group py-2">
                <div className="input-field">
                  <label htmlFor="" className="col-2 col-form-label">
                  Nombre de usuario:
                  </label>
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    onChange={onChange}
                    value={username}
                  />
                  <>
                    {error ? (
                      // <span className="text-mute text-danger">
                      //   {error.username}
                      // </span>
                      <pre>error</pre>
                    ) : (
                      ""
                    )}
                  </>
                </div>
              </div>
              <div className="form-group py-2">
                <div className="input-field">
                  <label htmlFor="" className="col-2 col-form-label">
                  Correo electrónico:
                  </label>
                  <input
                    className="form-control w-100"
                    type="email"
                    placeholder="Ingresar Correo electrónico"
                    name="email"
                    onChange={onChange}
                    value={email}
                  />
                </div>
              </div>
              <div className="form-group py-1 pb-2">
                <div className="input-field">
                  <label htmlFor="" className="col-2 col-form-label">
                  Contraseña:
                  </label>
                  <input
                    className="form-control w-100"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    onChange={onChange}
                    value={password}
                  />
                </div>
              </div>
              <div className="form-group py-1">
                <label htmlFor="role" className="form-label">
                Elegir tipo de usuario:
                </label>
                <select
                  name="role"
                  onChange={onChange}
                  className="form-control form-control-border border-navy select2"
                  style={{ outline: "none" }}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                  Seleccionar opción
                  </option>
                  <option value="Support">Support</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>

              <div className="d-grid gap-2 pt-4">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary btn" onClick={handleClose}>
            Cerrar
          </button>
          {/* <button className="btn-danger btn">Delete</button> */}
        </Modal.Footer>
      </Modal>
      {/* ==================  Modal Efe Roy ======================  */}
      {/* ==================  Modal Efe Roy ======================  */}

      <div className="container px-3">
        <button
          onClick={handleShow}
          className="btn shadow btn-info mb-2"
        >
          Crear nuevo usuario
        </button>
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        )}
        {!loading && error?.length > 0 && (
          <h3 className="text-danger text-center mt-5">{error}</h3>
        )}
        {!loading && users?.length > 0 && (
          <DataTable
            title="Lista de Agentes"
            columns={column}
            data={users}
            customStyles={customStyles}
            pagination
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            fixedHeader
            fixedHeaderScrollHeight="400px"
            // actions={
            //   <>
            //     <button
            //       onClick={handleShow}
            //       className="btn btn-sm shadow btn-light"
            //     >
            //       Create User Role
            //     </button>
            //   </>
            // }
          ></DataTable>
        )}
      </div>
    </Layout>
  );
};

export default Agent;
