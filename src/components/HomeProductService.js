import React, { Component } from 'react';
import Contract from './../assets/images/icons/contract_ps.png';
import Permissions from './../assets/images/icons/permission_ps.png';
import Agreement from './../assets/images/icons/agreement_ps.png';

export default class HomeProductService extends Component {
  render() {
    return (
      <div class="hakita-card-prodserv">
        <div class="container">
          <h1 class="title--top">Product and Services</h1>
          <p class="subtitle--top">Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <div class="img--card">
                  <img src={Contract} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Jasa Pembuatan PT</h5>
                  <p class="card-text">Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <div class="img--card">
                  <img src={Permissions} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Otomasi Dokumen</h5>
                  <p class="card-text">Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <div class="img--card">
                  <img src={Agreement} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Sistem Manajemen Dokumen</h5>
                  <p class="card-text">Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
