import type { Component } from 'solid-js';

import {Router, Routes, Route, hashIntegration, Navigate} from '@solidjs/router' 
import Dashboard from '../page/dashboard/dashboard_umkm';
import Folls from '../page/dashboard/folls';
import Popup_post from '../page/dashboard/pop_up_post/popup_post';
import Popup_feeds from '../page/pop_up_feeds/popup_feeds';
import Popup_feeds_edit from '../page/pop_up_feeds/popup_feeds_edit';
import Home from '../page/home-personal/home';
import home_profile_umkm from '../page/home-personal/home_profile_umkm/home_profile_umkm';
import Home_profile_umkm from '../page/home-personal/home_profile_umkm/home_profile_umkm';
import ProfilUMKM from '../page/profil_umkm/profil_umkm';
import PengaturanUMKM from '../page/pengaturan/pengaturan';
import PengaturanIsiUMKM from '../page/pengaturan/pengaturan_isi';
import NotifUMKM from '../page/notifikasi/notif';
import ProfilUser from '../page/profil_user/profil_user';
import DisukaiUser from '../page/disukai/disukai';
import HomeSearchUser from '../page/home_search/home_search';
import PengaturanUser from '../page/pengaturan/pengaturanuser';
import PengaturanUser2 from '../page/pengaturan/pengaturanuser2';
import PopupLogoutUMKM from '../page/popup_logout/popup_logout';
import Paras from '../page/paras/paras';
import RegisterUMKMPage1 from '../page/register/registerUMKMpage1';
import RegisterUMKMPage2 from '../page/register/registerUMKMpage2';
import RegisterPersonalPage1 from '../page/register/registerPersonalpage1';
import RegisterPersonalPage2 from '../page/register/registerPersonalpage2';
// import LoginUMKM from '../page/login/loginUMKM';
import LoginPersonal from '../page/login/loginPersonal';

const pathFn = (e: any) => {
  console.log('pathFn', e);
  return '/dashboard';
  return '/folls';
  return '/popup_feeds';
  return '/popup_feeds_edit';
  return '/home';
  return '/home_profile_umkm';
}

const Root: Component = () => {
  return (
    <> 
    <Router 
    source={hashIntegration()}
    >
        <Routes>
            <Route path="/" element={ <Navigate href={pathFn}/> } />
            <Route path="/Dashboard" element={ <Dashboard/> } />
            <Route path="/Folls" element={ <Folls/> } />
            <Route path="/Popup_post" element={ <Popup_post/> } />
            <Route path="/Popup_feeds" element={ <Popup_feeds/> } />
            <Route path="/Popup_feeds_edit" element={ <Popup_feeds_edit/> } />
            <Route path="/Home" element={ <Home/> } />
            <Route path="/Home_profile_umkm" element={ <Home_profile_umkm/> } />
            <Route path="/ProfilUMKM" element={ <ProfilUMKM/> } />
            <Route path="/NotifUMKM" element={ <NotifUMKM/> } />
            <Route path="/PengaturanUMKM" element={ <PengaturanUMKM/> } />
            <Route path="/PengaturanIsiUMKM" element={ <PengaturanIsiUMKM/> } />
            <Route path="/ProfilUser" element={ <ProfilUser/> } />
            <Route path="/DisukaiUser" element={ <DisukaiUser/> } />
            <Route path="/HomeSearchUser" element={ <HomeSearchUser/> } />
            <Route path="/PengaturanUser" element={ <PengaturanUser/> } />
            <Route path="/PengaturanUser2" element={ <PengaturanUser2/> } />
            <Route path="/PopupLogoutUMKM" element={ <PopupLogoutUMKM/> } />
            <Route path="/Paras" element={ <Paras/> } />
            <Route path="/RegisterUMKMPage1" element={ <RegisterUMKMPage1/> } />
            <Route path="/RegisterUMKMPage2" element={ <RegisterUMKMPage2/> } />
            <Route path="/RegisterPersonalPage1" element={ <RegisterPersonalPage1/> } />
            <Route path="/RegisterPersonalPage2" element={ <RegisterPersonalPage2/> } />
            {/* <Route path="/LoginUMKM" element={ <LoginUMKM/> } /> */}
            <Route path="/LoginPersonal" element={ <LoginPersonal/> } />
        </Routes>
    </Router>
    </>
  );
};

export default Root;