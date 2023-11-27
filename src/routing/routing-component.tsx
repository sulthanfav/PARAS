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
        </Routes>
    </Router>
    </>
  );
};

export default Root;