import { Component } from "solid-js";
import './popup_logout.css';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import logout from "../../image/logout.png";

interface LogoutProps {
  onClose: () => void,
}

const Popup_logout: Component<LogoutProps> = (props) => {
    const navigate = useNavigate();
    const ActionLogout = () => {
        console.log('hallo logout');
        sessionStorage.clear();
        window.location.reload();
        navigate('/login')
      }
    return (
        <>
        <div class="overlay">
        <div class="popup">
            <div class="gambar">
                <img src='src/assets/image/logout.png'></img>
            </div>
            <div class="validasi">
                Apakah Anda yakin ingin keluar?  
                <div class="answer">
                    <button class="tidak"  onclick={props.onClose}>
                        Batal
                    </button>
                    <button class="iya" onClick={ActionLogout}>
                        Ya
                </button>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )};
    export default Popup_logout;