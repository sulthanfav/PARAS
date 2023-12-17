import { Component, onMount, createSignal, onCleanup } from "solid-js";
import './profil_user.css';
// import Navbar from '../page/navbar/nav-side';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import '../profil_umkm/profil_umkm.css'
import { BiodataPersonal, fetchBiodataPersonal } from "../../api/akun";
import { CountFollsPersonal, fetchCountFollsPersonal } from "../../api/followers";
import Popup_logout from "../../assets/popup/popup_logout/popup_logout";
import '../home-personal/home.css'
import '../profil_umkm/profil_umkm.css'
import '../disukai/disukai.css'

const ProfilUser: Component = () => {

  //=======================================
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

  //==========================================
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
            <div class='titleprofile'>
              <Icon icon="iconamoon:profile-fill" class="ikon-sett-profile"/>
              <div class='page-title-pengaturan'>Profile</div>
              <hr />
              <div class='bungkus-edit-pengaturan'>
                <button class="btnedit">
                  <Icon class='editprofile-pengaturan' icon="iconamoon:edit-fill"/>
                  <span class='btnedit-text'>Ubah Profile </span>
                </button>
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
                  <div class='form-profile'>Kategori Usaha</div>
                  <div class="profile-isi">
                    <span>{biodataPersonal().map((ttl) => ttl.tempat_tanggal_lahir)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Nomor Kontak</div>
                  <div class="profile-isi">
                    <span>{biodataPersonal().map((alamat) => alamat.alamat)}</span>
                  </div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>NIB (Nomor Induk Berusaha)</div>
                  <div class="profile-isi">
                    <span>{biodataPersonal().map((jenis_kelamin) => jenis_kelamin.jenis_kelamin)}</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
        </>
    )};
    export default ProfilUser;