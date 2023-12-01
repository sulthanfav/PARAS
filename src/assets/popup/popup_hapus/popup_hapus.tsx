import { Component } from "solid-js";
import './popup_hapus.css';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";


const Popup_hapus: Component = () => {
    return (
        <>
        <div class="popup">

     
       
            <div class="validasi">
                Apakah Anda yakin ingin menghapus unggahan ini?  
                <div class="answer">
                    <button class="tidak">
                        Batal
                    </button>
                    <button class="iya">
                        Hapus
                </button>
                </div>
            </div>
  
        </div>
        
        </>
    )};
    export default Popup_hapus;