import React, { Component } from 'react'

export default class HomeFAQ extends Component {
  render() {
    return (
      <div class="hakita-question">
        <div class="container">
          <h1 class="title--top">Have a question?</h1>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="question-card">
                <div class="faq--icon">
                  <div class="box-icon">
                    <i class="ti-email"></i>
                  </div>
                </div>
                <div class="tag--text">
                  <p><a href="">info@hakita.com</a></p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="question-card">
                <div class="faq--icon">
                  <div class="box-icon">
                    <i class="ti-location-pin"></i>
                  </div>
                </div>
                <div class="tag--text">
                  <p>Jl. Boulevard Barat Raya No. 27, <br />
                    Kelapa Gading Barat, <br />
                    Jakarta Utara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
