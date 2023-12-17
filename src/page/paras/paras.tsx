import { Component, createSignal, onMount, onCleanup, JSXElement} from 'solid-js';
import { For } from 'solid-js/web';
import './paras.css';
import '../dashboard/dashboard_umkm.css';
import "daisyui/dist/full.css";
import { Icon } from "@iconify-icon/solid"
import { A, useNavigate } from '@solidjs/router';
// import LogoImage from './logo.tsx';

const Paras: Component = () => {
        const navigate = useNavigate();

  const handleUMKMButtonClick = () => {
    // Save 'umkm' to sessionStorage
    sessionStorage.setItem('registrationType', 'umkm');
    // Redirect to the UMKM registration page
    navigate('/BeforeLogin/RegisterUMKMPage1');
  };

  const handleUserButtonClick = () => {
    // Save 'pengguna' to sessionStorage
    sessionStorage.setItem('registrationType', 'pengguna');
    // Redirect to the User registration page
    navigate('/BeforeLogin/RegisterPersonalpage1');
  };
    return (
    <>
    <div class='body'>
        <nav>
        <A href="/dashboard">
                <img class='logo' src="/src/assets/Group_154.png" alt="" />
        </A>
            <div class = 'button-navigation-bar'>
                <button class = 'btn-daftar'> Daftar </button>
                <A href="/BeforeLogin/login">
                <button class = 'btn-masuk'> Masuk </button>
                </A>
            </div>
        </nav>
        <div class='content'>
            <div class='background'>
                <div class='container-box'>
                    <div class = 'text-opening'>
                        <span class = 'part1'> 
                            Temukan <br />keindahan <br /> kreasi lokal <br /> dalam 
                        </span>
                        <span class = 'part2'>
                            satu <br /> sentuhan.
                        </span> 
                    </div>
                    <div class = 'button-daftar'>
                        <button onClick={handleUMKMButtonClick} class="btn btn-active btn-neutral">
                        Daftar sebagai UMKM
                        </button>
                        <button onClick={handleUserButtonClick} class="btn btn-ghost">
                        Daftar sebagai User
                        </button>
                    </div>
                    <div class = 'text-tagline'>
                    Jadikan galeri dagangan Anda di sini, 
                    <p>di jantung Pasar Rakyat Nusantara.</p>
                    </div>
                </div>
                <div class = 'image-side-right'>
                    <div class = 'image-1'>
                        <img src='src/assets/image/giving-final-touches-artwork-2.png'></img>
                    </div>
                    <div class = 'image-2'>
                        <div class = 'image-left'>
                            <img src='src/assets/image/hands-potter-creating-earthen-jar-2.png'></img>
                        </div>
                        <div class = 'image-right'>
                            <img src='src/assets/image/wicker-baskets-sale-2.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )};
      
export default Paras;