import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './dashboard_umkm.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import { fetchBiodataUmkm, BiodataUmkm } from '../../api/akun';
import Popup_post from './pop_up_post/popup_post';
import Popup_feeds from '../pop_up_feeds/popup_feeds';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
// import './Popup_post';

const Dashboard: Component = () => {
    // const [RowData, setRowData] = createSignal([{}]);
    const [Post, setPost] = createSignal(false);
    const [Feeds, setFeeds] = createSignal(false);
    const [logout, setLogout] = createSignal(false);

    // onMount(async () => {
    //     const BiodataUmkm = await fetchBiodataUmkm("BERHASIL");
    //     console.log("BERHASIL!!", Account);
    //     setRowData(Account);
    // });

//----------------------------------
    const openPostPopUp = () => {
        setPost(true);
    };

    const closePostPopUp = () => {
        setPost(false);
    };

//-------------------------------
    const openFeedsPopUp = () => {
        setFeeds(true);
    };

    const closeFeedsPopUp = () => {
        setFeeds(false);
    };
//-------------------------------
    const openLogoutPopUp = () => {
        setLogout(true);
    };

    const closeLogoutPopUp = () => {
        setLogout(false);
    };

// Komponen utama-----------------------------
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

//-----------------------------------------
const getStoredBiodataUmkm = () => {
  const BiodataUmkmString = sessionStorage.getItem("biodataUmkm");
  return BiodataUmkmString ? JSON.parse(BiodataUmkmString) : null;
};

const biodataUmkmArray = getStoredBiodataUmkm();
const biodataUmkm = biodataUmkmArray && biodataUmkmArray.length ? biodataUmkmArray[0] : null;

// Check if biodataUmkm is not null before accessing its properties
const deskripsiToko = biodataUmkm ? biodataUmkm.deskripsi_toko : "";
console.log(deskripsiToko);

//-------------------------------------------------
  onMount(async () => {
    try {
      const biodataUmkmArray = await fetchBiodataUmkm();

      // Now you have the biodataUmkm available for use
      console.log(biodataUmkm);

      // Additional logic with biodataUmkm if needed

    } catch (error) {
      console.error("Error fetching biodataUmkm", error);
      // Handle errors if needed
    }
  });

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
                        <img src="/src/assets/Ellipse_14.png" alt="" />
                        <span class='nama'>
                            <h2>{namaAkun()}</h2>
                        </span>
                        <span class='deskripsi'>
                            <p>{deskripsiToko()}</p>
                        </span>
                        <A href="/umkm/folls"><span class='folls'>
                            <p class='p1'>Followers</p>
                            <p>127</p>
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
                        <div class='postan1' onClick={openFeedsPopUp}>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar4-1'></div>
                                <div class='gambar4-2'></div>
                                <div class='gambar4-3'></div>
                                <div class='gambar4-4'></div>
                            </div>
                        </div>
                        {Feeds() && <Popup_feeds onClose={closeFeedsPopUp} />}
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar-3'>
                                <div class='pic-gambar-3'>
                                    <div class='gambar3-1'></div>
                                    <div class='gambar3-2'></div>
                                </div>
                                <div class='gambar3-3'></div>
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
