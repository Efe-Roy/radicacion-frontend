import Layout from "@/components/Layout";
import { getFiles, fileCreateStore } from "@/redux/features/fileSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const FileCreate = ({ ninjas, fileNum }) => {
  // console.log("fileNum",fileNum)

  const { profile_id, loading, error } = useSelector((stateData) => ({
    ...stateData.files,
  }));

  const [formData, setFormData] = useState({
    file_name: fileNum,
    file_type: "",
    headline: "",
    agent: null,
    passport: "",
    estate_reg: "",
    phone_number: "",
    email: "",
    completed: false,
    value_delineation: "",
    delineation_date: "",
    delineation_payment: "",
    consecutive_delineation: "",
    visited_by: "",
    State_type: "",
    delivery_date: null,
    notification_date: null,
    organisation: profile_id,
  });

  // console.log("file_num", file_num);

  const router = useRouter();
  let dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      const sd = JSON.parse(localStorage.getItem("profile")).is_agent;
      if (sd == true) {
        router.push("/files");
      }
    }

    dispatch(getFiles());
  }, [dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

      if (e.target.name == "State_type") {
        // console.log("correct", e.target.value);
        var id_notification_date = document.getElementById(
          "id_notification_date"
        );
        var id_delivery_date = document.getElementById("id_delivery_date");
        id_notification_date.disabled = e.target.value == 2 ? false : true;
        id_notification_date.value = "";
        if (!id_notification_date.disabled) {
          id_notification_date.focus();
        }
        id_delivery_date.disabled = e.target.value == 2 ? false : true;
        id_delivery_date.value = "";
        if (!id_delivery_date.disabled) {
          id_delivery_date.focus();
        }
      }
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(fileCreateStore({ formData, toast, router }));
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
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!loading && error?.length > 0 && (
        <h3 className="text-danger text-center mt-5">{error}</h3>
      )}
      {!loading && fileNum?.length > 0 && (
        <section className="container my-5 shadow bg-white text-dark p-2">
          <form className="row g-3 p-3" onSubmit={onSubmit}>
            <div id=" div_id_file_name" className="col-md-6">
              <label htmlFor="id_file_name" className="form-label">
                Radicado
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="file_name"
                onChange={onChange}
                value={formData.file_name ? formData.file_name : ""}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                Tipo de solicitud
              </label>
              <select
                name="file_type"
                onChange={onChange}
                className="form-select"
                style={{ outline: "none" }}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Option
                </option>
                {ninjas.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="id_headline" className="form-label">
                Titular
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="headline"
                onChange={onChange}
                value={formData.headline}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="id_passport" className="form-label">
                Cedule/Pasaporte
              </label>
              <input
                type="text"
                className="textinput form-control"
                required=""
                name="passport"
                onChange={onChange}
                value={formData.passport}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="id_estate_reg">
                Matricula Inmobiliaria
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="estate_reg"
                onChange={onChange}
                value={formData.estate_reg}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="id_phone_number" className="form-label">
                Telefono y/o Celular{" "}
              </label>
              <input
                type="text"
                className="form-control"
                required
                name="phone_number"
                onChange={onChange}
                value={formData.phone_number}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="id_email" className="form-label">
                Correo Electronico
              </label>
              <input
                type="email"
                className="form-control"
                required
                name="email"
                onChange={onChange}
                value={formData.email}
              />
            </div>

            <div id="div_id_value_delineation" className="col-md-6">
              <label htmlFor="id_value_delineation" className="form-label">
                Valor del certificado de delineacion{" "}
              </label>
              <input
                type="text"
                className="textinput form-control"
                required
                name="value_delineation"
                onChange={onChange}
                value={formData.value_delineation}
              />
            </div>

            <div id="div_id_delineation_payment" className="col-md-6">
              <label
                htmlFor="id_delineation_payment"
                className="form-label requiredField"
              >
                {/* Delineation payment{" "} */}
                Numero de Comprobante de pago de delineación
              </label>
              <input
                type="text"
                className="textinput form-control"
                required
                name="delineation_payment"
                onChange={onChange}
                value={formData.delineation_payment}
              />
            </div>

            <div id="div_id_consecutive_delineation" className="col-md-6">
              <label
                htmlFor="id_consecutive_delineation"
                className="form-label requiredField"
              >
                {/* Consecutive delineation */}
                consecutiva certificado delineación
              </label>
              <input
                type="text"
                className=" form-control"
                required
                name="consecutive_delineation"
                onChange={onChange}
                value={formData.consecutive_delineation}
              />
            </div>

            <div id="div_id_delineation_date" className="col-md-6">
              <label htmlFor="id_delineation_date" className="form-label">
                {/* Delineation date */}
                Fecha del cerficado de delineación
              </label>
              <input
                type="date"
                name="delineation_date"
                onChange={onChange}
                value={formData.delineation_date}
                className="form-control"
              />
            </div>

            <div id="div_id_visited_by" className="col-md-6">
              <label
                htmlFor="id_visited_by"
                className="form-label requiredField"
              >
                {/* Visited by */}
                Visitado por
              </label>
              <input
                type="text"
                className=" form-control"
                required
                name="visited_by"
                onChange={onChange}
                value={formData.visited_by}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Estado{" "}
              </label>
              <select
                name="State_type"
                id="id_State_type"
                onChange={onChange}
                className="form-select"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  ---------
                </option>
                <option value="1">Activo</option>
                <option value="2"> En Proceso</option>
                <option value="3">No Aplica</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="id_phone_number" className="form-label">
                {/* Billboard Delivery Date{" "} */}
                Datos de entrega de vallas publicitarias
              </label>
              <input
                id="id_delivery_date"
                type="date"
                className="form-control"
                disabled
                name="delivery_date"
                onChange={onChange}
                value={formData.delivery_date || ""}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label" htmlFor="id_estate_reg">
                {/* Date of Notification */}
                Fecha de notificación
              </label>
              <input
                id="id_notification_date"
                type="date"
                className="form-control"
                disabled
                name="notification_date"
                onChange={onChange}
                value={formData.notification_date || ""}
              />
            </div>
            <div className="col-md-4 d-none">
              <input
                className="form-control"
                name="organisation"
                onChange={onChange}
                value={formData.organisation ? formData.organisation : ""}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn w-100 btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </section>
      )}
    </Layout>
  );
};

export default FileCreate;

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/file-type");
  const data = await res.json();

  const ress = await fetch("http://127.0.0.1:8000/api/file-num");
  const dataa = await ress.json();

  return {
    props: {
      ninjas: data,
      fileNum: dataa
    },
  };
};
