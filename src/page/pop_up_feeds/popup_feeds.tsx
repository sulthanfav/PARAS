import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_feeds.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import { fetchPostingan, Postingan } from '../../api/postingan';
import { fetchPostinganSelected } from '../../api/postinganselected';

// interface Postingan {
//   gambar: any;
//   post_id: number;
//   akun_id: number;
//   nama?: string;
//   deskripsi?: string;
//   tag?: string;
//   jenis_postingan?: string;
//   created_at?: Date | null;
//   link: string;
// }

interface PopUpFeedsProps {
  onClose: () => void;
  postinganselect: Postingan | null;
  postId: number | null;
//   postinganselect: Postingan | null;
//   gambar: Gambar[] | null;
}


const Popup_feeds: Component<PopUpFeedsProps> = (props) => {
onMount(async () => {
  // Ambil nilai post_id dari prop atau state, sesuai dengan implementasi Anda
  const post_id = props.postId;

  // Pemeriksaan null sebelum menggunakan post_id
  if (post_id !== null) {
    // Ambil data menggunakan nilai post_id
    const result = await fetchPostinganSelected(post_id);

    // Lakukan logika tambahan atau rendering berdasarkan data yang diambil
    console.log("Result from fetchPostinganSelected in PopupFeeds:", result);
  } else {
    console.error("post_id is null");
  }
});

    //------------------------------------------------------
// const [postingan, setPostingan] = createSignal<Postingan[]>([]);
//   onMount(async () => {
//     try {
//       const dataPostingan = await fetchPostingan();
//       console.log("test_data_posting", dataPostingan)
//       if (dataPostingan) {
//         setPostingan(dataPostingan);
//         console.log("props.postId:", props.postId);
//     //   console.log("Postingan with matching post_id:", dataPostingan.find(post => post.post_id === props.postId));
//       }
//     } catch (error) {
//       console.error("Error fetching Postingan", error);
//     }    
//   });
  //======================================================
//   const [selectedPost, setSelectedPost] = createSignal<Postingan | null>(null);
// // Di dalam blok onMount
// onMount(async () => {
//   try {
//     const dataPostingan = await fetchPostingan();
//     console.log("test_data_posting", dataPostingan)
//     if (dataPostingan) {
//       setPostingan(dataPostingan);
//       console.log("props.postId:", props.postId);
//       const post = dataPostingan.find((post: Postingan) => post.post_id === props.postId);
//       setSelectedPost(post || null);
//     }
//   } catch (error) {
//     console.error("Error fetching Postingan", error);
//   }
// });
// const selectedPost = postingan().find((post: Postingan) => post.post_id === props.postId);
    // const selectedPost = props.postinganselect;
    // console.log(props.postinganselect)
    console.log(props.postId)

    return (
        <>
        <div class='overlay'>
        <div class='feeds'>
            <div class='feeds-judul'>
                <span>Lorem Ipsum Dolor Sit Amet</span>
                <Icon icon="ep:close-bold" class='feeds-icon-exit' onclick={props.onClose}></Icon>
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
        </div>
        </>
        )};

export default Popup_feeds;
