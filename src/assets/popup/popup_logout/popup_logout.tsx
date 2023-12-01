import { Component } from "solid-js";
import './popup_logout.css';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import logout from "../../image/logout.png";

const Popup_logout: Component = () => {
    return (
        <>
        <div class="popup">

            <div class="gambar">
                <img src='src/assets/image/logout.png'></img>
            </div>
       
            <div class="validasi">
                Apakah Anda yakin ingin keluar?  
                <div class="answer">
                    <button class="tidak">
                        Batal
                    </button>
                    <button class="iya">
                        Ya
                </button>
                </div>
            </div>
  
        </div>
        
        </>
    )};
    export default Popup_logout;