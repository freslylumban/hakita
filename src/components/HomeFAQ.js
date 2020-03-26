import React, { Component } from 'react'

export default class HomeFAQ extends Component {
  render() {
    return (
      <div className="hakita-question">
        <div className="container" id="contact">
          <h1 className="title--top">Have a question?</h1>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="question-card">
                <div className="faq--icon">
                  <div className="box-icon">
                    <i className="ti-email"></i>
                  </div>
                </div>
                <div className="tag--text">
                  <p><a href="mailto:info@hakita.com">info@hakita.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="question-card">
                <div className="faq--icon">
                  <div className="box-icon">
                    <i className="ti-location-pin"></i>
                  </div>
                </div>
                <div className="tag--text">
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
