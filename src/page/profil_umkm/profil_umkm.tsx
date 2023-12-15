import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './profil_umkm.css';
import '../disukai/disukai.css'
import '../pengaturan/pengaturan.css'
import '../profil_user/profil_user.css'
import { fetchBiodataUmkm, BiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchCountFolls } from '../../api/followers';

interface CountFolls {
  count: number;
  // Sesuaikan dengan properti lain yang mungkin ada
}

// Komponen ProfilUMKM
const ProfilUMKM: Component = () => {
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
  const urlGambar = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;
  //======================================================
const [GetbiodataUmkm, setGetBiodtaUmkm] = createSignal<BiodataUmkm>();
  onMount(async () => {
    try {
      const biodataUmkm = await fetchBiodataUmkm();
      // console.log(biodataUmkmArray);

      if (biodataUmkm) {
        setGetBiodtaUmkm(biodataUmkm);
      } else {
        console.error('Data yang diterima bukan array GambarPostingan');
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
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

          <div class="bg-all">
            <div class='titleprofile'>
              <Icon icon="iconamoon:profile-fill" class="ikon-sett-profile"/>
              <div class='page-title-pengaturan'>Profile</div>
              <hr />
              <div class='bungkus-edit-pengaturan'>
                <button class="btnedit">
                  <Icon class='editprofile-pengaturan' icon="iconamoon:edit-fill"/>
                  <A href="/umkm/EditProfilUMKM"><span class='btnedit-text'>Ubah Profile </span></A>
                </button>
              </div>
            </div>

            <div class='cont-body-profile'>
              <div class='bodyheader-profile'>
                <div class='ava-profile'>
                {gambarProfile().map((gambar) => (
                  <img src={urlGambar(gambar.gambar.toString())} alt="" />
                ))}
                </div>
                <div class='name-usn'>
                  <div class='profile-name'>{namaAkun()}</div>
                  <hr />
                  <div class='username'>@{userData?.username}</div>
                </div>
              </div>

              <div class='bodycontent-profile'>
                <div class='bodyform'>
                  <div class='form-profile'>Kategori Usaha</div>
                  <div class="profile-isi">
                    <span>{gambarProfile().map((kategori) => kategori.kategori)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Nomor Kontak</div>
                  <div class="profile-isi">
                    <span>{gambarProfile().map((Nomor) => Nomor.kontak_bisnis)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>NIB (Nomor Induk Berusaha)</div>
                  <div class="profile-isi">
                    <span>{gambarProfile().map((NIB) => NIB.nib)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Deskripsi Toko</div>
                  <div class="profile-isi-desc">
                    <span>{gambarProfile().map((deskripsi) => deskripsi.deskripsi_toko)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Alamat Toko</div>
                  <div class="profile-isi-desc">
                    <span>{gambarProfile().map((desc) => desc.alamat_toko)}</span>
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

export default ProfilUMKM;
