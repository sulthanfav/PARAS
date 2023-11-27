import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './dashboard_umkm.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const Dashboard: Component = () => {

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
                            <a href="#"><li> <Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></a>
                            <a href="#"><li><Icon icon="flat-color-icons:like" class='icon-side'></Icon> Disukai</li></a>
                            <a href="#"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></a>
                            <a href="#"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></a>
                            <a href="#"><li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li></a>
                            {/* <li><a href="#"><Icon icon="solar:logout-2-bold"></Icon>Dashboard</a></li> */}
                        </ul>
                    </div>
                </div>

                <div class='main'>
                    <div class="posting">
                        <span>Buat Unggahan Baru</span><br />
                        <div class='inputpost'>
                        <Icon  icon="solar:home-add-bold" class='iconpost'></Icon>
                        <input type="text" placeholder='Tulis deskripsi produk Anda di sini!'></input><br />
                        </div>
                        <button>Unggah</button>
                    </div>
                    <div class='batas'>
                        <Icon  icon="mdi:post-it-note-edit" class='iconbatas'></Icon>
                        <span>Unggahan</span>
                        <hr />
                    </div>
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

                <div class='statistik'>
                    <div class='statistik-bar'>
                    <Icon icon="ic:round-bar-chart" class='icon'/>
                    <span>Statistik</span>
                    </div>
                    <hr />
                    <div class='statistik-like'>
                        <span>Like Count</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )};

export default Dashboard;
