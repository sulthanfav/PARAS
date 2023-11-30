import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './profil_umkm.css';

// Fungsi untuk menentukan path
const pathFn = (e: any) => {
  console.log('pathFn', e);
  return '/ProfilUMKM';
}

// Komponen ProfilUMKM
const ProfilUMKM: Component = () => {
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

export default ProfilUMKM;
