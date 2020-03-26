import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div class="hakita-footer">
        <div class="top-footer-hakita" id="about">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                <h4>About us</h4>
                <p>HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.</p>
              </div>
              <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                <h4>Contact Us</h4>
                <p>Mail: <a href="">info@hakita.com</a> Alamat: Jl. Boulevard Barat Raya No.27, RW. 9, Kelapa Gading Barat - Jakarta Utara 14240</p>
                <div class="socmed-hakita">
                  <a href="https://fb.me/hakita.id" target="blank"><i class="ti-facebook"></i></a>
                  <a href="https://instagram.com/hakita.id" target="blank"><i class="ti-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="footer-hakita-copyright">
          <p>© PT Hakita Indonesia, 2020</p>
        </div>
      </div>
    )
  }
}

export default Footer;
