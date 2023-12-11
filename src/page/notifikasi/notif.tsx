import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './notif.css';
import '../dashboard/dashboard_umkm.css';
import '../dashboard/folls.css';
// import '../profil_umkm/profil_umkm.css';
import 'daisyui/dist/full.css';
import { fetchBiodataUmkm, BiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchCountFolls } from '../../api/followers';
import { fetchGetNotifikasi } from '../../api/notifikasi';

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

  //--------------------------------------------------------
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

const urlGambar = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;
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
                                <img src={urlGambar(gambar.gambar.toString())} alt="" />
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

          <div class='bodynotif'>
            <div class='titlenotif'>
              <Icon icon="basil:notification-solid" class="logonotif" />
              <div class='page-title-notif'>Notifikasi</div>
              <hr />
            </div>

              <div class='isinotif'>
                {/* Notifikasi pertama */}
                  <For each={(getNotif() || []) as GetNotifikasi[]}>
                  {(notif) => (
                    <div class="cont-notif">
                      <a class='rout-notif' href="#">
                        <div class='barisnotif'>
                          <div class='avanotif'>
                            <img src={`/src/assets/profile/${notif.gambar}`} alt="" />
                          </div>
                          <div class='textnotif'>
                            <div class='baris1'>
                              <div class='namenotif'>{notif.nama_akun}</div>
                              {notif.tipe === 'New Like' && (
                                <div class='activitynotif'>menyukai unggahan anda.</div>
                              )}
                              {notif.tipe === 'New Comment' && (
                                <div class='activitynotif'>Mengomentari unggahan anda.</div>
                              )}
                              {notif.tipe === 'New Follower' && (
                                <div class='activitynotif'>Mulai mengikuti anda.</div>
                              )}
                            </div>
                            <div class='timenotif'>{formatTimeDifference(notif.created_at)}</div>
                          </div>
                        </div>
                      </a>
                      <hr />
                      {/* Garis pemisah */}
                    </div>
                  )}
                </For>
                {/* Lanjutan notifikasi lainnya ... */}
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotifUMKM;
