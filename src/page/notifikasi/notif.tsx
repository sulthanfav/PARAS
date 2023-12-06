import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './notif.css';
import { fetchBiodataUmkm, BiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';

const NotifUMKM: Component = () => {

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
              <A href="/umkm/folls">
                <span class='folls'>
                  <p class='p1'>Followers</p>
                  <p>127</p>
                </span>
              </A>
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

          <div class='bodynotif'>
            <div class='titlenotif'>
              <Icon icon="basil:notification-solid" class="logonotif" />
              <div class='page-title-notif'>Notifikasi</div>
              <hr />
            </div>

              <div class='isinotif'>
                {/* Notifikasi pertama */}

                <div class="cont-notif">
                <a class='rout-notif' href="#">
                  <div class='barisnotif'>
                    <div class='avanotif'>
                        <img src="/src/assets/avatikasidebarr.png" alt="" />
                    </div>
                    <div class='textnotif'>
                      <div class='baris1'>
                        <div class='namenotif'>Rahmanita Budiawanty</div>
                        <div class='activitynotif'>menyukai unggahan anda.</div>
                      </div>
                      <div class='timenotif'>20 minutes ago</div>
                    </div>
                  </div>
                </a>
                <hr />
                {/* Garis pemisah */}
                </div>
                {/* Lanjutan notifikasi lainnya ... */}

              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotifUMKM;
