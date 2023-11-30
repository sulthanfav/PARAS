import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import './registerPersonalpage2.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid";
// import LogoImage from './logo.tsx';

// Definisi komponen RegisterPersonalPage2 sebagai functional component
const RegisterPersonalPage2: Component = () => {
    // Mengembalikan elemen JSX
    return (
        <>
            {/* Bagian navigasi */}
            <div class='body'>
                <nav>
                    {/* Link untuk kembali ke dashboard */}
                    <A href="/dashboard">
                        {/* Logo */}
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </A>
                    {/* Tombol navigasi */}
                    <div class='button-navigation-bar'>
                        {/* Tombol Daftar */}
                        <button class='btn-daftar'> Daftar </button>
                        {/* Link ke RegisterUMKMPage1 - belum digunakan */}
                        <a href="/RegisterUMKMPage1"></a>
                        {/* Tombol Masuk */}
                        <button class='btn-masuk'> Masuk </button>
                    </div>
                </nav>
                {/* Konten utama */}
                <div class='content'>
                    {/* Bagian latar belakang registrasi */}
                    <div class='background-regis-1'>
                        <div class='registrasipage2UMKM'>
                            {/* Headline registrasi UMKM */}
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis UMKM Anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                            {/* Formulir registrasi */}
                            <div class='form-regist-page2'>
                                <div class='cont-input-form'>
                                    <label>Nomor Kontak</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)'/>
                                </div>
                                <div class='cont-input-form'>
                                    <label>Nomor Kontak</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)'/>
                                </div>
                                <div class='cont-input-form'>
                                    <label>Nomor Kontak</label>
                                    <div class="paste-button">
                                        <button class="button-dpdown">Pilih jenis usaha Anda di sini ▼</button>
                                        <div class="dropdown-content">
                                            <a id="first" href="#">Produk Makanan dan Minuman</a>
                                            <a id="second" href="#">Produk Fashion dan Aksesoris</a>
                                            <a id="third" href="#">Produk Kecantikan dan Perawatan</a>
                                            <a id="fourth" href="#">Produk Rumah Tangga</a>
                                            <a id="fifth" href="#">Produk Hobi dan Koleksi</a>
                                            <a id="sixth" href="#">Produk Perlengkapan Anak</a>
                                            <a id="seventh" href="#">Produk Pertanian dan Perkebunan</a>
                                            <a id="eighth" href="#">Produk Seni dan Kreativitas</a>
                                            <a id="nineth" href="#">Produk Kerajinan Kayu dan Logam</a>
                                            <a id="tenth" href="#">Produk Lingkungan dan Sustainable</a>
                                            <a id="eleventh" href="#">Produk Peternakan dan Petshop</a>
                                        </div>
                                    </div>
                                </div>
                                <div class='cont-input-form-long'>
                                    <label>Nomor Kontak</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)'/>
                                </div>
                                <div class='cont-input-form'>
                                    <label>Nomor Kontak</label>
                                    <div class="paste-button">
                                        <button class="button-dpdown">Pilih jenis usaha Anda di sini ▼</button>
                                        <div class="dropdown-content">
                                            <a id="first" href="#">Produk Makanan dan Minuman</a>
                                            <a id="second" href="#">Produk Fashion dan Aksesoris</a>
                                            <a id="third" href="#">Produk Kecantikan dan Perawatan</a>
                                            <a id="fourth" href="#">Produk Rumah Tangga</a>
                                            <a id="fifth" href="#">Produk Hobi dan Koleksi</a>
                                            <a id="sixth" href="#">Produk Perlengkapan Anak</a>
                                            <a id="seventh" href="#">Produk Pertanian dan Perkebunan</a>
                                            <a id="eighth" href="#">Produk Seni dan Kreativitas</a>
                                            <a id="nineth" href="#">Produk Kerajinan Kayu dan Logam</a>
                                            <a id="tenth" href="#">Produk Lingkungan dan Sustainable</a>
                                            <a id="eleventh" href="#">Produk Peternakan dan Petshop</a>
                                        </div>
                                    </div>
                                </div>
                                <div class='btn-next'>
                                    <button class = 'btn-back-page'>
                                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                                        <span>Halaman Sebelumnya</span>
                                    </button>
                                    <button class = 'btn-buat-akun'>Buat Akun</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Ekspor komponen sebagai default
export default RegisterPersonalPage2;
