import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './profil_umkm.css';
import '../disukai/disukai.css'
import '../pengaturan/pengaturan.css'
import '../profil_user/profil_user.css'
import { fetchBiodataUmkm, BiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';

// Komponen ProfilUMKM
const EditProfilUMKM: Component = () => {
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

          <div class="bg-all">
            <div class='titleprofile'>
              <Icon icon="iconamoon:profile-fill" class="ikon-sett-profile"/>
              <div class='page-title-pengaturan'>Profile</div>
              <hr />
              <div class='bungkus-edit-pengaturan'>
                <div class="btnedit">
                  <Icon class='editprofile-pengaturan' icon="iconamoon:edit-fill"/>
                  <span class='btnedit-text'>Ubah Profile </span>
                </div>
              </div>
            </div>

            <div class='cont-body-profile'>
              <div class='bodyheader-profile'>
                <div class='ava-profile'>
                    <img src="/src/assets/avatikasidebarr.png" alt="" />
                </div>
                <div class='name-usn'>
                  <div class='profile-name'>Numani</div>
                  <hr />
                  <div class='username'>@username</div>
                </div>
              </div>

              <div class='bodycontent-profile'>
                <div class='bodyform'>
                  <div class='form-profile'>Nama Toko</div>
                  <div><input type="text" placeholder="Numani" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Kategori Usaha</div>
                  <div><input type="text" placeholder="Produk Makanan dan Minuman" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Nomor Kontak</div>
                  <div><input type="text" placeholder="021123456789" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>NIB (Nomor Induk Berusaha)</div>
                  <div><input type="text" placeholder="021123456789" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Deskripsi Toko</div>
                  <div><input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue porta purus vitae gravida." class="isianprofile-panjang input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Alamat Toko</div>
                  <div><input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue porta purus vitae gravida." class="isianprofile-panjang input input-bordered w-full max-w-xs" /></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EditProfilUMKM;
