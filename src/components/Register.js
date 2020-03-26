import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div class="registerside">
        <h1>Register Account Form</h1>
        <div class="box-form">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="fullnameField">
                <i class="ti-id-badge"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Fullname" aria-label="Fullname" aria-describedby="fullnameField" />
          </div>
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
              <span class="input-group-text" id="emailField">
                <i class="ti-email"></i>
              </span>
            </div>
            <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="emailField" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="ti-lock"></i>
              </span>
            </div>
            <input type={this.props.typeRegisterPassword} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordField" />
            <div class="input-group-append">
              <span class="input-group-text" id="passwordField">
                {
                  this.props.typeRegisterPassword === "password" ? 
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
          <button type="button" class="btn btn--hakita">Register</button>
          <div class="forgotpassword-register">
            <button onClick={() => this.props.changeView(1)}><p class="login">Have an Account?</p></button>
          </div>
        </div>
      </div>
    )
  }
}
