import React, { Component } from 'react';

export default class HomeBlogCard extends Component {
  render() {
    return (
      <div class="hakita-blog-card">
        <div class="container">
          <h1 class="title--top">Love Reading, Keep Reading</h1>
          <p class="subtitle--top">Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.</p>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="blog--card">
                <div class="tag--card">
                  <p>Hakita News</p>
                </div>
                <div class="title--card">
                  <h3>Perlindungan Hukum Dalam Belanja Online</h3>
                  <p>2 weeks ago</p>
                </div>
                <a href="">Read more...</a>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="blog--card">
                <div class="tag--card">
                  <p>Hakita News</p>
                </div>
                <div class="title--card">
                  <h3 class="title">Aturan Razia Secara Hukum</h3>
                  <p class="time">2 weeks ago</p>
                </div>
                <a href="">Read more...</a>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="blog--card">
                <div class="tag--card">
                  <p>Hakita News</p>
                </div>
                <div class="title--card">
                  <h3>Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?</h3>
                  <p>2 weeks ago</p>
                </div>
                <a href="">Read more...</a>
              </div>
            </div>
          </div>
        </div>
        <hr class="divided--hr"/>
      </div>
    )
  }
}
