import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './dashboard_umkm.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import { fetchBiodataUmkm } from '../../api/akun';
import Popup_post from './pop_up_post/popup_post';
import Popup_feeds from '../pop_up_feeds/popup_feeds';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { Gambar, Postingan, fetchPostingan } from '../../api/postingan';
import { fetchGambar } from '../../api/gambar_postingan';
import { fetchPostinganSelected } from '../../api/postinganselected';
import { fetchCountFolls } from '../../api/followers';
import { fetchGetNotifikasi } from '../../api/notifikasi';
// import './Popup_post';

export type BiodataUmkm = {
  alamat_toko: string;
  deskripsi_toko: string;
  nib: string;
  kontak_bisnis: string;
  kategori: string;
  akun_id: string;
  gambar: string;
};

interface CountFolls {
  count: number;
  // Sesuaikan dengan properti lain yang mungkin ada
}

interface GetNotifikasi{
    nama_akun: string;  // Change 'String' to 'string'
    gambar: string;
    tipe: string;
    created_at: string;   // Change 'String' to 'string'
}

const Dashboard: Component = () => {
    // const [RowData, setRowData] = createSignal([{}]);
    const [Post, setPost] = createSignal(false);
    const [Feeds, setFeeds] = createSignal(false);
    const [logout, setLogout] = createSignal(false);
//----------------------------------
    const openPostPopUp = () => {
        setPost(true);
    };

    const closePostPopUp = () => {
        setPost(false);
    };

//-------------------------------
const [selectedPostId, setSelectedPostId] = createSignal<number | null>(null);
const [selectedPost, setSelectedPost] = createSignal<Postingan | null>(null);
const openFeedsPopUp = async (post_id: number) => {
  const selected = postingan().find(post => post.post_id === post_id) || null;
  // console.log("Selected Post:", selected);
  setFeeds(true);
  setSelectedPostId(post_id);
  setSelectedPost(selected);

  const result = await fetchPostinganSelected(post_id);
};

  const closeFeedsPopUp = () => {
    setFeeds(false);
    setSelectedPostId(null);
  }; 
  //-------------------------------
    const openLogoutPopUp = () => {
        setLogout(true);
    };

    const closeLogoutPopUp = () => {
        setLogout(false);
    };

// GET-NAME-SIDE-BAR-----------------------------
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
  const [gambarProfile, setGambarProfile] = createSignal<BiodataUmkm[]>([]);
  onMount(async () => {
    try {
      const biodataUmkmArray = await fetchBiodataUmkm();
      // console.log(biodataUmkmArray);

      if (Array.isArray(biodataUmkmArray)) {
        setGambarProfile(biodataUmkmArray);
      } else {
        console.error('Data yang diterima bukan array GambarPostingan');
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }

  });
  const urlGambar = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;
//---------------------------------------------------------
  const [postingan, setPostingan] = createSignal<Postingan[]>([]);
  onMount(async () => {
    try {
      const dataPostingan = await fetchPostingan();
      // console.log("test_data_posting", dataPostingan)
      if (dataPostingan) {
        setPostingan(dataPostingan);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });
//---------------------------------------------------------
  const [folls, setFolls] = createSignal<CountFolls>();
  onMount(async () => {
    try {
      const dataFolls = await fetchCountFolls();
      console.log("test_data_follower", dataFolls)
      if (dataFolls) {
        setFolls(dataFolls);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });

  // const numberOfImages = 4;
  const renderGambar = (gambar: Gambar[], postPath: string) => (
    <div class={`cont-gambar`}>
      <For each={gambar}>{(g: Gambar, i) => (
        <div class={`gambar-${i() + 1}`}>
          <img src={`${postPath}/${g.nama_gambar}`} alt={`gambar-${i() + 1}`} />
        </div>
      )}</For>
    </div>
  );
  
  //===================================================
  const [getNotif, setGetNotif] = createSignal<GetNotifikasi>();
onMount(async () => {
    try {
        const dataGetNotif = await fetchGetNotifikasi();
        console.log("test_data_notifikasi", dataGetNotif)
        if (dataGetNotif) {
            setGetNotif((prevFolls) => dataGetNotif);
        }
    } catch (error) {
        console.error("Error fetching Postingan", error);
    }
});


//------------------------------------------------------
  const formatTimeDifference = (createdAt: string) => {
    const now = new Date();
    const createdDate = new Date(createdAt.replace(' ', 'T')); // Assuming 'created_at' is in the format "2023-12-11 23:42:38.902"
    const timeDifference = Math.floor((now.getTime() - createdDate.getTime()) / 1000); // in seconds

    if (timeDifference < 60) {
      return `${timeDifference} detik lalu`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} menit lalu`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} jam lalu`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} hari lalu`;
    }
  };
    return (
        <>
        <div class='body'>
            <div class='bg'></div>
            <nav>
            <A href="/umkm/dashboard">
                <img class='logo' src="/src/assets/Group_154.png" alt="" />
            </A>
            </nav>
            <div class='content'>

                <div class='side'>
                    <div class='profile-side'>
                        <div class='profile-img'>
                            {gambarProfile().map((gambar) => (
                                <img src={urlGambar(gambar.gambar)} alt="" />
                            ))}
                        </div>
                        <span class='nama'>
                            <h2>{namaAkun()}</h2>
                        </span>
                        <span class='deskripsi'>
                            <p>{gambarProfile().map((deskripsi) => deskripsi.deskripsi_toko)}</p>
                        </span>
                        <A href="/umkm/folls"><span class='folls'>
                            <p class='p1'>Followers</p>
                            <p>{folls()?.count}</p>
                        </span></A>
                    </div>
                    <div class='side-menu'>
                        <ul>
                            <A href="/umkm/dashboard"><li> <Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></A>
                            <A href="/umkm/notifumkm"><li><Icon icon="mingcute:notification-fill" class='icon-side'></Icon> Notifikasi</li></A>
                            <A href="/umkm/ProfilUMKM"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></A>
                            <A href="/umkm/PengaturanUMKM"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></A>
                            <div onClick={openLogoutPopUp}>
                            <li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li>
                            </div>
                            {logout() && <Popup_logout onClose={closeLogoutPopUp} />}
                        </ul>
                    </div>
                </div>

                <div class='main'>
                    <div class="posting" onClick={openPostPopUp}>
                        <span>Buat Unggahan Baru</span><br />
                        <div class='inputpost'>
                            <Icon  icon="solar:home-add-bold" class='iconpost'></Icon>
                            <input type="text" placeholder='Tulis deskripsi produk Anda di sini!'></input><br />
                        </div>
                        <button>Unggah</button>
                    </div>
                    {Post() && <Popup_post onClose={closePostPopUp} />}
                    <div class='batas'>
                        <Icon  icon="mdi:post-it-note-edit" class='iconbatas'></Icon>
                        <span>Unggahan</span>
                        <hr />
                    </div>
                    <div class='postan'>
                        <For each={postingan()} fallback={<div class="pinwheel"><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div></div>}>{(post: Postingan) => (
                            <div class={`postan${post.gambar.length}`}onClick={() => {setSelectedPostId(post.post_id);openFeedsPopUp(post.post_id);}}>
                            <div class='headline'>
                            <span class='judul'>{post.nama}</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>{post.deskripsi}</span>
                            {renderGambar(post.gambar, '/src/assets/postingan')}
                        </div>
                        )}</For>
                    </div>
                      {Feeds() && <Popup_feeds onClose={closeFeedsPopUp} postId={selectedPostId()} postinganselect={selectedPost()} />}

                </div>

                <div class='statistik'>
                  <div class='cont-stat'>
                    <div class='statistik-bar'>
                    <Icon icon="tdesign:notification-filled" class='icon'/>
                    <span class='span-notif-judul'>Notifikasi</span>
                    </div>
                    <hr />
                    <div class='statistik-like'>
                      <For each={(getNotif() || []) as GetNotifikasi[]}>
                      {(notif) => (
                        <div>
                          <div class='cont-notif-side'>
                            <div class='cont-img-notif'>
                              <img src={`/src/assets/profile/${notif.gambar}`} alt="" />
                            </div>
                            <div class='nama-notif'>
                              <span class='nama-akun-notif'>{notif.nama_akun}</span>
                              {notif.tipe === 'New Like' && (
                                <div class='activitynotif-side'>menyukai unggahan anda.</div>
                              )}
                              {notif.tipe === 'New Comment' && (
                                <div class='activitynotif-side'>Mengomentari unggahan anda.</div>
                              )}
                              {notif.tipe === 'New Follower' && (
                                <div class='activitynotif-side'>Mulai mengikuti anda.</div>
                              )}
                              <div class='time-notif'>
                                {formatTimeDifference(notif.created_at)}
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                        )}
                    </For>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
        </>
    )};

export default Dashboard;
