import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './folls.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const Folls : Component = () => {
    return (
        <>
        <div class='body'>
        <A href="/dashboard">
            <nav>
                <img class='logo' src="/src/assets/Group_154.png" alt="" />
            </nav></A>
            <div class='content'>

                <div class='side'>
                    <div class='profile-side'>
                        <img src="/src/assets/Ellipse_14.png" alt="" />
                        <span class='nama'>
                            <h2>Sulthan</h2>
                        </span>
                        <span class='deskripsi'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</p>
                        </span>
                        <span class='folls'>
                            <p class='p1'>Followers</p>
                            <p>127</p>
                        </span>
                    </div>
                    <div class='side-menu'>
                        <ul>
                            <a href="#"><li> <Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></a>
                            <A href="/notifumkm"><li><Icon icon="mingcute:notification-fill" class='icon-side'></Icon> Notifikasi</li></A>
                            <A href="/ProfilUMKM"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></A>
                            <A href="/PengaturanUMKM"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></A>
                            <a href="#"><li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li></a>
                            {/* <li><a href="#"><Icon icon="solar:logout-2-bold"></Icon>Dashboard</a></li> */}
                        </ul>
                    </div>
                </div>
                {/* <div class='bg'></div> */}

                <div class='cont-folls'>
                    <div class='folls-bar'>
                    <Icon icon="ic:sharp-person-add-alt" class='icon-folls'></Icon>
                        <span>Followers</span>
                    <hr />
                    </div>
                    <div class='folls-box'>
                    <div class='main-folls'>
                        <div class='folls-list'>
                            <div class='folls-img'></div>
                            <div class='folls-item'>
                                <div class='folls-name'>
                                    <span class='user-nama'>Rahmanita </span>
                                    <span class='folls-uname'>@Rahmanita</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class='folls-list'>
                            <div class='folls-img'></div>
                            <div class='folls-item'>
                                <div class='folls-name'>
                                    <span class='user-nama'>Rahmanita </span>
                                    <span class='folls-uname'>@Rahmanita</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class='folls-list'>
                            <div class='folls-img'></div>
                            <div class='folls-item'>
                                <div class='folls-name'>
                                    <span class='user-nama'>Rahmanita </span>
                                    <span class='folls-uname'>@Rahmanita</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class='folls-list'>
                            <div class='folls-img'></div>
                            <div class='folls-item'>
                                <div class='folls-name'>
                                    <span class='user-nama'>Rahmanita </span>
                                    <span class='folls-uname'>@Rahmanita</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class='folls-list'>
                            <div class='folls-img'></div>
                            <div class='folls-item'>
                                <div class='folls-name'>
                                    <span class='user-nama'>Rahmanita </span>
                                    <span class='folls-uname'>@Rahmanita</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)};

export default Folls;
