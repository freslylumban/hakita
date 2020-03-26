import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div class="loginside">
        <div class="box-img">
          <img src="./images/user-icon.png" alt="" />
        </div>
        <div class="box-form">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="usernameField">
                  <i class="ti-user"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="usernameField" />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="ti-lock"></i>
                </span>
              </div>
              <input type={this.props.typeLoginPassword} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordField" />
              <div class="input-group-append">
                <span class="input-group-text" id="passwordField">
                  {
                    this.props.typeLoginPassword === "password" ? 
                    <button class="unlock-password" onClick={() => this.props.passwordView(1)}>
                      <i class="ti-eye"></i>
                    </button> : 
                    <button class="unlock-password" onClick={() => this.props.passwordView(2)}>
                      <i class="ti-lock"></i>
                    </button>
                  }
                </span>
              </div>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="rememberMeLogin" />
              <label class="form-check-label dark-blue2" for="rememberMeLogin">Remember Me</label>
            </div>
            <Link to="/">
              <button type="button" class="btn btn--hakita">Login</button>
            </Link>
          <div class="forgotpassword-register">
            <button><p class="forgotpassword">Forgot password?</p></button>
            <button onClick={() => this.props.changeView(2)}><p class="register">Not a Member?</p></button>
          </div>
        </div>
      </div>
    )
  }
}
