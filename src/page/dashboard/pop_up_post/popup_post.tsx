import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_post.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const popup_post: Component = () => {

    return (
        <>
        <div class='popup-post'>
            <span>Buat Unggahan Baru</span>
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
                <option value="">Kategori Anda</option>
                <option value="">Kategori Anda</option>
                <option value="">Kategori Anda</option>
                <option value="">Kategori Anda</option>
            </select>
                <Icon icon="mingcute:attachment-line" class='attc-icon'></Icon>
                <Icon  icon="ph:link-bold" class='link-icon'></Icon>
                <button>Unggah</button>
        </div>
        </>

)};

export default popup_post;