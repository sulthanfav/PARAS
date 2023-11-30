// Import statement untuk mengimpor modul yang diperlukan
import { Component, createSignal } from 'solid-js';
import { A } from '@solidjs/router';
import './registerPersonalpage1.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid"; // Komponen Icon dari modul solid
// Import LogoImage dari file logo.tsx - belum digunakan
// import LogoImage from './logo.tsx';

// Definisi komponen RegisterPersonalPage1 sebagai functional component
const RegisterPersonalPage1: Component = () => {
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
                        <div class='registrasipage1UMKM'>
                            {/* Headline registrasi UMKM */}
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis UMKM Anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                            <div class = 'form-regist-personal'>
                            <div class = 'nama-personal'>
                                <label for="nama-personal">Nama </label>
                                <input class="input" placeholder="(wajib diisi)"></input>
                            </div>
                            <div class = 'email-personal'>
                                <label for="email-personal">Email</label>
                                <input class="input" placeholder="(wajib diisi)"></input>
                            </div>
                            <div class = 'username-personal'>
                                <label for="username-personal">Username</label>
                                <input class="input" placeholder="(wajib diisi)"></input>
                            </div>
                            <div class = 'password-personal'>
                                <div class = 'left-box-personal'>
                                    <label for="password-personal">Password</label>
                                    <input class="input-password-personal" placeholder="(wajib diisi)"></input>
                                </div>
                                <div class = 'right-box-personal'>
                                    <label for="confirm-password-personal">Confirm Password</label>
                                    <input class="input-confirm-password-personal" placeholder="(wajib diisi)"></input>
                                </div>
                            </div>
                            <button class = 'btn-next-page'>Halaman Berikutnya
                                    <div class="arrow-wrapper">
                                        <div class="arrow"></div>
                                    </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Ekspor komponen sebagai default
export default RegisterPersonalPage1;
