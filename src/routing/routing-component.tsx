import { lazy, type Component } from 'solid-js';
import { createEffect } from 'solid-js';
import { createSignal, onCleanup } from "solid-js";
import { useStore } from '../integration-extension/store';
import {Router, Routes, Route, hashIntegration, Navigate, useNavigate} from '@solidjs/router' ;
import home_profile_umkm from '../page/home-personal/home_profile_umkm/home_profile_umkm';

interface UserData {
    "nama_akun": String,
    "email": String,
    "access": String,
    "username": String,
    "password": String
  }

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

//--------------ROUTE-UMKM-------------------------
const Folls = lazy(() => import('../page/dashboard/folls'));
const Popup_post = lazy(() => import('../page/dashboard/pop_up_post/popup_post'));
const Popup_feeds = lazy(() => import('../page/pop_up_feeds/popup_feeds'));
const Popup_feeds_edit = lazy(() => import('../page/pop_up_feeds/popup_feeds_edit'));
const ProfilUMKM = lazy(() => import('../page/profil_umkm/profil_umkm'));
const EditProfilUMKM = lazy(() => import('../page/profil_umkm/edit_profile_umkm'));
const PengaturanUMKM = lazy(() => import('../page/pengaturan/pengaturan'));
const PengaturanIsiUMKM = lazy(() => import('../page/pengaturan/pengaturan_isi'));
const NotifUMKM = lazy(() => import('../page/notifikasi/notif'));
const PopupLogoutUMKM = lazy(() => import('../page/popup_logout/popup_logout'));
const RegisterUMKMPage1 = lazy(() => import('../page/register/registerUMKMpage1'));
const RegisterUMKMPage2 = lazy(() => import('../page/register/registerUMKMpage2'));
const Popup_notif = lazy(() => import('../assets/popup/popup_notif/popup_notif'));
const Dashboard = lazy(() => import('../page/dashboard/dashboard_umkm'));
//--------------ROUTE-PERSONAL---------------------
const Home = lazy(() => import('../page/home-personal/home'));
const Home_Profile_Umkm = lazy(() => import('../page/home-personal/home_profile_umkm/home_profile_umkm'));
const ProfilUser = lazy(() => import('../page/profil_user/profil_user'));
const DisukaiUser = lazy(() => import('../page/disukai/disukai'));
const HomeSearchUser = lazy(() => import('../page/home_search/home_search'));
const PengaturanUser = lazy(() => import('../page/pengaturan/pengaturanuser'));
const PengaturanUser2 = lazy(() => import('../page/pengaturan/pengaturanuser2'));
const Paras = lazy(() => import('../page/paras/paras'));
const RegisterPersonalPage1 = lazy(() => import('../page/register/registerPersonalpage1'));
const RegisterPersonalPage2 = lazy(() => import('../page/register/registerPersonalpage2'));
const Popup_logout = lazy(() => import('../assets/popup/popup_logout/popup_logout'));
const Popup_reply = lazy(() => import('../assets/popup/popup_reply/popup_reply'));
const Popup_lagi_reply = lazy(() => import('../assets/popup/popup_lagi_reply/popup_lagi_reply'));
const Popup_feeds_disukai = lazy(() => import('../assets/popup/popup_feeds_disukai/popup_feeds_disukai'));
const Popup_hapus = lazy(() => import('../assets/popup/popup_hapus/popup_hapus'));

const Login = lazy(() => import('../page/login/login'));

const getPath = (e: any) => {
  return '/BeforeLogin/Paras';
}

const Root: Component = () => {
    const navigate = useNavigate();
  const [{ sessionStore }] = useStore();

  createEffect(() => {
    const userDataString = sessionStore.sessionData as unknown as string;

    if (!userDataString) {
      // If there is no session data, user is not logged in
      navigate('/BeforeLogin/Paras');
    } else {
      // User is logged in, extract user data and determine route
      const userData = JSON.parse(userDataString) as UserData;
      const userAccess = userData.access;

      if (userAccess === 'umkm') {
        navigate('/umkm/dashboard');
      } else {
        navigate('/personal/home');
      }
    }
  });
    // const [{ sessionStore }] = useStore();

    // const userDataString = sessionStore.sessionData as unknown as string; // Ensure sessionData is a string
    // const userData = JSON.parse(userDataString) as UserData; // Parse the JSON string to an object
    // const userAccess = userData.access;

    // const getPath = () => {
    //     if (userData.access === 'umkm') {
    //         return "/umkm/dashboard";
    //     }  else {
    //         return "/personal/home";
    //     }
    // }

    return (
    <> 
    {/* <Router source={hashIntegration()}> */}
        <Routes>
            <Route path="/" element={ <Navigate href={getPath}/> } />
            {/* Rute sebelum login */}
            <Route path="/BeforeLogin">
              <Route path="/Paras" component={ Paras } />
              <Route path="/RegisterUMKMPage1" component={ RegisterUMKMPage1 } />
              <Route path="/RegisterUMKMPage2" component={ RegisterUMKMPage2 } />
              <Route path="/RegisterPersonalPage1" component={ RegisterPersonalPage1 } />
              <Route path="/RegisterPersonalPage2" component={ RegisterPersonalPage2 } />
              <Route path="/login" component={ Login } />
            </Route>

            {/* Rute setelah login sebagai umkm*/}
            <Route path="/umkm" >
              <Route path="/dashboard" component={ Dashboard } />
              <Route path="/NotifUMKM" component={ NotifUMKM } />
              <Route path="/PengaturanUMKM" component={ PengaturanUMKM } />
              <Route path="/PengaturanIsiUMKM" component={ PengaturanIsiUMKM } />
              <Route path="/Folls" component={ Folls } />
              {/* <Route path="/Popup_feeds_edit" component={ <Popup_feeds_edit/> } /> */}
              
              <Route path="/EditProfilUMKM" component={ EditProfilUMKM } />
              <Route path="/ProfilUMKM" component={ ProfilUMKM } />
            </Route>

            {/* Rute setelah login sebagai personal*/}
            <Route path="/personal" >
              <Route path="/home" component={ Home } />
              <Route path="/ProfilUser" component={ ProfilUser } />
              <Route path="/DisukaiUser" component={ DisukaiUser } />
              <Route path="/HomeSearchUser" component={ HomeSearchUser } />
              <Route path="/PengaturanUser" component={ PengaturanUser } />
              <Route path="/PengaturanUser2" component={ PengaturanUser2 } />
              <Route path="/HomeProfileUmkm/:akun_id?" element={<Home_Profile_Umkm />} />
              {/* <Route path="/PopupLogoutUMKM" component={ <PopupLogoutUMKM/> } /> */}
              {/* <Route path="/LoginUMKM" component={ <LoginUMKM/> } /> */}
              {/* <Route path="/Popup_logout" component={ <Popup_logout/> } /> */}
              {/* <Route path="/Popup_notif" component={ <Popup_notif/> } />
              <Route path="/Popup_reply" component={ <Popup_reply/> } />
              <Route path="/Popup_lagi_reply" component={ <Popup_lagi_reply/> } />
              <Route path="/Popup_feeds_disukai" component={ <Popup_feeds_disukai/> } />
              <Route path="/Popup_hapus" component={ <Popup_hapus/> } /> */}
            </Route>
        </Routes>
    {/* </Router> */}
    </>
  );
};

export default Root;