import Layout from "@/components/Layout";
import {
  Review,
  underReview,
  Observation,
  Notified,
  Documentt,
  actProcedure,
  personalNotified,
  payment,
  paymentDoc,
  resolution,
  resolutionNotification,
  getResNum,
} from "@/redux/features/trackSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { BsFillCheckCircleFill } from "react-icons/bs";


const TrackProgress = ({ id, fileNum }) => {
  console.log("fileNum", fileNum)
  const router = useRouter();
  let dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getResNum())
  },[])

  const { resNum } = useSelector((stateData) => ({
    ...stateData.track,
  }));

  console.log("resNum", resNum)

  const [formData, setFormData] = useState({
    underReview: false,
    underReview_date: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(underReview({ formData, toast, router, id }));
  }

  const [formData1, setFormData1] = useState({
    review_date: "",
    review: false,
  });
  const onChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };
  function onSubmit1(e) {
    e.preventDefault();
    console.log(formData1);
    dispatch(Review({ formData1, toast, router, id }));
  }

  const [formData2, setFormData2] = useState({
    observation: "",
    observation_date: "",
  });
  const onChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };
  function onSubmit2(e) {
    e.preventDefault();
    console.log(formData2);
    dispatch(Observation({ formData2, toast, router, id }));
  }

  const [formData3, setFormData3] = useState({
    is_notified: "",
    is_notified_date: "",
    is_notified_observation: "",
  });
  const onChange3 = (e) => {
    setFormData3({ ...formData3, [e.target.name]: e.target.value });
  };
  function onSubmit3(e) {
    e.preventDefault();
    console.log(formData3);
    dispatch(Notified({ formData3, toast, router, id }));
  }

  const [formData4, setFormData4] = useState({
    correct_document: "",
    correct_document_date: "",
  });
  const onChange4 = (e) => {
    setFormData4({ ...formData4, [e.target.name]: e.target.value });
  };
  function onSubmit4(e) {
    e.preventDefault();
    // console.log(formData4);
    dispatch(Documentt({ formData4, toast, router, id }));
  }

  const [formData5, setFormData5] = useState({
    file_name: fileNum?.file_name,
    process_act_num: "",
    process_act_num_date: "",
    liquidation_value: "",
  });
  const onChange5 = (e) => {
    setFormData5({ ...formData5, [e.target.name]: e.target.value });
  };
  function onSubmit5(e) {
    e.preventDefault();
    console.log(formData5);
    dispatch(actProcedure({ formData5, toast, router, id }));
  }

  const [formData6, setFormData6] = useState({
    is_personal_notified: "",
    is_personal_notified_date: "",
    is_personal_notified_observation: "",
  });
  const onChange6 = (e) => {
    setFormData6({ ...formData6, [e.target.name]: e.target.value });
  };
  function onSubmit6(e) {
    e.preventDefault();
    console.log(formData6);
    dispatch(personalNotified({ formData6, toast, router, id }));
  }

  const [formData7, setFormData7] = useState({
    payment: "",
    payment_status_date: "",
  });
  const onChange7 = (e) => {
    setFormData7({ ...formData7, [e.target.name]: e.target.value });
  };
  function onSubmit7(e) {
    e.preventDefault();
    console.log(formData7);
    dispatch(payment({ formData7, toast, router, id }));
  }

  const [formData8, setFormData8] = useState({
    payment_receipt_number: "",
    payment_receipt_date: "",
    license_value: "",
    delineation_tax_value: "",
  });
  const onChange8 = (e) => {
    setFormData8({ ...formData8, [e.target.name]: e.target.value });
  };
  function onSubmit8(e) {
    e.preventDefault();
    console.log(formData8);
    dispatch(paymentDoc({ formData8, toast, router, id }));
  }

  const [formData9, setFormData9] = useState({
    resolution_number: resNum,
    resolution_date: "",
  });
  const onChange9 = (e) => {
    setFormData9({ ...formData9, [e.target.name]: e.target.value });
  };
  function onSubmit9(e) {
    e.preventDefault();
    console.log(formData9);
    dispatch(resolution({ formData9, toast, router, id }));
  }

  const [formData10, setFormData10] = useState({
    resolution_notification_date: "",
  });
  const onChange10 = (e) => {
    setFormData10({ ...formData10, [e.target.name]: e.target.value });
  };
  function onSubmit10(e) {
    e.preventDefault();
    console.log(formData10);
    dispatch(resolutionNotification({ formData10, toast, router, id }));
  }

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
      <div className="container">
        <div className="container overflow-hidden my-3">
          <div className="row gx-3">
            <div className="col">
              <div className="p-3 border bg-white">
                {/* <h5 className="mb-5 text-center">UnderReview Form </h5> */}
                <h5 className="mb-5 text-center">Documentos en revisión</h5>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      {/* UnderReview */}
                      Proceso de revisión
                    </label>
                    <select
                      name="underReview"
                      onChange={onChange}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {/* Select Option */}
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>
                  <label htmlFor="id_underReview_date">
                    Fecha de revisión
                    {/* UnderReview date: */}
                  </label>
                  <input
                    type="date"
                    name="underReview_date"
                    className="form-control"
                    onChange={onChange}
                    value={formData.underReview_date}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    name="btnform1"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="mb-5 text-center">
                  {/* Review Form */}
                  Planos
                </h5>
                <form onSubmit={onSubmit1}>
                  <div className="my-3">
                    <label className="form-label">
                      {/* Reviewed */}
                      Proceso de revisión
                    </label>
                    <select
                      name="review"
                      onChange={onChange1}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {/* Select Option */}
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>

                  <div id="div_id_review_date" className="mb-3">
                    <label htmlFor="id_review_date" className="form-label">
                      {/* Review date */}
                      Fecha de revisión
                    </label>
                    <input
                      type="date"
                      name="review_date"
                      className="form-control"
                      onChange={onChange1}
                      value={formData1.review_date}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform11"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="text-center mb-5">
                  <b>
                    {/* Observation Form users */}
                    Observaciones para el usuario
                  </b>
                </h5>
                <form onSubmit={onSubmit2}>
                  <div className="mb-3">
                    <label htmlFor="id_observation" className="form-label">
                      {/* Observation */}
                      Ingrese las Observaciones
                    </label>
                    <textarea
                      name="observation"
                      cols="35"
                      rows="3"
                      className="form-control"
                      maxLength="1000"
                      onChange={onChange2}
                      value={formData2.observation}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Observation date */}
                      Fecha de observación
                    </label>
                    <input
                      type="date"
                      name="observation_date"
                      className="form-control"
                      onChange={onChange2}
                      value={formData2.observation_date}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform2"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row gx-3 mt-5">
            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="text-center mb-5">
                  <b>
                    {/* Notification Form */}
                    Observaciones ¿Se notifico?
                  </b>
                </h5>

                <form onSubmit={onSubmit3}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Did you receive Notification? */}
                      ¿Recibiste notificación?
                    </label>
                    <select
                      name="is_notified"
                      onChange={onChange3}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {/* Select Option */}
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Notification Date */}
                      Fecha de notificación
                    </label>
                    <input
                      type="date"
                      name="is_notified_date"
                      className="form-control"
                      onChange={onChange3}
                      value={formData3.is_notified_date}
                    />
                  </div>

                  <div
                    className="mb-3"
                    // style={{ display: "none" }}
                  >
                    <label htmlFor="" className="form-label">
                      {/* Notification Observation */}
                      Notificación Observación
                    </label>
                    <textarea
                      name="is_notified_observation"
                      cols="40"
                      rows="3"
                      className="form-control"
                      maxLength="1000"
                      onChange={onChange3}
                      value={formData3.is_notified_observation}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform3"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="text-center mb-5">
                  {/* <b>Document Form</b> */}
                  <b>¿Subsano documentos?</b>
                </h5>
                <form onSubmit={onSubmit4}>
                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Correct Document */}
                      Documento correcto
                    </label>
                    <select
                      name="correct_document"
                      onChange={onChange4}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>
                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Document date */}
                      Fecha del notificación
                    </label>
                    <input
                      type="date"
                      name="correct_document_date"
                      className="form-control"
                      onChange={onChange4}
                      value={formData4.correct_document_date}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform4"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white">
                <h4 className="mb-5 text-center">
                  {/* Act of procedure */}
                  Acto de tramite
                </h4>
                <form onSubmit={onSubmit5}>
                  <div id="" className="mb-3">
                    <label htmlFor="">
                      {/* File name */}
                      Numero de radicado
                    </label>
                    <input
                      type="text"
                      name="file_name"
                      className="form-control"
                      maxLength="500"
                      required=""
                      onChange={onChange5}
                      // value="00001"
                      value={formData5.file_name}
                    />
                  </div>

                  <div id="" className="mb-3">
                    <label htmlFor="">
                      {/* Process act num */}
                      Número de acto de proceso
                    </label>
                    <input
                      type="text"
                      name="process_act_num"
                      className="form-control"
                      maxLength="500"
                      onChange={onChange5}
                      value={formData5.process_act_num}
                    />
                  </div>

                  <div id="" className="mb-3">
                    <label htmlFor="">
                      {/* Process act num date */}
                      Fecha del acto de tramite
                    </label>
                    <input
                      type="date"
                      name="process_act_num_date"
                      className="form-control"
                      onChange={onChange5}
                      value={formData5.process_act_num_date}
                    />
                  </div>

                  <div id="" className="mb-3">
                    <label htmlFor="">Valor de liquidación:</label>
                    <input
                      type="text"
                      name="liquidation_value"
                      className="form-control"
                      maxLength="500"
                      onChange={onChange5}
                      value={formData5.liquidation_value}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform5"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row gx-3 mt-5">
            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="mb-3 text-center">
                  {/* Personal Notification */}
                  Notificación personal
                </h5>

                <form onSubmit={onSubmit6}>
                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Did you receive Notification? */}
                      ¿Recibiste Notificación?
                    </label>
                    <select
                      name="is_personal_notified"
                      onChange={onChange6}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>

                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Notification Date */}
                      Fecha de notificación
                    </label>
                    <input
                      type="date"
                      name="is_personal_notified_date"
                      className="form-control"
                      onChange={onChange6}
                      value={formData6.is_personal_notified_date}
                    />
                  </div>

                  <div
                    id=""
                    className="mb-3"
                    // style={{ display: "none" }}
                  >
                    <label htmlFor="" className="form-label">
                      {/* Notification Observation */}
                      Notificación Observación
                    </label>
                    <textarea
                      name="is_personal_notified_observation"
                      cols="40"
                      rows="3"
                      className="form-control"
                      maxLength="1000"
                      onChange={onChange6}
                      value={formData6.is_personal_notified_observation}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform6"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white text-center">
                {/* <!-- <h4 className="mb-1 ">Payment</h4> --> */}
                <form onSubmit={onSubmit7}>
                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Payment */}
                      Pago
                    </label>
                    <select
                      name="payment"
                      onChange={onChange7}
                      className="form-select"
                      style={{ outline: "none" }}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {/* Select Option */}
                        Seleccionar opción
                      </option>
                      <option value="False">No</option>
                      <option value="True">Si</option>
                    </select>
                  </div>
                  <div id="" className="mb-3">
                    <label htmlFor="" className="form-label">
                      {/* Payment status date */}
                      Fecha de estado de pago
                    </label>
                    <input
                      type="date"
                      name="payment_status_date"
                      className="form-control"
                      onChange={onChange7}
                      value={formData7.payment_status_date}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform7"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-white">
                <h6 className="mb-3 text-center">
                  {/* Payment Detail's */}
                  Detalles del pago
                </h6>
                <form onSubmit={onSubmit8}>
                  <label>
                    {/* Payment receipt number */}
                    Número de comprobante de pago
                  </label>
                  <input
                    type="text"
                    name="payment_receipt_number"
                    className="form-control"
                    maxLength="500"
                    onChange={onChange8}
                    value={formData8.payment_receipt_number}
                  />
                  <label>
                    {/* Payment receipt date */}
                    Fecha del comprobante de pago
                  </label>
                  <input
                    type="date"
                    name="payment_receipt_date"
                    className="form-control"
                    onChange={onChange8}
                    value={formData8.payment_receipt_date}
                  />
                  <label>
                    {/* License value: */}
                    Valor de la licencia
                  </label>
                  <input
                    type="text"
                    name="license_value"
                    className="form-control"
                    maxLength="500"
                    onChange={onChange8}
                    value={formData8.license_value}
                  />
                  <label>
                    {/* Delineation tax value */}
                    Valor del impuesto de delineación
                  </label>
                  <input
                    type="text"
                    name="delineation_tax_value"
                    className="form-control"
                    maxLength="500"
                    onChange={onChange8}
                    value={formData8.delineation_tax_value}
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform8"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row gx-3 mt-5">
            <div className="col">
              <div className="bg-white p-3">
                <h5 className="mb-3">
                  {/* Resolution */}
                  Generar Resolución
                </h5>
                <form onSubmit={onSubmit9}>
                  <label htmlFor="">
                    {/* Resolution number */}
                    Número de resolución
                  </label>
                  <input
                    type="text"
                    name="resolution_number"
                    className="form-control"
                    maxLength="500"
                    onChange={onChange9}
                    value={formData9.resolution_number? formData9.resolution_number: "" }
                    // value={resNum}
                  />
                  <label htmlFor="id_resolution_date">
                    {/* Resolution date */}
                    Fecha de Resolución
                  </label>
                  <input
                    type="date"
                    name="resolution_date"
                    className="form-control"
                    onChange={onChange9}
                    value={formData9.resolution_date? formData9.resolution_date: ""}
                  />
                  <button
                    className="btn-primary btn"
                    type="submit"
                    name="btnform8"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>

            <div className="col">
              <div className="p-3 border bg-white">
                <h5 className="mb-3">
                  {/* Resolution Notification Date */}
                  Resolución Fecha de notificación
                </h5>

                <form onSubmit={onSubmit10}>
                  <label htmlFor="">
                    {/* Resolution notification date: */}
                    Resolución Notificación Fecha
                  </label>
                  <input
                    type="date"
                    name="resolution_notification_date"
                    className="form-control"
                    onChange={onChange10}
                    value={formData10.resolution_notification_date}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary"
                    name="btnform9"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

TrackProgress.getInitialProps = async ({ query }) => {
  const { id } = query;
  
  // const res = await fetch('http://localhost:8000/api/resolution-num/');
  // const resNum = await res.json();

  const resp = await fetch(`http://127.0.0.1:8000/api/filesii/${id}/`);
  const dataa = await resp.json();

  return { 
    id,
    fileNum: dataa
  };
};

export default TrackProgress;
