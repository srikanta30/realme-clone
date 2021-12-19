import { useState } from "react";
import Modal from "react-modal";
function SignUp({ state, setState }) {

  const google = () => {
    window.open(`${process.env.REACT_APP_SERVER}/auth/google`, "_self");     
  };

  return (
    <>
      <div>
        <Modal
          isOpen={state}
          onRequestClose={() => setState(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 1020,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(196, 196, 196, 0.69)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              background: "white",
              width: "23rem",
              height: "78vh",
              overflowY: "auto",
              position: "relative",
              border: "1px solid white",
              borderRadius: "0.9rem",
              marginTop: "-25vh",
            },
          }}
        >
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>realme</h3>
          <p style={{ textAlign: "center", color: "#FFC625" }}>
            Welcome to realme
          </p>
          <div style={{ width: "90%", marginLeft: "5%" }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Mobile Number/Email"
              style={{
                width: "100%",
                background: "#F5F5F5",
                height: "38px",
                outline: "none",
                border: "none",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter verification code"
                style={{
                  width: "68%",
                  background: "#F5F5F5",
                  height: "38px",
                  outline: "none",
                  border: "none",
                  marginTop: "5px",
                }}
              />
              <button
                style={{
                  background: "#FFC625",
                  width: "30%",
                  height: "35px",
                  borderRadius: "5px",
                  border: "none",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                Get Code
              </button>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              style={{
                width: "100%",
                background: "#F5F5F5",
                height: "38px",
                outline: "none",
                border: "none",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            />
            {/* <p
              style={{ textAlign: "left", color: "#CCCCCC", fontSize: "small" }}
            >
              I’ve read and agree to{" "}
              <span style={{ color: "#FFC625" }}>Account user agreement</span>
            </p> */}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              for="vehicle1"
              style={{ textAlign: "left", color: "#CCCCCC", fontSize: "small" }}
            >
              {" "}
              I’ve read and agree to{" "}
              <span style={{ color: "#FFC625" }}>Account user agreement</span>
            </label>
            <br />
            <button
              style={{
                background: "#FFC625",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                color: "white",
                marginTop: "5px",
              }}
            >
              Sign up
            </button>
          </div>
          <p style={{ textAlign: "center", color: "#666666" }}>
            or sign in using
          </p>
          <div style={{ marginTop: "-15px" }}>
            <img
              style={{ marginLeft: "40%" }}
              src="Assets/2702602 1.png"
              alt=""
            onClick={google} />
            <img style={{ marginLeft: "4%" }} src="Assets/Vector.png" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <p style={{ fontSize: "small" }}>
              Already a member ?
              <span style={{ color: "#FFC625", fontSize: "small" }}>
                Sign In
              </span>
            </p>
            <p style={{ color: "#FFC625", fontSize: "small" }}>
              Privacy Policy
            </p>
          </div>
          <p style={{ textAlign: "center", fontSize: "small" }}>
            HeyTap provides account services for realme users
          </p>
        </Modal>
      </div>
    </>
  );
}
export default SignUp;
