import { Component } from "solid-js";
import './popup_logout.css';
// import Navbar from '../page/navbar/nav-side';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";

const pathFn = (e: any) => {
    console.log('pathFn', e);
    return '/PopupLogoutUMKM';
  }

const PopupLogoutUMKM: Component = () => {
    return (
        <>
            <div class='box1'>

            </div>
        </>
    )};
    export default PopupLogoutUMKM;