import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import DataTable from "react-data-table-component";
import { AiFillEye, AiOutlineEdit, AiTwotoneCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
// import { getUserId } from "@/redux/features/authSlice";
import { CSVLink} from 'react-csv';

const File = ({data}) => {

  const { loading, error, files, unassigned_files } = useSelector(
    (stateData) => ({
      ...stateData.files,
    })
  );

  // console.log("allfiles", data)

  const { user, is_organisor, is_support, is_agent } = useSelector(
    (stateData) => ({
      ...stateData.auth,
    })
  );


  const column = [
    {
      name: "Titular",
      selector: (row) => row.headline,
      sortable: true,
    },
    {
      name: "Fecha de inicio",
      selector: (row) => row.file_date_added,
      sortable: true,
    },
    {
      name: "Número de teléfono",
      selector: (row) => row.phone_number,
      sortable: true,
    },
    {
      name: "Acción",
      cell: (row) => (
        <div>
          <Link
            className="badge bg-info border-0 fs-6 mx-1"
            href={"/files/" + row.id}
          >
            <AiFillEye />
          </Link>
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

  let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFiles());
  //   // console.log("bernard", user_id);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (localStorage.getItem("profile")) {
  //     // const sd = JSON.parse(localStorage.getItem("profile")).user_id;
  //     const sd = JSON.parse(localStorage.getItem("profile"));
  //     // console.log("bernard", sd);
  //     dispatch(getUserId(sd));
  //   }
  // }, [dispatch]);

    // console.log("brother bernard", files);


    const headers = [
      { label: "ID", key: "id" },
      { label: "Radicado", key: "file_name" },
      { label: "Tipo de solicitud", key: "file_type" },
      { label: "Titular", key: "headline" },
      { label: "fecha de creación", key: "file_date_added" },
      { label: "Cedule/Pasaporte", key: "passport" },
      { label: "Matricula Inmobiliaria", key: "estate_reg" },
      { label: "Telefono y/o Celular", key: "phone_number" },
      { label: "Correo Electronico", key: "email" },
      { label: "Valor del certificado de delineacion", key: "value_delineation" },
      { label: "Fecha del cerficado de delineación", key: "delineation_date" },
      { label: "Numero de Comprobante de pago de delineación", key: "delineation_payment" },
      { label: "consecutiva certificado delineación", key: "consecutive_delineation" },
      { label: "Visitado por", key: "visited_by" },
      { label: "Estado", key: "State_type" },
      { label: "Datos de entrega de vallas publicitarias", key: "delivery_date" },
      { label: "Fecha de notificación", key: "notification_date" }
    ];
    

  return (
    <Layout>
      <div className="container px-3">
        {is_support ? (
          <div className="text-center">
            <Link
              href="/files/create"
              className="btn btn-sm btn-info text-white"
            >
              Crear nuevo tramite
            </Link>
          </div>
        ) : (
          ""
        )}
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        )}
        {!loading && error?.length > 0 && (
          <h3 className="text-danger text-center mt-5">{error}</h3>
        )}
        {!loading && files?.length > 0 ? (
          <>
            <DataTable
              title="Listado de tramites"
              columns={column}
              data={files}
              // customStyles={customStyles}
              pagination
              selectableRows
              selectableRowsHighlight
              highlightOnHover
              fixedHeader
              fixedHeaderScrollHeight="350px"
              actions={
                <>
                  {!is_agent ? (
                    // <button
                    //   className="btn btn-sm btn-info text-white"
                    // >
                    //   Crear nuevo tramite
                    // </button>

                    <CSVLink  
                      data={ data } 
                      headers={headers}
                      filename="All The Files"  
                      className="btn btn-success mb-3"
                    >
                      {/* Export File Data */}
                      Exportar archivo
                      </CSVLink>

                  ) : (
                    ""
                  )}
                </>
              }
              // subHeader
              // subHeaderComponent={
              //   <input
              //     type="text"
              //     placeholder="Search Here"
              //     className="w-25 form-control"
              //     value={search}
              //     onChange={() => {
              //       setSearch(e.target.value);
              //
              //   />
              // }
              // subHeaderAlign="center"
            ></DataTable>
          </>
        ) : (
          <h1 className="text-center">No hay información</h1>
        )}
      </div>

      {/* <CSVLink data={data} headers={headers}>
      Download me
    </CSVLink> */}

      {!is_agent ? (
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="my-3"
        >
          <div className="container">
            <Nav
              variant="pills"
              className="nav-pills p-2 bg-light mb-3 rounded-pill mt-3 shadow-sm"
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="rounded-pill px-2 px-md-3"
                >
                  Sin asignar
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="rounded-pill px-2 px-md-3"
                >
                  Asignado
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first" className="bg-transparent">
                <div className="row">
                  {!loading &&
                    unassigned_files?.map((unassigned_file, i) => (
                      <div className="col-md-4" key={i}>
                        <div
                          className="card card-body my-3"
                          style={{ borderRadius: " 2rem" }}
                        >
                          <h5 className="text-truncate w-75 mb-0">
                            {unassigned_file.headline}
                            <AiTwotoneCheckCircle className="text-danger" />
                            <Link href={"/files/create/" + unassigned_file.id}>
                              <AiOutlineEdit className="float-end text-warning" />
                            </Link>
                          </h5>
                          <p className="fw-bold text-muted">
                            {unassigned_file.file_date_added}
                          </p>
                          <div className="">
                            <p className="text-muted">
                              {unassigned_file.file_type.name}
                            </p>
                          </div>

                          {is_organisor ? (
                            <div className="text-center fw-bold mt-3">
                              {unassigned_file.State_type.id == 2 ? (
                                <p className="text-primary">
                                  {unassigned_file.State_type.name}
                                </p>
                              ) : (
                                <Link
                                  href={"agent/" + unassigned_file.id}
                                  className="card-link text-danger"
                                >
                                  Asignar un agente
                                  <i className="bi-caret-right-fill"></i>
                                </Link>
                              )}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="bg-transparent">
                <div className="row">
                  {!loading &&
                    files?.map((file, i) => (
                      <div className="col-md-4" key={i}>
                        <div
                          className="card card-body my-3"
                          style={{ borderRadius: " 2rem" }}
                        >
                          <h5 className="text-truncate w-75 mb-0">
                            {file.headline}
                            <AiTwotoneCheckCircle className="text-danger" />
                            <Link href={"/files/create/" + file.id}>
                              <AiOutlineEdit className="float-end text-warning" />
                            </Link>
                          </h5>
                          <p className="fw-bold text-muted">
                            {file.file_date_added}
                          </p>
                          <div className="">
                            <p className="text-muted">
                              {file.file_type.name}
                            </p>
                          </div>

                        </div>
                      </div>
                    ))}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      ) : (
        ""
      )}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-files`)
  // const res = await fetch("http://127.0.0.1:8000/api/all-files")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default File;
