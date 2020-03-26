import React, { Component } from 'react'

export default class HomeMediaObject extends Component {
  render() {
    return (
      <div className="hakita-media-object">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="media">
                <img src="./images/icons/user_needs.png" className="align-self-start mr-3 img--media" alt="" />
                <div className="media-body">
                  <h5 className="title--media">We Meet People’s Needs</h5>
                  <p>Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="media">
                <img src="./images/icons/protect.png" className="align-self-start mr-3 img--media" alt="" />
                <div className="media-body">
                  <h5 className="title--media">We Provide Protection</h5>
                  <p>Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="media">
                <img src="./images/icons/trust.png" className="align-self-start mr-3 img--media" alt="" />
                <div className="media-body">
                  <h5 className="title--media">We Are Trustworthy</h5>
                  <p>HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
