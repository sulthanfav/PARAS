// import type { Component } from 'solid-js';
import { lazy, type Component } from 'solid-js';
// import {Router, Routes, Route, hashIntegration, Navigate} from '@solidjs/router' 
import { createSignal, onCleanup } from "solid-js";

import {Router, Routes, Route, hashIntegration, Navigate} from '@solidjs/router' 
// import Dashboard from '../page/dashboard/dashboard_umkm';
// import Folls from '../page/dashboard/folls';
// import Popup_post from '../page/dashboard/pop_up_post/popup_post';
// import Popup_feeds from '../page/pop_up_feeds/popup_feeds';
// import Popup_feeds_edit from '../page/pop_up_feeds/popup_feeds_edit';
// import Home from '../page/home-personal/home';
// import Home_profile_umkm from '../page/home-personal/home_profile_umkm/home_profile_umkm';
// import ProfilUMKM from '../page/profil_umkm/profil_umkm';
// import EditProfilUMKM from '../page/profil_umkm/edit_profile_umkm';
// import PengaturanUMKM from '../page/pengaturan/pengaturan';
// import PengaturanIsiUMKM from '../page/pengaturan/pengaturan_isi';
// import NotifUMKM from '../page/notifikasi/notif';
// import ProfilUser from '../page/profil_user/profil_user';
// import DisukaiUser from '../page/disukai/disukai';
// import HomeSearchUser from '../page/home_search/home_search';
// import PengaturanUser from '../page/pengaturan/pengaturanuser';
// import PengaturanUser2 from '../page/pengaturan/pengaturanuser2';
// import PopupLogoutUMKM from '../page/popup_logout/popup_logout';
// import Paras from '../page/paras/paras';
// import RegisterUMKMPage1 from '../page/register/registerUMKMpage1';
// import RegisterUMKMPage2 from '../page/register/registerUMKMpage2';
// import RegisterPersonalPage1 from '../page/register/registerPersonalpage1';
// import RegisterPersonalPage2 from '../page/register/registerPersonalpage2';
// import LoginPersonal from '../page/login/login';
// import Popup_logout from '../assets/popup/popup_logout/popup_logout';
// import Popup_notif from '../assets/popup/popup_notif/popup_notif';
// import Popup_reply from '../assets/popup/popup_reply/popup_reply';
// import Popup_lagi_reply from '../assets/popup/popup_lagi_reply/popup_lagi_reply';
// import Popup_feeds_disukai from '../assets/popup/popup_feeds_disukai/popup_feeds_disukai';
// import Popup_hapus from '../assets/popup/popup_hapus/popup_hapus';

const Folls = lazy(() => import('../page/dashboard/folls'));
const Popup_post = lazy(() => import('../page/dashboard/pop_up_post/popup_post'));
const Popup_feeds = lazy(() => import('../page/pop_up_feeds/popup_feeds'));
const Popup_feeds_edit = lazy(() => import('../page/pop_up_feeds/popup_feeds_edit'));
const Home = lazy(() => import('../page/home-personal/home'));
const Home_profile_umkm = lazy(() => import('../page/home-personal/home_profile_umkm/home_profile_umkm'));
const ProfilUMKM = lazy(() => import('../page/profil_umkm/profil_umkm'));
const EditProfilUMKM = lazy(() => import('../page/profil_umkm/edit_profile_umkm'));
const PengaturanUMKM = lazy(() => import('../page/pengaturan/pengaturan'));
const PengaturanIsiUMKM = lazy(() => import('../page/pengaturan/pengaturan_isi'));
const NotifUMKM = lazy(() => import('../page/notifikasi/notif'));
const ProfilUser = lazy(() => import('../page/profil_user/profil_user'));
const DisukaiUser = lazy(() => import('../page/disukai/disukai'));
const HomeSearchUser = lazy(() => import('../page/home_search/home_search'));
const PengaturanUser = lazy(() => import('../page/pengaturan/pengaturanuser'));
const PengaturanUser2 = lazy(() => import('../page/pengaturan/pengaturanuser2'));
const PopupLogoutUMKM = lazy(() => import('../page/popup_logout/popup_logout'));
const Paras = lazy(() => import('../page/paras/paras'));
const RegisterUMKMPage1 = lazy(() => import('../page/register/registerUMKMpage1'));
const RegisterUMKMPage2 = lazy(() => import('../page/register/registerUMKMpage2'));
const RegisterPersonalPage1 = lazy(() => import('../page/register/registerPersonalpage1'));
const RegisterPersonalPage2 = lazy(() => import('../page/register/registerPersonalpage2'));
const Popup_logout = lazy(() => import('../assets/popup/popup_logout/popup_logout'));
const Popup_notif = lazy(() => import('../assets/popup/popup_notif/popup_notif'));
const Popup_reply = lazy(() => import('../assets/popup/popup_reply/popup_reply'));
const Popup_lagi_reply = lazy(() => import('../assets/popup/popup_lagi_reply/popup_lagi_reply'));
const Popup_feeds_disukai = lazy(() => import('../assets/popup/popup_feeds_disukai/popup_feeds_disukai'));
const Popup_hapus = lazy(() => import('../assets/popup/popup_hapus/popup_hapus'));

const Login = lazy(() => import('../page/login/login'));
const Dashboard = lazy(() => import('../page/dashboard/dashboard_umkm'));

const getPath = () => {
  return '/dashboard';
}

const Root: Component = () => {
  return (
    <> 
    {/* <Router source={hashIntegration()}> */}
        <Routes>
            <Route path="/" element={ <Navigate href={getPath}/> } />
            <Route path="/Dashboard" element={ <Dashboard/> } />
            <Route path="/Folls" element={ <Folls/> } />
            {/* <Route path="/Popup_post" element={ <Popup_post/> } /> */}
            {/* <Route path="/Popup_feeds" element={ <Popup_feeds/> } /> */}
            <Route path="/Popup_feeds_edit" element={ <Popup_feeds_edit/> } />
            <Route path="/Home" element={ <Home/> } />
            <Route path="/Home_profile_umkm" element={ <Home_profile_umkm/> } />
            <Route path="/ProfilUMKM" element={ <ProfilUMKM/> } />
            <Route path="/EditProfilUMKM" element={ <EditProfilUMKM/> } />
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
            <Route path="/login" element={ <Login/> } />
            <Route path="/Popup_logout" element={ <Popup_logout/> } />
            <Route path="/Popup_notif" element={ <Popup_notif/> } />
            <Route path="/Popup_reply" element={ <Popup_reply/> } />
            <Route path="/Popup_lagi_reply" element={ <Popup_lagi_reply/> } />
            <Route path="/Popup_feeds_disukai" element={ <Popup_feeds_disukai/> } />
            <Route path="/Popup_hapus" element={ <Popup_hapus/> } />
        </Routes>
    {/* </Router> */}
    </>
  );
};

export default Root;