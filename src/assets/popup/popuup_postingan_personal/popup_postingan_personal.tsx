import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import '../../../page/pop_up_feeds/popup_feeds.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import "solid-slider/slider.css"; 
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import './popup_postingan_personal.css' 
import { fetchPostingan, Postingan, PostinganPersonal } from '../../../api/postingan';
import { fetchPostinganPersonalSelected, PostinganPersonalSelected, GambarPersonalSelected } from '../../../api/postinganselected';

interface PopUpFeedsPersonalProps {
  onClose: () => void;
  postinganselect: Postingan | PostinganPersonal | null;
  postId: number | null;
}


const Popup_feeds_personal: Component<PopUpFeedsPersonalProps> = (props) => {
  const [resultObject, setResultObject] = createSignal<PostinganPersonalSelected | null>(null);

  onMount(async () => {
    const post_id = props.postId;
    if (post_id !== null) {
      try {
        const resultArray = await fetchPostinganPersonalSelected(post_id);
        const resultObjectFromApi = resultArray.length > 0 ? resultArray[0] : null;

        if (resultObjectFromApi !== null) {
          setResultObject(resultObjectFromApi);
          console.log("Result from fetchPostinganSelected in PopupFeeds:", resultObjectFromApi);
        } else {
          console.error("Array is empty");
        }
      } catch (error) {
        console.error("Error fetching postingan:", error);
      }
    } else {
      console.error("post_id is null");
    }
  });

    const navigate = useNavigate();

  return (
    <>
      <div class='overlay'>
        <div class='feeds'>
          <div class='cont-feeds'>
            <div class='cont-header' onClick={() => navigate(`/personal/HomeProfileUmkm`)}>
                <div class='gambar_profile'>
                <img src={`/src/assets/profile/${resultObject()?.gambar_profile}`} alt="" />
            </div>
                <div class='nama-judul'>
            <div class='nama_akun'>{resultObject()?.nama_akun}</div>
          <div class='feeds-judul'>
            <span>{resultObject()?.nama}</span>
          </div>
                </div>
            </div>
          <div class='deskripsi-feeds-personal'>
            <span>{resultObject()?.deskripsi}</span>
          </div>
          <hr />
            <SliderProvider>
              <div class='cont-pic'>
              <div class="">
                <SliderButton prev class="">
                  &lt;
                </SliderButton>
              </div>
              <div class="cont-pic-feeds">
                <Slider options={{ loop: true }} >
                  {resultObject()?.gambar ? (
                    resultObject()?.gambar.map((gambar: GambarPersonalSelected, index: number) => (
                        <img src={gambar.path} />
                    ))
                    ) : (
                      <div></div>
                      )}
                </Slider>
              </div>
              <div class="next">
                <SliderButton next class=''>
                  &gt;
                </SliderButton>
              </div>
              </div>
            </SliderProvider>
          <hr />
          <div class='intr-feeds'>
            <Icon icon="flat-color-icons:like" class='icon-intr-feeds'></Icon>
            <span>127</span>
            <Icon icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
            <span>345</span>
            <div class='link'>
            <Icon icon="ph:link-bold" class='icon-intr-feeds'></Icon>
            <span>{resultObject()?.link}</span>
            </div>
          </div>
          <hr />
          </div>

          <div class='comment-sec'>
            <div class='cont-comment'>
            <Icon icon="ep:close-bold" class='feeds-icon-exit' onclick={props.onClose}></Icon>
            </div>
            <div class='comment'>
              <span>nama</span>
              <span>isi komen</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup_feeds_personal;