import Layout from '@/components/Layout'
import { fileAssign } from '@/redux/features/fileSlice';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const AssignAgent = ({ id, stars }) => {
    console.log("weew", id);
    console.log("start", stars);

  let dispatch = useDispatch();
  let router = useRouter();
    
  const [formData, setFormData] = useState({
    agent: "",
    id: id
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(fileAssign({ formData, toast, router, id }));
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
      <div className="row" style={{ height: "70vh" }}>
        <div> </div>

        <div className="justify-content-center d-flex align-item-center">
          <form method="post" className="" onSubmit={onSubmit}>
            <label className="mb-2 h5">Asignar radicado a un agente</label>

            <select
              name="agent"
              onChange={onChange}
              className="form-select"
              style={{ outline: "none" }}
              required
              defaultValue=""
            >
              <option value="" disabled>
                Seleccionar opción
              </option>
              {stars?.map((c, i) => (
                <option key={i} value={c.id}>
                  {c.user.username}
                </option>
              ))}
            </select>

            <button type="submit" className="w-100 btn btn-primary mt-4 ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

AssignAgent.getInitialProps = async ({ query }) => {
  const res = await fetch("http://127.0.0.1:8000/api/assign-retrieve/");
  const json = await res.json();
  
  const { id } = query;
  
    return {
        stars: json,
        id : id
    };
};

export default AssignAgent

