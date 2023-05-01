import Layout from "@/components/Layout";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyCreate } from "@/redux/features/fileSlice";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const VerifyFile = ({ id }) => {
  console.log(id, "routesvxxx");

  const [formData, setFormData] = useState({
    filev: id,
    Copia_de_cedula_del_propietario_pasaporte: false,
    Certificado_de_tradición_y_libertad: false,
    Copia_de_la_escritura: false,
    Paz_y_salvo_municipal: false,
    Copia_del_impuesto_predial: false,
    Certificado_catastral: false,
    Planos_arquitectónicos_y_estructurales: false,
    Planos_topográficos: false,
    CD_o_USB: false,
    Copia_de_la_tarjeta_profesional: false,
    Formulario_único_nacional: false,
    Certificado_de_delineación_y_comprobante_de_pago: false,
    Viabilidad_de_energía_y_acueducto: false,
    Viabilidad_de_alcantarillado_y_aseo: false,
    Certificado_de_sismo_resistencia: false,
    Memorias_de_calculo: false,
    Estudio_de_suelos: false,
    Peritaje_técnico: false,
    Plan_de_majo_ambiental: false,
    Plan_de_manejo_de_escombros: false,
    Plan_de_manejo_de_transito: false,
    Avaluó_comercial: false,
    Declaración_de_antigüedad: false,
    Declaración_de_no_bienes: false,
    Declaración_extrajuicio_de_sana_posesión: false,
    Copia_de_licencia: false,
    Certificado_de_nomenclatura: false,
    Certificado_del_sisben: false,
    Certificado_de_desplazado: false,
    Carta_de_aceptación_por_revisor: false,
    Poder_autenticado: false,
    Autorización_autenticada: false,
    Solicitud: false,
    Certificado_financiero: false,
    Contrato_de_promesa_de_compraventa: false,
  });

  let dispatch = useDispatch();
  let router = useRouter();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(verifyCreate({ formData, toast, id, router }));
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
      <div className="container">
        <form onSubmit={onSubmit} className="mt-5 container bg-white shadow">
          <div className="row gy-3 p-4">
            <div
              id="div_id_Copia_de_cedula_del_propietario_pasaporte"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Copia_de_cedula_del_propietario_pasaporte}
                name="Copia_de_cedula_del_propietario_pasaporte"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Copia_de_cedula_del_propietario_pasaporte"
                className="form-check-label"
              >
                Copia de cedula del propietario pasaporte{" "}
              </label>
            </div>
            <div
              id="div_id_Certificado_de_tradición_y_libertad"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_de_tradición_y_libertad}
                name="Certificado_de_tradición_y_libertad"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_de_tradición_y_libertad"
                className="form-check-label"
              >
                Certificado de tradición y libertad
              </label>
            </div>
            <div
              id="div_id_Copia_de_la_escritura"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Copia_de_la_escritura}
                name="Copia_de_la_escritura"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Copia_de_la_escritura"
                className="form-check-label"
              >
                Copia de la escritura
              </label>
            </div>
            <div
              id="div_id_Paz_y_salvo_municipal"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Paz_y_salvo_municipal}
                name="Paz_y_salvo_municipal"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Paz_y_salvo_municipal"
                className="form-check-label"
              >
                Paz y salvo municipal
              </label>
            </div>
            <div
              id="div_id_Copia_del_impuesto_predial"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Copia_del_impuesto_predial}
                name="Copia_del_impuesto_predial"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Copia_del_impuesto_predial"
                className="form-check-label"
              >
                Copia del impuesto predial
              </label>
            </div>
            <div
              id="div_id_Certificado_catastral"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_catastral}
                name="Certificado_catastral"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_catastral"
                className="form-check-label"
              >
                Certificado catastral
              </label>
            </div>
            <div
              id="div_id_Planos_arquitectónicos_y_estructurales"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Planos_arquitectónicos_y_estructurales}
                name="Planos_arquitectónicos_y_estructurales"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Planos_arquitectónicos_y_estructurales"
                className="form-check-label"
              >
                Planos arquitectónicos y estructurales
              </label>
            </div>
            <div
              id="div_id_Planos_topográficos"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Planos_topográficos}
                name="Planos_topográficos"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Planos_topográficos"
                className="form-check-label"
              >
                Planos topográficos
              </label>
            </div>
            <div id="div_id_CD_o_USB" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.CD_o_USB}
                name="CD_o_USB"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label htmlFor="id_CD_o_USB" className="form-check-label">
                CD o USB
              </label>
            </div>
            <div
              id="div_id_Copia_de_la_tarjeta_profesional"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Copia_de_la_tarjeta_profesional}
                name="Copia_de_la_tarjeta_profesional"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Copia_de_la_tarjeta_profesional"
                className="form-check-label"
              >
                Copia de la tarjeta profesional
              </label>
            </div>
            <div
              id="div_id_Formulario_único_nacional"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Formulario_único_nacional}
                name="Formulario_único_nacional"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Formulario_único_nacional"
                className="form-check-label"
              >
                Formulario único nacional
              </label>
            </div>
            <div
              id="div_id_Certificado_de_delineación_y_comprobante_de_pago"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={
                  formData.Certificado_de_delineación_y_comprobante_de_pago
                }
                name="Certificado_de_delineación_y_comprobante_de_pago"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_de_delineación_y_comprobante_de_pago"
                className="form-check-label"
              >
                Certificado de delineación y comprobante de pago
              </label>
            </div>
            <div
              id="div_id_Viabilidad_de_energía_y_acueducto"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Viabilidad_de_energía_y_acueducto}
                name="Viabilidad_de_energía_y_acueducto"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Viabilidad_de_energía_y_acueducto"
                className="form-check-label"
              >
                Viabilidad de energía y acueducto
              </label>
            </div>
            <div
              id="div_id_Viabilidad_de_alcantarillado_y_aseo"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Viabilidad_de_alcantarillado_y_aseo}
                name="Viabilidad_de_alcantarillado_y_aseo"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Viabilidad_de_alcantarillado_y_aseo"
                className="form-check-label"
              >
                Viabilidad de alcantarillado y aseo
              </label>
            </div>
            <div
              id="div_id_Certificado_de_sismo_resistencia"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_de_sismo_resistencia}
                name="Certificado_de_sismo_resistencia"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_de_sismo_resistencia"
                className="form-check-label"
              >
                Certificado de sismo resistencia
              </label>
            </div>
            <div
              id="div_id_Memorias_de_calculo"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Memorias_de_calculo}
                name="Memorias_de_calculo"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Memorias_de_calculo"
                className="form-check-label"
              >
                Memorias de calculo
              </label>
            </div>
            <div id="div_id_Estudio_de_suelos" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Estudio_de_suelos}
                name="Estudio_de_suelos"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Estudio_de_suelos"
                className="form-check-label"
              >
                Estudio de suelos
              </label>
            </div>
            <div id="div_id_Peritaje_técnico" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Peritaje_técnico}
                name="Peritaje_técnico"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label htmlFor="id_Peritaje_técnico" className="form-check-label">
                Peritaje técnico
              </label>
            </div>
            <div
              id="div_id_Plan_de_majo_ambiental"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Plan_de_majo_ambiental}
                name="Plan_de_majo_ambiental"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Plan_de_majo_ambiental"
                className="form-check-label"
              >
                Plan de majo ambiental
              </label>
            </div>
            <div
              id="div_id_Plan_de_manejo_de_escombros"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Plan_de_manejo_de_escombros}
                name="Plan_de_manejo_de_escombros"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Plan_de_manejo_de_escombros"
                className="form-check-label"
              >
                Plan de manejo de escombros
              </label>
            </div>
            <div
              id="div_id_Plan_de_manejo_de_transito"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Plan_de_manejo_de_transito}
                name="Plan_de_manejo_de_transito"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Plan_de_manejo_de_transito"
                className="form-check-label"
              >
                Plan de manejo de transito
              </label>
            </div>
            <div id="div_id_Avaluó_comercial" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Avaluó_comercial}
                name="Avaluó_comercial"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label htmlFor="id_Avaluó_comercial" className="form-check-label">
                Avaluó comercial
              </label>
            </div>
            <div
              id="div_id_Declaración_de_antigüedad"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Declaración_de_antigüedad}
                name="Declaración_de_antigüedad"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Declaración_de_antigüedad"
                className="form-check-label"
              >
                Declaración de antigüedad{" "}
              </label>
            </div>
            <div
              id="div_id_Declaración_de_no_bienes"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Declaración_de_no_bienes}
                name="Declaración_de_no_bienes"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Declaración_de_no_bienes"
                className="form-check-label"
              >
                Declaración de no bienes
              </label>
            </div>
            <div
              id="div_id_Declaración_extrajuicio_de_sana_posesión"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Declaración_extrajuicio_de_sana_posesión}
                name="Declaración_extrajuicio_de_sana_posesión"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Declaración_extrajuicio_de_sana_posesión"
                className="form-check-label"
              >
                Declaración extrajuicio de sana posesión
              </label>
            </div>
            <div id="div_id_Copia_de_licencia" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Copia_de_licencia}
                name="Copia_de_licencia"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Copia_de_licencia"
                className="form-check-label"
              >
                Copia de licencia
              </label>
            </div>
            <div
              id="div_id_Certificado_de_nomenclatura"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_de_nomenclatura}
                name="Certificado_de_nomenclatura"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_de_nomenclatura"
                className="form-check-label"
              >
                Certificado de nomenclatura{" "}
              </label>
            </div>
            <div
              id="div_id_Certificado_del_sisben"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_del_sisben}
                name="Certificado_del_sisben"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_del_sisben"
                className="form-check-label"
              >
                Certificado del sisben
              </label>
            </div>
            <div
              id="div_id_Certificado_de_desplazado"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_de_desplazado}
                name="Certificado_de_desplazado"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_de_desplazado"
                className="form-check-label"
              >
                Certificado de desplazado
              </label>
            </div>
            <div
              id="div_id_Carta_de_aceptación_por_revisor"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Carta_de_aceptación_por_revisor}
                name="Carta_de_aceptación_por_revisor"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Carta_de_aceptación_por_revisor"
                className="form-check-label"
              >
                Carta de aceptación por revisor
              </label>
            </div>
            <div id="div_id_Poder_autenticado" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Poder_autenticado}
                name="Poder_autenticado"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Poder_autenticado"
                className="form-check-label"
              >
                Poder autenticado
              </label>
            </div>
            <div
              id="div_id_Autorización_autenticada"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Autorización_autenticada}
                name="Autorización_autenticada"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Autorización_autenticada"
                className="form-check-label"
              >
                Autorización autenticada
              </label>
            </div>
            <div id="div_id_Solicitud" className="col-md-4 form-check">
              <input
                className="shadow-sm form-check-input"
                value={formData.Solicitud}
                name="Solicitud"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label htmlFor="id_Solicitud" className="form-check-label">
                Solicitud
              </label>
            </div>
            <div
              id="div_id_Certificado_financiero"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Certificado_financiero}
                name="Certificado_financiero"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Certificado_financiero"
                className="form-check-label"
              >
                Certificado financiero
              </label>
            </div>
            <div
              id="div_id_Contrato_de_promesa_de_compraventa"
              className="col-md-4 form-check"
            >
              <input
                className="shadow-sm form-check-input"
                value={formData.Contrato_de_promesa_de_compraventa}
                name="Contrato_de_promesa_de_compraventa"
                onChange={onChange}
                type="checkbox"
              ></input>
              <label
                htmlFor="id_Contrato_de_promesa_de_compraventa"
                className="form-check-label"
              >
                Contrato de promesa de compraventa
              </label>
            </div>

            <br />
            <button type="submit" className="btn btn-primary my-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

VerifyFile.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default VerifyFile;
