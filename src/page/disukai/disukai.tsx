import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './disukai.css';

// Function to define the route
const pathFn = (e: any) => {
    console.log('pathFn', e);
    return '/DisukaiUser';
}

const DisukaiUser: Component = () => {
    return (
        <>
            <div class='body'>
                <div class='bg'></div>
                <A href="/dashboard">
                    <nav>
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </nav>
                </A>
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
                            <A href="/folls">
                                <span class='folls'>
                                    <p class='p1'>Followers</p>
                                    <p>127</p>
                                </span>
                            </A>
                        </div>
                        <div class='side-menu'>
                            <ul>
                                <a href="#"><li><Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></a>
                                <a href="#"><li><Icon icon="mingcute:notification-fill" class='icon-side'></Icon> Notifikasi</li></a>
                                <a href="#"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></a>
                                <a href="#"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></a>
                                <a href="#"><li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li></a>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-all">
                        <div class='titleprofile'>
                            <div class='logoprofile'><Icon icon="icon-park-solid:like" class="logo-love-disukai"/></div>
                            <div class='page-title'>Disukai</div>
                            <hr />
                        </div>
                <div class="disukai-cont">
                <div class='main'>
                    <div class='postan'>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
                        </div>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisukaiUser;
