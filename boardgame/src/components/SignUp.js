import axios from 'axios';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

<<<<<<< HEAD
const SignUp = () => {
  return (
    <MDBContainer>
    <br></br>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol md="6">
          <MDBCard
            className="card-image"
            style={{
=======
class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

  }

  usernameHandler(event) {
    this.setState(
      {
        username: event.target.value
      }
    )
    console.log(this.state.username)
  }
  passwordHandler(event) {
    this.setState(
      {
        password: event.target.value
      }
    )
    console.log(this.state.username)
  }

  handlesubmit(event) {
    axios.post('http://localhost:8080/createaccount', {
      username: this.state.username,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
        if (!response.data) {
          alert("wrong username or password")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("adfadf");
  }
  render() {

    return (
      <div>
        <br></br>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol md="6">
            <MDBCard
              className="card-image"
              style={{
>>>>>>> f456a0026e5b55f70fcbabb2f3fa246429231ffd
                backgroundImage:
                  "url(https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium/chess-white-king-in-check-mate-position-adrian-pope.jpg)",
                backgroundSize: "100% 100%",
                width: "28rem"
              }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
                  <h3 className="white-text mb-5 mt-4 font-weight-bold">
                    <strong>SIGN</strong>
                    <a href="#!" className="green-text font-weight-bold">
                      <strong> UP</strong>
                    </a>
                  </h3>
                </div>
                <MDBInput label="Your email" group icon="user" type="text" validate onChange={this.usernameHandler} />
                <MDBInput label="Your password" group icon="lock" type="password" validate onChange={this.passwordHandler}/>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="success"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={this.handlesubmit}
                    >
                      SIGN UP
                  </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md="12">
                  <p className="font-small white-text d-flex justify-content-end">
                    Already have an accout?
                  <a href="/" className="green-text ml-1 font-weight-bold">
                      Log in
                  </a>
<<<<<<< HEAD
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
=======
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </div>
    );
  }

>>>>>>> f456a0026e5b55f70fcbabb2f3fa246429231ffd
}

export default SignUp;