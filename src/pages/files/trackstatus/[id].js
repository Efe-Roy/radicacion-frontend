import React from 'react';
import Layout from '@/components/Layout'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { completedStatus } from '@/redux/features/fileSlice';
import { ToastContainer, toast } from "react-toastify";


const TrackStatus = ({ data, id, dataValue }) => {
  let [toggle, setToggle] = React.useState(dataValue.completed);
  // console.log("dataValue", toggle)

  let dispatch = useDispatch();

  const { is_organisor, is_support, is_agent } = useSelector((stateData) => ({
    ...stateData.auth,
  }));

  let handleClick =()=>{
    setToggle(!toggle)

    let formData = {
      "completed": !toggle
    }

    dispatch(completedStatus({formData, id, toast}))
    // console.log(formData)
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
      <div className="container px-5">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <h1
              className="fw-bold"
              style={{ borderLeft: "10px solid #fec500" }}
            >
              {/* EVENTS */}
              EVENTOS
            </h1>
            {is_organisor && 
              <div onClick={handleClick}>
                {toggle ? <BsToggleOn className='fs-1'/> : <BsToggleOff className='fs-1'/>}
              </div>
            }
          </div>
          <div className="col-md-12">
            <div className="card card-white mb-5 rounded p-2 shadow-sm">
              <div className="card-body">
                <ul className="list-unstyled">
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">En forma de revisión</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Bajo revisión:
                        </span>
                        <span className="btn-gray">
                          {data.underReview ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          En la fecha de revisión:
                        </span>
                        <span className="btn-gray">
                          {data.underReview_date
                            ? data.underReview_date
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Formulario de revisión </h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Revisado:
                        </span>
                        <span className="btn-gray">
                          {data.review ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de revisión:
                        </span>
                        <span className="btn-gray">
                          {data.review_date ? data.review_date : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">
                        Usuarios del formulario de observación
                      </h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Observación:
                        </span>
                        <span className="btn-gray">
                          {data.observation ? data.observation : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de observación:
                        </span>
                        <span className="btn-secondary">
                          {data.observation_date
                            ? data.observation_date
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Formulario de notificación</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          ¿Recibiste notificación:
                        </span>
                        <span className="btn-gray">
                          {data.is_notified ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de notificación:
                        </span>
                        <span className="btn-gray">
                          {data.is_notified_date
                            ? data.is_notified_date
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Notificación Observación:
                        </span>
                        <span className="btn-gray">
                          {data.is_notified_observation
                            ? data.is_notified_observation
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">formulario de documento</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Documento correcto:
                        </span>
                        <span className="btn-gray">
                          {data.correct_document ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha del documento:
                        </span>
                        <span className="btn-gray">
                          {data.correct_document_date
                            ? data.correct_document_date
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Acto de procedimiento</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Nombre del archivo:
                        </span>
                        <span className="btn-gray">
                          {data.file_name ? data.file_name : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Número de acto de proceso:
                        </span>
                        <span className="btn-gray">
                          {data.process_act_num ? data.process_act_num : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Número de acto de proceso fecha:
                        </span>
                        <span className="btn-gray">
                          {data.process_act_num_date
                            ? data.process_act_num_date
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Liquidation value:
                        </span>
                        <span className="btn-gray">
                          {data.liquidation_value
                            ? data.liquidation_value
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Notificación personal</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          ¿Recibiste Notificación:
                        </span>
                        <span className="btn-gray">
                          {data.is_personal_notified ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de notificación:
                        </span>
                        <span className="btn-gray">
                          {data.is_personal_notified_date
                            ? data.is_personal_notified_date
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Notificación Observación:
                        </span>
                        <span className="btn-gray">
                          {data.is_personal_notified_observation
                            ? data.is_personal_notified_observation
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Pago</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Pago:
                        </span>
                        <span className="btn-gray">
                          {data.payment ? "True" : "False"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de estado de pago:
                        </span>
                        <span className="btn-gray">
                          {data.payment_status_date
                            ? data.payment_status_date
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Detalles del pago</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Número de recibo de pago:
                        </span>
                        <span className="btn-gray">
                          {data.payment_receipt_number
                            ? data.payment_receipt_number
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de estado de pago:
                        </span>
                        <span className="btn-gray">
                          {data.payment_status_date
                            ? data.payment_status_date
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de recibo de pago:
                        </span>
                        <span className="btn-gray">
                          {data.payment_receipt_date
                            ? data.payment_receipt_date
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Valor de la licencia:
                        </span>
                        <span className="btn-gray">
                          {data.license_value ? data.license_value : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Valor fiscal de delineación:
                        </span>
                        <span className="btn-gray">
                          {data.delineation_tax_value
                            ? data.delineation_tax_value
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Resolución</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Número de resolución:
                        </span>
                        <span className="btn-gray">
                          {data.resolution_number
                            ? data.resolution_number
                            : "Null"}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Fecha de Resolución:
                        </span>
                        <span className="btn-gray">
                          {data.resolution_date ? data.resolution_date : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    className="position-relative mb-3 pb-3"
                    style={{ borderBottom: "1px solid #eee" }}
                  >
                    <div className="">
                      <h5 className="mb-4">Resolución Notificación Fecha</h5>
                      <div className="mb-3">
                        <span className="mx-2 d-block d-sm-inline-block mb-2 mb-sm-0">
                          Resolución Notificación Fecha:
                        </span>
                        <span className="btn-gray">
                          {data.resolution_notification_date
                            ? data.resolution_notification_date
                            : "Null"}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

TrackStatus.getInitialProps = async ({ query }) => {
  const { id } = query;

  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/track-detail/${id}/`)
  // const resp = await fetch(`http://127.0.0.1:8000/api/track-detail/${id}/`);
  const data = await resp.json();

  // const res = await fetch(`http://127.0.0.1:8000/api/completed/${id}/`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/completed/${id}/`)
  const dataValue = await res.json();

  return { id, data, dataValue };
};

export default TrackStatus