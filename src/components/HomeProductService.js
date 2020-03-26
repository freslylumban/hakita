import React, { Component } from 'react';
import Contract from './../assets/images/icons/contract_ps.png';
import Permissions from './../assets/images/icons/permission_ps.png';
import Agreement from './../assets/images/icons/agreement_ps.png';

export default class HomeProductService extends Component {
  render() {
    return (
      <div className="hakita-card-prodserv">
        <div className="container" id="service">
          <h1 className="title--top">Product and Services</h1>
          <p className="subtitle--top">Apapun kebutuhan legal Anda, biar HAKITA yang urus.</p>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="img--card">
                  <img src={Contract} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Jasa Pembuatan PT</h5>
                  <p className="card-text">Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="img--card">
                  <img src={Permissions} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Otomasi Dokumen</h5>
                  <p className="card-text">Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <div className="img--card">
                  <img src={Agreement} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Sistem Manajemen Dokumen</h5>
                  <p className="card-text">Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
