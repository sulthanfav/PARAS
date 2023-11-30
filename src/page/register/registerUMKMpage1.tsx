import { Component, createSignal, onMount, onCleanup, JSXElement} from 'solid-js';
import { For } from 'solid-js/web';
import './registerUMKMpage1.css';
import "daisyui/dist/full.css";
import { Icon } from "@iconify-icon/solid"
import { A, useNavigate } from '@solidjs/router';
// import LogoImage from './logo.tsx';

const RegisterUMKMPage1: Component = () => {
    return (
        <>
            <div class='body'>
                <nav>
                    <A href="/dashboard">
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </A>
                    <div class='button-navigation-bar'>
                        <button class='btn-daftar'> Daftar </button>
                        <a href="/RegisterUMKMPage1"></a>
                        <button class='btn-masuk'> Masuk </button>
                    </div>
                </nav>
                <div class='content'>
                    <div class='background-regis-1'>
                        <div class='registrasipage1UMKM'>
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis umkm anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                                <div class = 'form-regist'>
                                    <div class = 'nama-toko-box'>
                                        <label for="nama-toko">Nama Toko</label>
                                        <input class="input" placeholder="(wajib diisi)"></input>
                                    </div>
                                    <div class = 'email-toko-box'>
                                        <label for="email-toko">Email</label>
                                        <input class="input" placeholder="(wajib diisi)"></input>
                                    </div>
                                    <div class = 'username-toko-box'>
                                        <label for="username-toko">Username</label>
                                        <input class="input" placeholder="(wajib diisi)"></input>
                                    </div>
                                    <div class = 'password-toko-box'>
                                        <div class = 'left-box'>
                                            <label for="password-toko">Password</label>
                                            <input class="input-password" placeholder="(wajib diisi)"></input>
                                        </div>
                                        <div class = 'right-box'>
                                            <label for="confirm-password-toko">Confirm Password</label>
                                            <input class="input-confirm-password" placeholder="(wajib diisi)"></input>
                                        </div>
                                    </div>
                                    <div class = 'password-toko-box'>
                                        <div class = 'left-box'>
                                            <label for="password-toko">Password</label>
                                            <input class="input-password" placeholder="(wajib diisi)"></input>
                                        </div>
                                        <div class = 'right-box'>
                                            <label for="confirm-password-toko">Confirm Password</label>
                                            <input class="input-confirm-password" placeholder="(wajib diisi)"></input>
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

export default RegisterUMKMPage1;