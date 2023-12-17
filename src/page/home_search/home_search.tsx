import { Component, createSignal, onMount, onCleanup, createEffect } from 'solid-js';
import { A, useNavigate } from "@solidjs/router";
import { For } from 'solid-js/web';
import { Icon } from "@iconify-icon/solid";
import './home_search.css';
import '../dashboard/dashboard_umkm.css'
import '../home-personal/home.css'
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchBiodataPersonal, AkunUmkmHomeSearch, fetchAkunUmkmSearch } from '../../api/akun';
import { fetchCountFollsPersonal } from '../../api/followers';
import { GambarSearch, PostinganSearch, fetchPostinganSearch } from '../../api/postingan';


const HomeSearchUser: Component = () => {

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
  //GET-PIC-PROFILE-------------------------------------------------
  const [AkunUmkm, setAkunUmkm] = createSignal<AkunUmkmHomeSearch[]>([]);
  onMount(async () => {
    try {
      const AkunUmkm = await fetchAkunUmkmSearch();
      console.log(AkunUmkm);

      if (AkunUmkm) {
        setAkunUmkm(AkunUmkm);
      } else {
        console.error('Data yang diterima bukan array GambarPostingan');
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }

  });
  const urlGambarUmkm = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;

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

  //=======================================================================
const getKeyInput = () => {
  const userDataString = sessionStorage.getItem("searchInput");
  console.log("userDataString:", userDataString);
  return userDataString || null;
};

  // Mendapatkan data dari sessionStorage
  const KeyInput = getKeyInput();

  //=======================================================
    const [postingan, setPostingan] = createSignal<PostinganSearch[]>([]);
  onMount(async () => {
  try {
    const dataPostingan = await fetchPostinganSearch();
    console.log('data search', dataPostingan)
    if (dataPostingan) {
      // Shuffle the array randomly
      setPostingan(dataPostingan);
    }
  } catch (error) {
    console.error("Error fetching Postingan", error);
  }
});
   const renderGambar = (gambar: GambarSearch[], postPath: string) => (
    <div class={`pic-post-home`}>
      <For each={gambar}>{(g: GambarSearch, i) => (
        <div class={`pic-post-${i() + 1}`}>
          <img src={`${postPath}/${g.nama_gambar}`} alt={`gambar-${i() + 1}`} />
        </div>
      )}</For>
    </div>
  );

  //==========================================
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
                    <div class="bg-all">
                        <div class="search-container">
                            <input type="text" class="searchInput" placeholder="Kulkas 2 Pintu"/>
                            <Icon icon="material-symbols:search"/>
                        </div>
                        <div class="result-search">

                            <div class="cont-result-profile-search">
                                <span>Hasil Pencarian Profil berdasarkan kata kunci "{KeyInput}"</span>
                                <div class="profile-search">

                                <For each={(AkunUmkm() || []) as AkunUmkmHomeSearch[]}>
                                {(AkunUmkm) => (
                                <div class="cont-profile-result">
                                    <div class='profile-post-home'>
                                        <div class='img-profile-post-home'>
                                            <img src={`/src/assets/profile/${AkunUmkm.gambar}`} alt="" />
                                        </div>
                                        <div class='name-profile-post-home'>
                                            <span class='name'>{AkunUmkm.nama_akun}</span>
                                            <span class='judul'>@{AkunUmkm.username}</span>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                    )}
                                </For>
                                </div>

                            </div>

                            <div class="cont-result-post-search">
                                <span class='hasil-search'>Hasil Pencarian Unggahan berdasarkan kata kunci "{KeyInput}"</span>

                                    <For each={postingan()} fallback={<div class='no-unggahan-search'>Tidak Ada Unggahan Untuk Kata Kunci Tersebut</div>}>{(post: PostinganSearch) => (
                            // <div class='post-home'>
                                <div class={`postan-home${post.gambar.length}`} >


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

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSearchUser;
