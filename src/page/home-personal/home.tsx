import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './home.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const Home: Component = () => {

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
                        <a href="#"><li>Dashboard</li></a>
                            <li><Icon icon="mingcute:notification-fill" /><a href="#">Dashboard</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Dashboard</a></li>
                        </ul>
                    </div>
                </div>

                    <div class='cont-home'>

                        <div class='batas-home'>
                            <Icon  icon="ic:round-home" class='iconbatas'></Icon>
                            <span>Beranda</span>
                            <hr class='hr-home'/>
                        <input type="text" placeholder='Cari..'/>
                        </div>

                        <div class='cont-post-home'>
                            
                            <div class='post-home'>
                                <div class='profile-post-home'>
                                    <div class='img-profile-post-home'>
                                        <img src="/src/assets/profile_test.png" alt="" />
                                    </div>
                                    <div class='name-profile-post-home'>
                                        <span class='name'>Numani</span>
                                        <span class='judul'>Baju keren sepanjang masa</span>
                                    </div><br />
                                </div>
                                <div class='desc-post-home'>
                                    <span class=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </span>
                                </div>
                                <hr />
                                <div class='pic-post-home'>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                </div>
                                <hr />
                                <div class='intr-home'>
                                    <Icon  icon="flat-color-icons:like" class='icon-intr-home'></Icon>
                                    <span>127</span>
                                    <div class='intr-home-comment'>
                                        <Icon  icon="iconamoon:comment-fill" class='icon-intr-home'></Icon>
                                        <input type="text" placeholder='Tuliskan Komentar Anda...'/>
                                    </div>
                                    <Icon  icon="ph:link-bold" class='icon-intr-home'></Icon>
                                    <span>Link Produk</span>
                                </div>
                                <hr />
                            </div>
                            
                            <div class='post-home'>
                                <div class='profile-post-home'>
                                    <div class='img-profile-post-home'>
                                        <img src="/src/assets/profile_test.png" alt="" />
                                    </div>
                                    <div class='name-profile-post-home'>
                                        <span class='name'>Numani</span>
                                        <span class='judul'>Baju keren sepanjang masa</span>
                                    </div><br />
                                </div>
                                <div class='desc-post-home'>
                                    <span class=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </span>
                                </div>
                                <hr />
                                <div class='pic-post-home'>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                </div>
                                <hr />
                                <div class='intr-home'>
                                    <Icon  icon="flat-color-icons:like" class='icon-intr-feeds'></Icon>
                                    <span>127</span>
                                    <Icon  icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
                                    <span>345</span>
                                    <Icon  icon="ph:link-bold" class='icon-intr-feeds'></Icon>
                                    <span>Link Produk</span>
                                </div>
                                <hr />
                                <div class='cont-comment-post'>
                                    <div class='coment-post'>
                                    <div class='img-profile-post-home'>
                                        <img src="/src/assets/profile_test.png" alt="" />
                                    </div>
                                    <div class='name-profile-post-home'>
                                        <span class='name'>Numani</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class='post-home'>
                                <div class='profile-post-home'>
                                    <div class='img-profile-post-home'>
                                        <img src="/src/assets/profile_test.png" alt="" />
                                    </div>
                                    <div class='name-profile-post-home'>
                                        <span class='name'>Numani</span>
                                        <span class='judul'>Baju keren sepanjang masa</span>
                                    </div><br />
                                </div>
                                <div class='desc-post-home'>
                                    <span class=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </span>
                                </div>
                                <hr />
                                <div class='pic-post-home'>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                    <div class='pic-post'></div>
                                </div>
                                <hr />
                                <div class='intr-home'>
                                    <Icon  icon="flat-color-icons:like" class='icon-intr-feeds'></Icon>
                                    <span>127</span>

                                    <div class='intr-home-comment'>
                                        <Icon  icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
                                        <span>345</span>
                                    </div>
                                    
                                    <Icon  icon="ph:link-bold" class='icon-intr-feeds'></Icon>
                                    <span>Link Produk</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </>
    )};

export default Home;