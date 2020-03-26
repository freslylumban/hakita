import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HakitaLogo from './../assets/images/logo_hakita.png';

class Header extends Component {
  render() {
    return (
      <div className="hakita-header">
        <div className="top-hakita-header">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-full-width">
                <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                  <div className="side-left">
                    <i className="fas fa-envelope dark-blue2 mr-1"></i>
                    <p className="p-email">Email: <a href="mailto:info@hakita.com">info@hakita.com</a></p>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-6 col-lg-6">
                  <div className="side-right text-right">
                    <Link to="/loginregister">
                      <p className="register-button">Register</p>
                    </Link>
                    <a href="https://fb.me/hakita.id" target="blank"><i className="ti-facebook dark-blue2"></i></a>
                    <a href="https://instagram.com/hakita.id" target="blank"><i className="ti-instagram dark-blue2"></i></a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="hakita-header-nav">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light navbar-full-width">
                <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                  <Link to="/" className="navbar-brand">
                    <img src={HakitaLogo} className="hakita-logo-nav" alt="" />
                  </Link>
                </div>
                <div className="col-4 col-sm-4 col-md-6 col-lg-6 text-right">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/#about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/#service">
                          Service
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti-search"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <input type="search" name="" id="" placeholder="Start searching" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
