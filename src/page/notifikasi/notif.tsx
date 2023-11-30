import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './notif.css';

// Fungsi untuk menentukan path
const pathFn = (e: any) => {
  console.log('pathFn', e);
  return '/NotifUMKM';
}

// Komponen NotifUMKM
const NotifUMKM: Component = () => {
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
            <div class='profile-side'>
              <img src="/src/assets/Ellipse_14.png" alt="" />
              <span class='nama'>
                <h2>Sulthan</h2>
              </span>
              <span class='deskripsi'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</p>
              </span>
              <A href="/folls">
                <span class='folls'>
                  <p class='p1'>Followers</p>
                  <p>127</p>
                </span>
              </A>
            </div>
            <div class='side-menu'>
              <ul>
                <a href="#"><li><Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></a>
                <a href="#"><li><Icon icon="mingcute:notification-fill" class='icon-side'></Icon> Notifikasi</li></a>
                <a href="#"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></a>
                <a href="#"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></a>
                <a href="#"><li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li></a>
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
