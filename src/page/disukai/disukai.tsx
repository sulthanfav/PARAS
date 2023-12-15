import { Component, onMount, createSignal, onCleanup } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './disukai.css';
import '../home_search/home_search.css'
import { BiodataPersonal, fetchBiodataPersonal } from "../../api/akun";
import { CountFollsPersonal, fetchCountFollsPersonal } from "../../api/followers";
import Popup_logout from "../../assets/popup/popup_logout/popup_logout";
import '../home-personal/home.css'

// Function to define the route
const pathFn = (e: any) => {
    console.log('pathFn', e);
    return '/DisukaiUser';
}

const DisukaiUser: Component = () => {
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
                            <div class='logoprofile'><Icon icon="icon-park-solid:like" class="logo-love-disukai"/></div>
                            <div class='page-title'>Disukai</div>
                            <hr />
                        </div>
                <div class="disukai-cont">
                <div class='main'>
                    <div class='postan'>
                        <div class='postan1'>
                            <div class='headline'>
                            <span class='judul'>Lorem Ipsum Dolor Sit Amet</span>
                            <Icon class='icon-menu-post' icon="charm:menu-kebab"></Icon> <br />
                            </div>
                            <span class='deskripsi1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo</span>
                            <div class='cont-gambar'>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar2-3'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
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
                                <div class='gambar1-1'></div>
                                <div class='gambar1-1'></div>
                            </div>
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

export default DisukaiUser;
