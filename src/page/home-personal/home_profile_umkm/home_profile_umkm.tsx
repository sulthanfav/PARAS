import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './home_profile_umkm.css';
import "daisyui/dist/full.css";
import { A, useNavigate, useParams } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import Popup_logout from '../../../assets/popup/popup_logout/popup_logout';
import { fetchBiodataPersonal, fetchAkunUmkmHome, BiodataUmkm, AkunUmkmHome, fetchBiodataUmkmHome } from '../../../api/akun';
import { fetchCountFollsPersonal } from '../../../api/followers';
import { PostinganUmkmHome, GambarUmkmHome, fetchPostinganUmkmHome } from '../../../api/postingan';
import '../../dashboard/dashboard_umkm.css'

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

const Home_Profile_Umkm: Component = () => {
    const { akun_id } = useParams();
  const navigate = useNavigate();
    console.log('akun_id:', akun_id)

    //==========================================

const [AkunUmkmHome, setAkunUmkmHome] = createSignal<AkunUmkmHome[]>([]);
onMount(async () => {
  try {
    const biodataUmkmhome = await fetchAkunUmkmHome(parseInt(akun_id, 10));
    console.log(biodataUmkmhome);

    if (Array.isArray(biodataUmkmhome)) {
      setAkunUmkmHome(biodataUmkmhome);
    } else {
      console.error('Data yang diterima bukan array GambarPostingan');
    }
  } catch (error) {
    console.error("Error fetching Postingan", error);
  }
});
    //==========================================

const [BiodataUmkmHome, setBiodataUmkmHome] = createSignal<BiodataUmkm[]>([]);
onMount(async () => {
  try {
    const biodataUmkmhome = await fetchBiodataUmkmHome(parseInt(akun_id, 10));
    console.log(biodataUmkmhome);

    if (Array.isArray(biodataUmkmhome)) {
      setBiodataUmkmHome(biodataUmkmhome);
    } else {
      console.error('Data yang diterima bukan array GambarPostingan');
    }
  } catch (error) {
    console.error("Error fetching Postingan", error);
  }
});


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

  //=========================================================================
    const [postingan, setPostingan] = createSignal<PostinganUmkmHome[]>([]);
  onMount(async () => {
    try {
      const dataPostingan = await fetchPostinganUmkmHome(parseInt(akun_id, 10));
      // console.log("test_data_posting", dataPostingan)
      if (dataPostingan) {
        setPostingan(dataPostingan);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });

    const renderGambar = (gambar: GambarUmkmHome[], postPath: string) => (
    <div class={`cont-gambar`}>
      <For each={gambar}>{(g: GambarUmkmHome, i) => (
        <div class={`gambar-${i() + 1}`}>
          <img src={`${postPath}/${g.nama_gambar}`} alt={`gambar-${i() + 1}`} />
        </div>
      )}</For>
    </div>
  );

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
                
                <div class='cont-home-profile-umkm'>

                    <div class='batas-home'>
                        <Icon  icon="ic:round-home" class='iconbatas'></Icon>
                        <span>Beranda</span>
                        <hr class='hr-home'/>
                    <input type="text" placeholder='Cari..'/>
                    </div>

                    <div class='home-profile-umkm'>
                        <div class='profile-akun-home'>
                            <div class='profile-akun-umkm'>
                            {BiodataUmkmHome().map((gambar) => (
                                <img src={urlGambar(gambar.gambar)} alt="" />
                            ))}
                            </div>
                            <div class='cont-nama-usn-desc'>
                                <div class='nama-profile-akun'>
                                    <span class='nama-akun-prof'>{AkunUmkmHome().map((nama) => nama.nama_akun)}</span>
                                    <span class='usn-akun-prof'>@{AkunUmkmHome().map((usn) => usn.username)}</span>
                                </div>
                                <div class='desc-prof-umkm'>
                                    {BiodataUmkmHome().map((deskripsi) => deskripsi.deskripsi_toko)}
                                </div>
                            </div>
                            <div class='follow-akun-cont'>
                                <div class='follow-akun'>
                                    ikuti akun
                                </div>
                            </div>
                        </div>
                        <hr />
                    
                    <div class='postan'>
                        <For each={postingan()} fallback={<div class="pinwheel"><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div><div class="pinwheel__line"></div></div>}>{(post: PostinganUmkmHome) => (
                            <div class={`postan${post.gambar.length}`}>
                            <div class='headline'>
                            <span class='judul'>{post.nama}</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>{post.deskripsi}</span>
                            {renderGambar(post.gambar, '/src/assets/postingan')}
                        </div>
                        )}</For>
                    </div>

                    </div>

                </div>

            </div>
        </div>
                </>
    )};

    export default Home_Profile_Umkm;