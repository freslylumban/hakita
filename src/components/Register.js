import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className="registerside">
        <h1>Register Account Form</h1>
        <div className="box-form">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="fullnameField">
                <i className="ti-id-badge"></i>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Fullname" aria-label="Fullname" aria-describedby="fullnameField" />
          </div>
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
              <span className="input-group-text" id="emailField">
                <i className="ti-email"></i>
              </span>
            </div>
            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="emailField" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="ti-lock"></i>
              </span>
            </div>
            <input type={this.props.typeRegisterPassword} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="passwordField" />
            <div className="input-group-append">
              <span className="input-group-text" id="passwordField">
                {
                  this.props.typeRegisterPassword === "password" ? 
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
          <button type="button" className="btn btn--hakita">Register</button>
          <div className="forgotpassword-register">
            <button onClick={() => this.props.changeView(1)}><p className="login">Have an Account?</p></button>
          </div>
        </div>
      </div>
    )
  }
}
