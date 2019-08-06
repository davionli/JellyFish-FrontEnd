import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

const Login = () => {
  return (
    <MDBContainer>
    <br></br>
      <MDBRow>
        {/* <MDBCol></MDBCol> */}
        <MDBCol md="6">
          <MDBCard
            className="card-image"
            style={{
                backgroundImage:
                    "url(https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium/chess-white-king-in-check-mate-position-adrian-pope.jpg)",
                backgroundSize: "100% 100%",
                width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>LOG</strong>
                  <a href="#!" className="green-text font-weight-bold">
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput label="Your email" group icon="user" type="text" validate />
              <MDBInput label="Your password" group icon="lock" type="password" validate />
              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    LOG IN
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                Don't have an account?
                  <a href="/sign-up" className="green-text ml-1 font-weight-bold">
                    Sign up
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                  Forgot
                  <a href="#!" className="green-text ml-1 font-weight-bold">
                    Password?
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;