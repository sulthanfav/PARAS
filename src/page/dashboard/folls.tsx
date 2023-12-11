import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './folls.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import { fetchBiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchCountFolls } from '../../api/followers';


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

const Folls : Component = () => {

     //-----------------------------------------------------
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

  //-------------------------------------------------------
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
  //-----------------------------------------------------
  const [logout, setLogout] = createSignal(false);
      const openLogoutPopUp = () => {
        setLogout(true);
    };

    const closeLogoutPopUp = () => {
        setLogout(false);
    };
  //------------------------------------------------------
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
  //--------------------------------------------------------------
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

  //-------------------------------------------------------------------
  
    return (
        <>
        <div class='body'>
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
