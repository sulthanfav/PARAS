import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './home_profile_umkm.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const home_profile_umkm: Component = () => {

    return (
        <>
        <div class='body'>
            <div class='bg'></div>
            <nav>
                    <img class='logo' src="/src/assets/Group_154.png" alt="" />
            </nav>
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
                            <a href="#"><li> <Icon icon="ic:round-home" class='icon-side'></Icon> Dashboard</li></a>
                            <li><Icon icon="mingcute:notification-fill" class='icon-side' /><a href="#">Dashboard</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Dashboard</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class='cont-home-profile-umkm'>

                    <div class='batas-home'>
                        <Icon  icon="ic:round-home" class='iconbatas'></Icon>
                        <span>Beranda</span>
                        <hr class='hr-home'/>
                    <input type="text" placeholder='Cari..'/>
                    </div>

                    <div class='home-profile-umkm'>
                        <div class='profile-akun-home'></div>
                        <hr />
                    
                        <div class='postan'>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-2'></div>
                                <div class='gambar1-3'></div>
                                <div class='gambar1-4'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar2-1'></div>
                                <div class='gambar2-2'></div>
                                <div class='gambar2-3'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                                <div class='gambar1'></div>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>

            </div>
        </div>
                </>
    )};

    export default home_profile_umkm;