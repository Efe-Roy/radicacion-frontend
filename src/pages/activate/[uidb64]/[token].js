import React from "react";
import axios from "axios";
import { GiStairsGoal } from "react-icons/gi";
import Link from "next/link";

const CheckItConfirm = ({ token, uidb64 }) => {
  const [message, setMessage] = React.useState(null)
  React.useEffect(() => {
    axios
      .post(`http://localhost:8000/api/agent/activate/${uidb64}/${token}`)
      .then((response) => {
        console.log("Resposne Activate", response.data);
        setMessage(response.data)
      }) .catch(error => {
      console.log(error)
    });
  }, []);
  // console.log("messagevcv", message.message);

  return (
    <div>
      <section className="text-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              {message && 
                <div className="" style={{display: "inline-block"}}>
                  <h3>
                    <GiStairsGoal className="display-3 text-success" />
                    <span className="d-block mt-4">{message.message}!</span>
                  </h3>
                  <p>
                    You can now login and begin to perform all your task delegated to you
                  </p>
                  <Link href="/login" className="btn btn-primary btn-lg">
                    Login
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CheckItConfirm.getInitialProps = async ({ query }) => {
  const { uidb64 } = query;
  const { token } = query;

  // const resp = await fetch(`http://127.0.0.1:8000/api/track-detail/${id}/`);
  // const data = await resp.json();

  return {
    uidb64,
    token,
  };
};

export default CheckItConfirm;
