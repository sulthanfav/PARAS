import { Component, createSignal, onMount, onCleanup, JSXElement} from 'solid-js';
import { For } from 'solid-js/web';
import './registerUMKMpage1.css';
import "daisyui/dist/full.css";
import { Icon } from "@iconify-icon/solid"
import { A, useNavigate } from '@solidjs/router';
// import LogoImage from './logo.tsx';

const RegisterUMKMPage1: Component = () => {
      const navigate = useNavigate();

  const handleNextPage = () => {
    const passwordInput = document.querySelector('.input-password') as HTMLInputElement | null;
    const confirmPasswordInput = document.querySelector('.input-confirm-password') as HTMLInputElement | null;

    if (!passwordInput || !confirmPasswordInput || passwordInput.value !== confirmPasswordInput.value) {
      alert('Password and Confirm Password must match.');
    } else {
      // Save data to session storage
      const formData = {
        namaToko: (document.querySelector('.input-nama-toko') as HTMLInputElement).value,
        emailToko: (document.querySelector('.input-email-toko') as HTMLInputElement).value,
        usernameToko: (document.querySelector('.input-username-toko') as HTMLInputElement).value,
        passwordToko: passwordInput.value,
      };

      sessionStorage.setItem('formData', JSON.stringify(formData));

      // Navigate to the next page
      navigate('/BeforeLogin/RegisterUMKMPage2');
    }
  };
    return (
        <>
            <div class='body'>
                <nav>
                    <A href="/BeforeLogin/Paras">
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </A>
                    <div class='button-navigation-bar'>
                      <A href="/BeforeLogin/Paras">
                        <button class='btn-daftar'> Daftar </button>
                      </A>
                        <A href="/BeforeLogin/Login">
                        <button class='btn-masuk'> Masuk </button>
                        </A>
                    </div>
                </nav>
                <div class='content'>
                    <div class='background-regis-1'>
                        <div class='registrasipage1UMKM'>
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis umkm anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                          <form class='form-regist'>
                          <div class='nama-toko-box'>
                            <label for='nama-toko'>Nama Toko</label>
                            <input class='input input-nama-toko' placeholder='(wajib diisi)'></input>
                          </div>
                          <div class='email-toko-box'>
                            <label for='email-toko'>Email</label>
                            <input class='input input-email-toko' placeholder='(wajib diisi)'></input>
                          </div>
                          <div class='username-toko-box'>
                            <label for='username-toko'>Username</label>
                            <input class='input input-username-toko' placeholder='(wajib diisi)'></input>
                          </div>
                          <div class='password-toko-box'>
                            <div class='left-box'>
                              <label for='password-toko'>Password</label>
                              <input class='input-password' placeholder='(wajib diisi)' type='password'></input>
                            </div>
                            <div class='right-box'>
                              <label for='confirm-password-toko'>Confirm Password</label>
                              <input class='input-confirm-password' placeholder='(wajib diisi)' type='password'></input>
                            </div>
                          </div>
                          
                            <button class='btn-next-page' type='button' onClick={handleNextPage}>
                              Halaman Berikutnya
                              <div class='arrow-wrapper'>
                                <div class='arrow'></div>
                              </div>
                            </button>
                          
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterUMKMPage1;