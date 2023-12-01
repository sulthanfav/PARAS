import { Component } from "solid-js";
import './popup_reply.css';
import { A,useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";

const Popup_reply: Component = () => {
    return (
        <>
     <div class="notif">
            <div class="judul">
                    Berjualan Hijab Paris Lokal Asli
                    <Icon icon="iconamoon:close-bold" style="color: #333;" class="icon-close" />
            </div>

            <div class="deskripsi">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

            </div>
            
        <hr class="hr1"></hr> 

        <div class="gambar-container">
          <div class="gambar-left">
            <div class="left1"></div>
            <div class="left2"></div>
          </div>

          <div class="gambar-right">
            <div class="right"></div>
          </div>

        </div>

        <hr class="hr2"></hr> 

        <div class="icon-container">
            <div class="like">
                <Icon icon="icon-park-solid:like" style="color: rgba(51, 51, 51, 0.8);" class="love-icon" />
                127
                <div class="komen">
                <Icon icon="iconamoon:comment-fill" style="color: rgba(51, 51, 51, 0.8);" class="comment-icon" /> {/* Ikon Komentar */}
                250
            </div>
            </div>

            <div class="link">
            <a href="URL_TUJUAN" target="_blank">
            <Icon icon="humbleicons:link" class="link-icon" style="color: rgba(37, 92, 173, 0.8);"> </Icon>            
            Link Produk</a>
            </div>
        </div>


        <hr class="hr2"></hr> 

        <div class="comment-container">

            <div class="tika">
                <img class="gambar-tika" src='src/assets/image/tika.png'></img>
            </div>

            <div class="deskripsi-komen">
                <div class="name-personal">
                    Kartikampr
                    <div class="komen-personal">
                        Apakah bisa COD ke Bekasi?
                    </div>
                </div>

                <div class="reply">
                    <div class="waktu">
                        2m ago
                    </div>
                    <div class="text-reply">
                        Reply
                    </div>
                </div>
            </div>
         
        </div>
        
        
        <div class="container-reply">
            <div>
            <img class="reply-image" src='src/assets/image/numani_reply.png'></img>
            </div>
            <input class="reply-text" type="text" placeholder="Tulis komentar Anda di sini"/>
            <Icon icon="mingcute:send-fill" style="color: #333;" class="love-icon" />
        </div>
              
    </div>
        
        </>
    )};
    export default Popup_reply;