import React, { Component } from 'react';

export default class HomeBlogCard extends Component {
  render() {
    return (
      <div className="hakita-blog-card">
        <div className="container">
          <h1 className="title--top">Love Reading, Keep Reading</h1>
          <p className="subtitle--top">Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="blog--card">
                <div className="tag--card">
                  <p>Hakita News</p>
                </div>
                <div className="title--card">
                  <h3>Perlindungan Hukum Dalam Belanja Online</h3>
                  <p>2 weeks ago</p>
                </div>
                <a href="https://www.hakita.id/blog/perlindungan-belanja-online-penipuan-online/">Read more...</a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="blog--card">
                <div className="tag--card">
                  <p>Hakita News</p>
                </div>
                <div className="title--card">
                  <h3 className="title">Aturan Razia Secara Hukum</h3>
                  <p className="time">2 weeks ago</p>
                </div>
                <a href="https://www.hakita.id/blog/aturan-razia-secara-hukum/">Read more...</a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="blog--card">
                <div className="tag--card">
                  <p>Hakita News</p>
                </div>
                <div className="title--card">
                  <h3>Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?</h3>
                  <p>2 weeks ago</p>
                </div>
                <a href="https://www.hakita.id/blog/konvoi-mobil-motor-indonesia/">Read more...</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="divided--hr"/>
      </div>
    )
  }
}
