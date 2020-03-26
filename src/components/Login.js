import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="loginside">
        <div className="box-img">
          <img src="./images/user-icon.png" alt="" />
        </div>
        <div className="box-form">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="usernameField">
                  <i className="ti-user"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="usernameField" />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="ti-lock"></i>
                </span>
              </div>
              <input type={this.props.typeLoginPassword} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordField" />
              <div className="input-group-append">
                <span className="input-group-text" id="passwordField">
                  {
                    this.props.typeLoginPassword === "password" ? 
                    <button className="unlock-password" onClick={() => this.props.passwordView(1)}>
                      <i className="ti-eye"></i>
                    </button> : 
                    <button className="unlock-password" onClick={() => this.props.passwordView(2)}>
                      <i className="ti-lock"></i>
                    </button>
                  }
                </span>
              </div>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="rememberMeLogin" />
              <label className="form-check-label dark-blue2" for="rememberMeLogin">Remember Me</label>
            </div>
            <Link to="/">
              <button type="button" className="btn btn--hakita">Login</button>
            </Link>
          <div className="forgotpassword-register">
            <button><p className="forgotpassword">Forgot password?</p></button>
            <button onClick={() => this.props.changeView(2)}><p className="register">Not a Member?</p></button>
          </div>
        </div>
      </div>
    )
  }
}
