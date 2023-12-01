import { Component, createSignal, onMount, onCleanup, JSXElement} from 'solid-js';
import { For } from 'solid-js/web';
import './paras.css';
import "daisyui/dist/full.css";
import { Icon } from "@iconify-icon/solid"
import { A, useNavigate } from '@solidjs/router';
// import LogoImage from './logo.tsx';

const Paras: Component = () => {
      
    return (
    <>
    <div class='body'>
        <nav>
        <A href="/dashboard">
                <img class='logo' src="/src/assets/Group_154.png" alt="" />
        </A>
            <div class = 'button-navigation-bar'>
                <button class = 'btn-daftar'> Daftar </button>
                <a href="/RegisterUMKMPage1"></a>
                <A href="/login">
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
                        <A href="/RegisterUMKMPage1"><button class="btn btn-active btn-neutral">Daftar sebagai UMKM</button></A>
                        <A href="/RegisterPersonalpage1"><button class="btn btn-ghost">Daftar sebagai User</button></A>
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