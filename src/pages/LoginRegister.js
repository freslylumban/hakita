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
        <div className="background-login-register"></div>
          <div className="body-login-register">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="side-left">
                    <div className="logo-hakita">
                      <img src="./images/logo_hakita.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="side-right">
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
