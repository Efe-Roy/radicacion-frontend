import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { changePassword } from "@/redux/features/authSlice";


const ChangePassword = () => {
    const [formData, setFormData] = useState({
        new_password1: "",
        new_password2: "",
    });

    const { loading, error } = useSelector((stateData) => ({
        ...stateData.auth,
    }));
    const dispatch = useDispatch();
    const router = useRouter();

    const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (new_password1 && new_password2) {
      // console.log(new_password1);
      // console.log(new_password2);
      dispatch(changePassword({ formData, toast, router }));
    } else {
        toast.error("new_password1 or Password empty");
    }
    }

    const { new_password1, new_password2 } = formData;

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
        <div className="row mt-1">
          <div className="offset-md-2 col-lg-4 col-md-7 rounded offset-lg-4 offset-md-3">
            <div className="shadow-sm rounded bg-white mt-5">
              <div className="">
                <h3 className="pt-4 fw-bolder text-center">Cambiar Contraseña</h3>
              </div>

              <div className="px-2 ">
                <form onSubmit={onSubmit} className="p-3">
                  <div className="form-group py-2">
                    <div className="input-field">
                      <label htmlFor="" className="col-form-label">
                        Ingresar nueva contraseña
                      </label>
                      <input
                        className="form-control w-100"
                        type="password"
                        placeholder="Ingresar contraseña"
                        name="new_password1"
                        onChange={onChange}
                        value={new_password1}
                      />
                    </div>
                  </div>
                  <div className="form-group py-1 pb-2">
                    <div className="input-field">
                      <label htmlFor="" className="col-form-label">
                        Confirmar contraseña
                      </label>
                      <input
                        className="form-control w-100"
                        type="password"
                        placeholder="Confirmar contraseña"
                        name="new_password2"
                        onChange={onChange}
                        value={new_password2}
                      />
                    </div>
                  </div>

                  <div className="d-grid gap-2 py-1">
                    <button className="btn btn-info" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChangePassword