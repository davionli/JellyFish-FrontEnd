import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/DashBoard";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  state = {

  };
  


  render() {

    const { collapseID } = this.state;

    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <MDBContainer>
              <Route exact path="/" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/dashboard" component={Dashboard} />
            </MDBContainer>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
