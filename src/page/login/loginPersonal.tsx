import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import './login.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid";
// import LogoImage from './logo.tsx';

// Definisi komponen loginUMKM sebagai functional component
const loginUMKM: Component = () => {
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
                    <div class='background-login'>
                        {/* Isi sesuai kebutuhan konten */}
                        <div class='login-cont'>
                            <div class='headline-login'>
                                <span>
                                    Selamat Datang di <span>Paras</span>!
                                </span>
                                <span> <br />
                                    Masuk untuk 
                                </span>
                            </div>
                            <div class='login-form-cont'>
                                <div class='cont-login-input-form'>
                                    <label>Nomor Kontak</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div class='cont-login-input-form'>
                                    <label>Nomor Kontak</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <button>
                                    Masuk
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
export default loginUMKM;
