import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "@/redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Navv from "@/components/Navv";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { loading, error } = useSelector((stateData) => ({ ...stateData.auth }));
  const dispatch = useDispatch();
  const router = useRouter();


  useEffect(() => {
    console.log(error);
    error && toast.error(error);

    if (localStorage.getItem("profile")) {
      router.push('/dashboard')
    }
  }, [error]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    if (username && password) {
      console.log(username)
      console.log(password)
      dispatch(authLogin({ formData, toast, router }));
    }
    else {
      toast.error("Username or Password empty");
    }
  }

  const { username, password } = formData;

  return (
    <React.Fragment>
      <Navv/>
      <div className="container">
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
        <div className="row mt-1">
          <div className="offset-md-2 col-lg-4 col-md-7 rounded offset-lg-4 offset-md-3">
            <div className="border rounded bg-white mt-5">
              <div className="">
                <h3 className="pt-4 fw-bolder text-center">Iniciar sesión</h3>
              </div>

              <div className="px-2 ">
                <form onSubmit={onSubmit} className="p-3">
                  <div className="form-group py-2">
                    <div className="input-field">
                      <label htmlFor="" className="col-2 col-form-label">
                        Usuario:
                      </label>
                      <input
                        className="form-control w-100"
                        type="text"
                        placeholder="Ingresa tu usuario"
                        name="username"
                        onChange={onChange}
                        value={username}
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

                  <div className="d-grid gap-2 py-1">
                    <button className="btn btn-success" type="submit">
                      Iniciar sesión
                    </button>
                  </div>
                  <div className="text-center pt-4 text-muted">
                    No tienes una cuenta? <a href="#">Regístrate</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
