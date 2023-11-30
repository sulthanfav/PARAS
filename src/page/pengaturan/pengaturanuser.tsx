import { Component } from "solid-js";
// import './pengaturanuser.css';
// import Navbar from '../page/navbar/nav-side';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";

// const pathFn = (e: any) => {
//     console.log('pathFn', e);
//     return '/PengaturanUser';
//   }

const PengaturanUser: Component = () => {
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
              <Icon icon="basil:settings-solid" class="ikon-sett-profile"/>
              <div class='page-title-pengaturan'>Pengaturan</div>
              <hr />
              <div class='bungkus-edit-pengaturan'>
                <button class="btnedit">
                  <Icon class='editprofile-pengaturan' icon="iconamoon:edit-fill"/>
                  <span class='btnedit-text'>Ubah Pengaturan Akun </span>
                </button>
              </div>
            </div>

            <div class='bodyprofile'>
              <div class='bodycontent-pengaturan'>
                <div class='bodyform'>
                  <div class='form-profile'>Email</div>
                  <div><input type="text" placeholder="2110512127@mahasiswa.upnvj.ac.id" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
                <div class='bodyform'>
                  <div class='form-profile'>Kata Sandi</div>
                  <div><input type="text" placeholder="********" class="isianprofile input input-bordered w-full max-w-xs" /></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        
        </>
    )};
    export default PengaturanUser;