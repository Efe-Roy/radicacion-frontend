import Layout from '@/components/Layout'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { completedStatus, deleteFilesById, getFilesById, verifyDelete } from '@/redux/features/fileSlice';
import Link from 'next/link';
import { AiFillDelete, AiFillEdit, AiFillGift } from 'react-icons/ai';
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import {
  MdOutlineAssignmentTurnedIn,
  MdPreview,
  MdTimeline,
} from "react-icons/md";

import { FaFileArchive } from 'react-icons/fa';

import { GrAchievement } from "react-icons/gr";
import { FcApproval } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";


const FileDetail = ({ id, data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(id, "routes");
  let dispatch = useDispatch();
  let router = useRouter();

  useEffect(() => {
    dispatch(getFilesById(id));
  }, [dispatch]);

  const { loading, error, fileById, verifyy } = useSelector((stateData) => ({
    ...stateData.files,
  }));

  const { is_organisor, is_support, is_agent } = useSelector((stateData) => ({
    ...stateData.auth,
  }));
  const file = fileById;
  // console.log(file.completed, "file");

  const DeletFile = () => {
    dispatch(deleteFilesById({ id, router, toast }));
  };

  const DeletVerify = (id_v) => {
    // console.log("id_v", id_v)
    // console.log("id", id)
    dispatch(verifyDelete({ id_v, id, router, toast }));
  };


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
          <Modal.Title>Eliminar este archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que realmente quieres eliminar este archivo?
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary btn" onClick={handleClose}>
            Close
          </button>
          <button className="btn-danger btn" onClick={DeletFile}>
            Eliminar
          </button>
        </Modal.Footer>
      </Modal>
      {/* ==================  Modal Efe Roy ======================  */}
      {/* ==================  Modal Efe Roy ======================  */}

      <div className="container">
        <div className="main-body">
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          )}
          {!loading && error?.length > 0 && (
            <h3 className="text-danger">{error}</h3>
          )}
          {!loading && file && (
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <div className="mt-3">
                        <h4>{file.headline}</h4>
                        <p className="text-secondary mb-1">{file.file_name}</p>
                        <p className="text-secondary mb-1">
                          {file.State_type.name}
                        </p>
                        <p className="text-secondary mb-1">{file.email}</p>

                        {file.completed === true ? <FaFileArchive className='fs-2 text-success mt-2'/>:(

                          <>
                          {!is_agent && (
                            <Link
                              className="btn btn-outline-info "
                              href={"/files/create/" + id}
                            >
                              <AiFillEdit />
                            </Link>
                          )}
                          {/* <Link
                            className="btn btn-danger mx-2"
                            href="#"
                            onClick={handleShow}
                          >
                            <AiFillDelete />
                          </Link> */}
                          {verifyy && (
                            <>
                              {!is_organisor && (
                                <Link
                                  className="btn btn-primary"
                                  href={"/files/track/" + id}
                                >
                                  {/* Opertations */}
                                  <BsFillFolderSymlinkFill />
                                </Link>
                              )}
                            </>
                          )}
                          </>
                        )}
                        
                        {verifyy && (
                          <>
                            <Link
                              className="btn btn-outline-warning mx-1"
                              href={"/files/trackstatus/" + id}
                            >
                              {/* Opertations */}
                              <MdTimeline />
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Matricula Inmobiliaria </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.estate_reg}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Telefono y/o Celular </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.phone_number}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Tipo de solicitud </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.file_type.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">
                          Valor del certificado de delineacion
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.value_delineation}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Fecha de delineación</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.delineation_date}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Pago de delineación</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.delineation_payment}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Consecutivo de delineación</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {file.consecutive_delineation}
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container px-1 px-md-4 py-5 mx-auto">
        <div className="card" style={{ zIndex: "0" }}>
          <div className="d-flex justify-content-between">
            <small>
              Filed ID
              <span className="text-primary mx-2 fw-bold">
                {file?.file_name}{" "}
              </span>
            </small>
            <small>
              Creado{" "}
              <span className="fw-bold mx-2"> {file?.file_date_added} </span>
            </small>
          </div>

          {/* <!-- Add class "active" to progress --> */}
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <ul className="text-center progressbar">
                {file?.agent ? (
                  <li className="active step0"></li>
                ) : (
                  <li className="step0"></li>
                )}
                {data?.underReview === true ? (
                  <li className="active step0"></li>
                ) : (
                  <li className="step0"></li>
                )}
                {data?.review === true ? (
                  <li className="active step0"></li>
                ) : (
                  <li className="step0"></li>
                )}
                {file?.completed === true ? (
                  <li className="active step0"></li>
                ) : (
                  <li className="step0"></li>
                )}
              </ul>
            </div>
          </div>

          <div className="row d-flex justify-content-between mx-5 px-4 pt-5">
            <div className="col d-flex d-flex">
              <MdOutlineAssignmentTurnedIn className="fs-1 mx-1" />
              <p className="font-weight-bold">
                {/* File <br />
                Assigned */}
                Tramites <br/> asignado
              </p>
            </div>
            <div className="col d-flex d-flex">
              <MdPreview className="fs-1 mx-1" />
              <p className="font-weight-bold">
                {/* File Under <br />
                Review */}
                Tramite en <br/>
                Revisión
              </p>
            </div>

            <div className="col d-flex d-flex">
              <GrAchievement className="fs-1 mx-1" />
              <p className="font-weight-bold">
                {/* File <br />
                Reviewed */}
                Tramite <br/>
                Revisado
              </p>
            </div>

            <div className="col d-flex d-flex">
              <FcApproval className="fs-1 mx-1" />
              <p className="font-weight-bold">
                {/* File <br />
                Approved */}

                Tramite <br/>
                Aprobado
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        )}
        {!loading && error?.length > 0 && (
          <h3 className="text-danger">{error}</h3>
        )}
        {!loading && verifyy ? (
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="example"
                      className="table table-bordered table-striped w-100"
                    >
                      <thead>
                        <tr>
                          <th>Copia de cedula del propietario pasaporte</th>
                          <th>Certificado de tradición y libertad</th>
                          <th>Copia de la escritura </th>
                          <th>Paz y salvo municipal</th>
                          <th>Copia del impuesto predial</th>
                          <th>Certificado catastral</th>
                          <th>Planos arquitectónicos y estructurales</th>
                          <th>Planos topográficos</th>
                          <th>CD o USB</th>
                          <th>Copia de la tarjeta profesional</th>
                          <th>Formulario único nacional</th>
                          <th>
                            Certificado de delineación y comprobante de pago
                          </th>
                          <th>Viabilidad de energía y acueducto</th>
                          <th>Viabilidad de alcantarillado y aseo</th>
                          <th>Certificado de sismo resistencia</th>
                          <th>Memorias de calculo</th>
                          <th>Estudio de suelos</th>
                          <th>Peritaje técnico</th>
                          <th>Plan de majo ambiental</th>
                          <th>Plan de manejo de escombros</th>
                          <th>Plan de manejo de transito</th>
                          <th>Avaluó comercial</th>
                          <th>Declaración de antigüedad</th>
                          <th>Declaración de no bienes</th>
                          <th>Declaración extrajuicio de sana posesión</th>
                          <th>Copia de licencia</th>
                          <th>Certificado de nomenclatura</th>
                          <th>Certificado del sisben</th>
                          <th>Certificado de desplazado</th>
                          <th>Carta de aceptación por revisor</th>
                          <th>Poder autenticado</th>
                          <th>Autorización autenticada</th>
                          <th>Solicitud</th>
                          <th>Certificado financiero</th>
                          <th>Contrato de promesa de compraventa</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <td>
                            {verifyy.Copia_de_cedula_del_propietario_pasaporte
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_de_tradición_y_libertad
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Copia_de_la_escritura ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Paz_y_salvo_municipal ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Copia_del_impuesto_predial
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_catastral ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Planos_arquitectónicos_y_estructurales
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Planos_topográficos ? "True" : "False"}
                          </td>
                          <td>{verifyy.CD_o_USB ? "True" : "False"}</td>
                          <td>
                            {verifyy.Copia_de_la_tarjeta_profesional
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Formulario_único_nacional
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_de_delineación_y_comprobante_de_pago
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Viabilidad_de_energía_y_acueducto
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Viabilidad_de_alcantarillado_y_aseo
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_de_sismo_resistencia
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Memorias_de_calculo ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Estudio_de_suelos ? "True" : "False"}
                          </td>
                          <td>{verifyy.Peritaje_técnico ? "True" : "False"}</td>
                          <td>
                            {verifyy.Plan_de_majo_ambiental ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Plan_de_manejo_de_escombros
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Plan_de_manejo_de_transito
                              ? "True"
                              : "False"}
                          </td>
                          <td>{verifyy.Avaluó_comercial ? "True" : "False"}</td>
                          <td>
                            {verifyy.Declaración_de_antigüedad
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Declaración_de_no_bienes
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Declaración_extrajuicio_de_sana_posesión
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Copia_de_licencia ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_de_nomenclatura
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_del_sisben ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Certificado_de_desplazado
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Carta_de_aceptación_por_revisor
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {verifyy.Poder_autenticado ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Autorización_autenticada
                              ? "True"
                              : "False"}
                          </td>
                          <td>{verifyy.Solicitud ? "True" : "False"}</td>
                          <td>
                            {verifyy.Certificado_financiero ? "True" : "False"}
                          </td>
                          <td>
                            {verifyy.Contrato_de_promesa_de_compraventa
                              ? "True"
                              : "False"}
                          </td>
                          <td>
                            {file.completed === true? <FaFileArchive className='fs-2 text-success mt-2'/> :(
                              <Link
                                onClick={() => DeletVerify(verifyy.id)}
                                className="btn btn-danger"
                                href="#"
                              >
                                <AiFillDelete />
                              </Link>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center my-5">
            <p className="m-0">Aún no se ha añadido documentación...</p>
            <Link className="btn btn-primary" href={"/files/verify/" + id}>
              Agregar verificarDoc
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

FileDetail.getInitialProps = async ({ query }) => {
  const { id } = query;

  const resp = await fetch(`http://127.0.0.1:8000/api/track-detail/${id}/`);
  const data = await resp.json();

  return {
    id,
    data,
  };
};

export default FileDetail