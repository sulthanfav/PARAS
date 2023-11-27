import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_feeds.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

const popup_feeds: Component = () => {

    return (
        <>
        <div class='feeds'>
            <div class='feeds-judul'>
                <span>Lorem Ipsum Dolor Sit Amet</span>
                <Icon icon="ep:close-bold" class='feeds-icon-exit'></Icon>
            </div>
            <div class='deskripsi-feeds'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
            </div>
            <hr />
            <div class='cont-pic'>
            <div class='cont-pic-feeds'></div>
            <div class='cont-pic-feeds'></div>
            <div class='cont-pic-feeds'></div>
            </div>
            <hr />
            <div class='intr-feeds'>
                <Icon  icon="flat-color-icons:like" class='icon-intr-feeds'></Icon>
                <span>127</span>
                <Icon  icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
                <span>345</span>
                <Icon  icon="ph:link-bold" class='icon-intr-feeds'></Icon>
                <span>Link Produk</span>
            </div>
            <hr />
            <div class='edit-feeds'>
                <div class='ubah-feeds'>
                    <span>Ubah Feeds</span>
                </div>
                <div class='hapus-feeds'>
                    <span>Hapus Feeds</span>
                </div>
            </div>
        </div>
        </>
        )};

export default popup_feeds;
