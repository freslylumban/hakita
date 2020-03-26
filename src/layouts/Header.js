import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HakitaLogo from './../assets/images/logo_hakita.png';

class Header extends Component {
  render() {
    return (
      <div class="hakita-header">
        <div class="top-hakita-header">
          <div class="container">
            <div class="row">
              <nav class="navbar navbar-full-width">
                <div class="col-8 col-sm-8 col-md-6 col-lg-6">
                  <div class="side-left">
                    <i class="fas fa-envelope dark-blue2 mr-1"></i>
                    <p class="p-email">Email: <a href="">info@hakita.com</a></p>
                  </div>
                </div>
                <div class="col-4 col-sm-4 col-md-6 col-lg-6">
                  <div class="side-right text-right">
                    <Link to="/loginregister">
                      <p class="register-button">Register</p>
                    </Link>
                    <a href="https://fb.me/hakita.id" target="blank"><i class="ti-facebook dark-blue2"></i></a>
                    <a href="https://instagram.com/hakita.id" target="blank"><i class="ti-instagram dark-blue2"></i></a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="hakita-header-nav">
          <div class="container">
            <div class="row">
              <nav class="navbar navbar-expand-lg navbar-light navbar-full-width">
                <div class="col-8 col-sm-8 col-md-6 col-lg-6">
                  <a class="navbar-brand" href="#">
                    <img src={HakitaLogo} class="hakita-logo-nav" alt="" />
                  </a>
                </div>
                <div class="col-4 col-sm-4 col-md-6 col-lg-6 text-right">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Service</a>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/blog">
                          Blog
                        </Link>
                        {/* <a class="nav-link" href="">Blog</a> */}
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="ti-search"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
