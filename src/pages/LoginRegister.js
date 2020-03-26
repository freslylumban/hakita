import React, { Component } from 'react';
import Login from './../components/Login';
import Register from './../components/Register';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadView: 2,
      typeLoginPassword: "password",
      typeRegisterPassword: "password"
    }
  }
  changeView = (View) => {
    this.setState({
      loadView: View
    });
  }
  passwordView = (passView) => {
    if (passView === 1) {
      this.setState({
        typeLoginPassword: "text",
        typeRegisterPassword: "text"
      })
    } else {
      this.setState({
        typeLoginPassword: "password",
        typeRegisterPassword: "password"
      })
    }
  }
  render() {
    return (
      <div>
        <div class="background-login-register"></div>
          <div class="body-login-register">
            <div class="container-fluid">
              <div class="row">
                <div class="col-6">
                  <div class="side-left">
                    <div class="logo-hakita">
                      <img src="./images/logo_hakita.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="side-right">
                    {
                      parseInt(this.state.loadView) === parseInt(1) ? 
                      <Login typeLoginPassword={this.state.typeLoginPassword} changeView={this.changeView} passwordView={this.passwordView} /> : 
                      <Register typeRegisterPassword={this.state.typeRegisterPassword} changeView={this.changeView} passwordView={this.passwordView} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LoginRegister;
