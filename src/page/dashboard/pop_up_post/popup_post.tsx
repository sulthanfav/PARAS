import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_post.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

interface PopUpPostProps {
  onClose: () => void,
}


const Popup_post: Component<PopUpPostProps> = (props) => {

    return (
        <>
        <div class='overlay'>
            <div class='popup-post' id='post_popup'>
            <span>Buat Unggahan Baru</span>
            <Icon icon="ep:close-bold" class="feeds-icon-exit" onclick={props.onClose}></Icon>
            <div class='cont-poppost'>
                <Icon icon="solar:home-add-bold" class='icon-cont-post'></Icon>
                <div class='post-input'>
                <input type="text" placeholder='Judul Unggahan' class='judul-post'/>
                <br />
                <hr />
                {/* <input type="text" class='deskripsi-post' placeholder='Deskripsi Post'/> */}
                <textarea name="" id="" cols="76" rows="2" placeholder='Deskripsi Unggahan'></textarea>
                </div>
            </div>
            <select name="" id="">
                <option value="">Fashion</option>
                <option value="">ama</option>
                <option value="">Fashion Pria</option>
                <option value="">Fashion Wanita</option>
            </select>
                <Icon icon="mingcute:attachment-line" class='attc-icon'></Icon>
                <Icon  icon="ph:link-bold" class='link-icon'></Icon>
                <button>Unggah</button>
        </div>
        </div>
        </>

)};

export default Popup_post;