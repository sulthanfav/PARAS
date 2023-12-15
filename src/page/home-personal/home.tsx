import { Component, createSignal, onMount, onCleanup, createEffect } from 'solid-js';
import { For } from 'solid-js/web';
import './home.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import "../dashboard/dashboard_umkm.css"
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchBiodataPersonal } from '../../api/akun';
import { fetchCountFollsPersonal } from '../../api/followers';
import { fetchPostinganPersonal, Postingan, Gambar, PostinganPersonal, GambarPersonal } from '../../api/postingan';
import { fetchPostinganPersonalSelected } from '../../api/postinganselected';
import Popup_feeds_personal from '../../assets/popup/popuup_postingan_personal/popup_postingan_personal';

interface BiodataPersonal {
  tempat_tanggal_lahir: string;
  alamat: string;
  jenis_kelamin: string;
  akun_id: string;
  gambar: string;
};

interface CountFollsPersonal {
  count: number;
  // Sesuaikan dengan properti lain yang mungkin ada
}

const Home: Component = () => {
  const navigate = useNavigate();
    //-------------------------------
const [logout, setLogout] = createSignal(false);
    const openLogoutPopUp = () => {
        setLogout(true);
    };

    const closeLogoutPopUp = () => {
        setLogout(false);
    };

    //---------------------------------
        const getStoredUserData = () => {
  const userDataString = sessionStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
};
  // Mendapatkan data dari sessionStorage
  const userData = getStoredUserData();

  // Signal untuk menyimpan nama_akun
  const [namaAkun, setNamaAkun] = createSignal(userData?.nama_akun || "");
  console.log(namaAkun())

  // Membersihkan sinyal saat komponen di-unmount
  onCleanup(() => {
    // Clean-up logic here, if needed
  });

  //GET-PIC-PROFILE-------------------------------------------------
  const [biodataPersonal, setBiodataPersonal] = createSignal<BiodataPersonal[]>([]);
  onMount(async () => {
    try {
      const biodataUmkmArray = await fetchBiodataPersonal();
      // console.log(biodataUmkmArray);

      if (Array.isArray(biodataUmkmArray)) {
        setBiodataPersonal(biodataUmkmArray);
      } else {
        console.error('Data yang diterima bukan array GambarPostingan');
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }

  });
  const urlGambar = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;

  //========================================================================
    const [folls, setFolls] = createSignal<CountFollsPersonal>();
  onMount(async () => {
    try {
      const dataFolls = await fetchCountFollsPersonal();
      console.log("test_data_follower", dataFolls)
      if (dataFolls) {
        setFolls(dataFolls);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });

  //===============================================================
    const [postingan, setPostingan] = createSignal<PostinganPersonal[]>([]);
  onMount(async () => {
    try {
      const dataPostingan = await fetchPostinganPersonal();
      // console.log("test_data_posting", dataPostingan)
      if (dataPostingan) {
        setPostingan(dataPostingan);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });

  //===============================================================
    const renderGambar = (gambar: GambarPersonal[], postPath: string) => (
    <div class={`pic-post-home`}>
      <For each={gambar}>{(g: GambarPersonal, i) => (
        <div class={`pic-post-${i() + 1}`}>
          <img src={`${postPath}/${g.nama_gambar}`} alt={`gambar-${i() + 1}`} />
        </div>
      )}</For>
    </div>
  );

  //--------------------------------------------------------------------
  const [FeedsPersonal, setFeedsPersonal] = createSignal(false);
  const [selectedPostId, setSelectedPostId] = createSignal<number | null>(null);
const [selectedPost, setSelectedPost] = createSignal<PostinganPersonal | null>(null);
const openFeedsPopUp = async (post_id: number | null) => {
  if (post_id !== null) {
    const selected = postingan().find(post => post.post_id === post_id) || null;
    setFeedsPersonal(true);
    setSelectedPostId(post_id);
    setSelectedPost(selected);

    const result = await fetchPostinganPersonalSelected(post_id);
  }
};

  const closeFeedsPopUp = () => {
    setFeedsPersonal(false);
    setSelectedPostId(null);
  }; 

  //=================================================================
    const [searchInput, setSearchInput] = createSignal('');

  const handleSearchInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleSearchInputEnter = (e: any) => {
    if (e.key === 'Enter') {
      // Save the searchInput value to sessionStorage or another suitable storage
      sessionStorage.setItem('searchInput', searchInput());
      
      // Navigate to the homesearchuser route
      navigate('/personal/homesearchuser');
    }
  };

  //=================================================================
    const [likeClicked, setLikeClicked] = createSignal(false);

  // Signal for determining which icon to display
  const [likeIcon, setLikeIcon] = createSignal("icon-park-outline:like");

  // Effect to update likeIcon when likeClicked changes
  createEffect(() => {
    if (likeClicked()) {
      // If like button is clicked, change the icon
      setLikeIcon("flat-color-icons:like");
    } else {
      // If like button is not clicked, use the default icon
      setLikeIcon("icon-park-outline:like");
    }
  });

  // Function to handle like button click
  const handleLikeClick = () => {
    // Toggle the likeClicked state
    setLikeClicked((prev) => !prev);
    // Perform other like-related actions as needed
  };
    return (
        <>
        <div class='body'>
            <div class='bg'></div>
            <nav>
                    <A href="/personal/home"><img class='logo' src="/src/assets/Group_154.png" alt="" /></A>
            </nav>
            <div class='content'>

                <div class='side'>
                    <div class='profile-side-personal'>
                        <div class='profile-img'>
                            {biodataPersonal().map((gambar) => (
                                <img src={urlGambar(gambar.gambar)} alt="" />
                            ))}
                        </div>
                        <span class='nama'>
                            <h2>{namaAkun()}</h2>
                        </span>
                        {/* <span class='deskripsi'>
                            
                        </span> */}
                        <span class='folls-personal'>
                            <p class='p1'>Followers</p>
                            <p>{folls()?.count}</p>
                        </span>
                    </div>
                    <div class='side-menu'>
                        <ul>
                            <A href="/personal/home"><li> <Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></A>
                            <A href="/personal/DisukaiUser"><li><Icon icon="wpf:like" class='icon-side'></Icon> Disukai</li></A>
                            <A href="/personal/ProfilUser"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></A>
                            <A href="/personal/PengaturanUser"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></A>
                            <div onClick={openLogoutPopUp}>
                            <li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li>
                            </div>
                            {logout() && <Popup_logout onClose={closeLogoutPopUp} />}
                        </ul>
                    </div>
                </div>

                    <div class='cont-home'>

                    <div class='batas-home'>
                      <Icon icon="ic:round-home" class='iconbatas'></Icon>
                      <span>Beranda</span>
                      <hr class='hr-home' />
                      <input
                        type="text"
                        placeholder='Cari..'
                        value={searchInput()}
                        onInput={handleSearchInputChange}
                        onKeyDown={handleSearchInputEnter}
                      />
                    </div>

                        <div class='cont-post-home'>
                            
                            <For each={postingan()} fallback={<div class="pinwheel"><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div></div>}>{(post: PostinganPersonal) => (
                            // <div class='post-home'>
                                <div class={`postan-home${post.gambar.length}`} onClick={() => {setSelectedPostId(post?.post_id ?? null); openFeedsPopUp(post?.post_id ?? null);}}>

                                <div class='profile-post-home'>
                                    <div class='img-profile-post-home'>
                                        <img src={`/src/assets/profile/${post.gambar_profile}`} alt="" />
                                    </div>
                                    <div class='name-profile-post-home'>
                                        <span class='name'>{post.nama_akun}</span>
                                        <span class='judul'>{post.nama}</span>
                                    </div><br />
                                </div>
                                <div class='desc-post-home'>
                                    <span class=''>
                                    {post.deskripsi}
                                    </span>
                                </div>
                                <hr />
                                {renderGambar(post.gambar, '/src/assets/postingan')}
                                <hr />
                                <div class='intr-home'>
                                     <Icon icon={likeIcon()} class='icon-intr-home' onClick={handleLikeClick}></Icon>
                                    <span>{post.like_count}</span>
                                    <div class='intr-home-comment'>
                                        <Icon  icon="iconamoon:comment-fill" class='icon-intr-home'></Icon>
                                        <input type="text" placeholder='Tuliskan Komentar Anda...'/>
                                    </div>
                                    <Icon  icon="ph:link-bold" class='icon-intr-home'></Icon>
                                    <span>Link Produk</span>
                                </div>
                                <hr />
                                </div>
                            // </div>
                                )}</For>
                                {FeedsPersonal() && <Popup_feeds_personal onClose={closeFeedsPopUp} postId={selectedPostId()} postinganselect={selectedPost()} />}
                            
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
                                        <Icon  icon="iconamoon:comment-fill" class='icon-intr-home'></Icon>
                                        <input type="text" placeholder='Tuliskan Komentar Anda...'/>
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