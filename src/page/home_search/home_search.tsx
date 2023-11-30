import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './home_search.css';

const HomeSearchUser: Component = () => {
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
                        <div class="search-container">
                            <input type="text" class="searchInput" placeholder="Kulkas 2 Pintu"/>
                            <Icon icon="material-symbols:search"/>
                        </div>
                        <div class="result-search">

                            <div class="cont-result-profile-search">
                                <span>Hasil Pencarian Profil berdasarkan kata kunci "Rendang"</span>
                                <div class="profile-search">
                                    
                                <div class="cont-profile-result">
                                    <div class='profile-post-home'>
                                        <div class='img-profile-post-home'>
                                            <img src="/src/assets/profile_test.png" alt="" />
                                        </div>
                                        <div class='name-profile-post-home'>
                                            <span class='name'>Numani</span>
                                            <span class='judul'>@rhmntta</span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                <div class="cont-profile-result">
                                    <div class='profile-post-home'>
                                        <div class='img-profile-post-home'>
                                            <img src="/src/assets/profile_test.png" alt="" />
                                        </div>
                                        <div class='name-profile-post-home'>
                                            <span class='name'>Numani</span>
                                            <span class='judul'>@rhmntta</span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                                </div>
                            </div>

                            <div class="cont-result-post-search">
                                <span>Hasil Pencarian Unggahan berdasarkan kata kunci "Rendang"</span>

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

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSearchUser;
