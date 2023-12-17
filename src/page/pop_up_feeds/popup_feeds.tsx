import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_feeds.css';
import "daisyui/dist/full.css";
import { A, useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';
import "solid-slider/slider.css"; 
import { Slider, SliderButton, SliderProvider } from "solid-slider"; 
import { fetchPostingan, Postingan, PostinganPersonal } from '../../api/postingan';
import { fetchPostinganSelected, PostinganSelected, GambarSelected } from '../../api/postinganselected';
import { KomentarPostingan, fetchKomentarPostingan } from '../../api/komentar';


interface PopUpFeedsProps {
  onClose: () => void;
  postinganselect: Postingan | PostinganPersonal | null;
  postId: number | null;
  
}


const Popup_feeds: Component<PopUpFeedsProps> = (props) => {
  const [resultObject, setResultObject] = createSignal<PostinganSelected | null>(null);

  onMount(async () => {
    const post_id = props.postId;
    if (post_id !== null) {
      try {
        const resultArray = await fetchPostinganSelected(post_id);
        const resultObjectFromApi = resultArray.length > 0 ? resultArray[0] : null;

        if (resultObjectFromApi !== null) {
          setResultObject(resultObjectFromApi);
          console.log("Result Postingan Selected:", resultObjectFromApi);
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

  //=========================================================
  const [resultKomentar, setResultKomentar] = createSignal<KomentarPostingan[] | null>(null);

  onMount(async () => {
    const post_id = props.postId;
    if (post_id !== null) {
      try {
        const resultArray = await fetchKomentarPostingan(post_id);
        

        if (resultArray !== null) {
          setResultKomentar(resultArray);
          console.log("Result Komentar:", resultArray);
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

const formatTimeDifference = (createdAt?: string) => {
  if (!createdAt) {
    return ''; // or any other default value
  }

  const now = new Date();
  const createdDate = new Date(createdAt); // Assuming 'created_at' is in the format "2023-12-15 02:02:16.971"
  const timeDifference = Math.floor((now.getTime() - createdDate.getTime()) / 1000); // in seconds

  if (timeDifference < 60) {
    return `${timeDifference} detik lalu`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes} menit lalu`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours} jam lalu`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    return `${days} hari lalu`;
  }
};

  const navigate = useNavigate();

  const deletePostingan = async () => {
    const post_id = props.postId;
    if (post_id !== null) {
      try {
        // Perform the delete operation using the API endpoint
        await fetch(`/api/postingan/delete/${post_id}`, {
          method: 'DELETE',
        });

        alert('Postingan berhasil dihapus.');
        // Close the popup after successful deletion
        props.onClose();

        // Navigate to the new page
        navigate('/umkm/dashboard');

        // Reload the current page to reflect changes
        window.location.reload();
      } catch (error) {
        console.error('Error deleting postingan:', error);
      }
    } else {
      console.error('post_id is null');
    }
  };

//===============================================
const [commentText, setCommentText] = createSignal<string>(''); // Add this line for state
  const submitComment = async (commentText: string) => {
    const post_id = props.postId;

    if (post_id !== null) {
      try {
        // Retrieve umkm_id from sessionStorage
        const userData = sessionStorage.getItem('userData');
        const umkm_id = userData ? JSON.parse(userData).akun_id : null;

        const commentData = {
          umkm_id: umkm_id ? parseInt(umkm_id, 10) : null,
          komentar_id: null, // Leave it as null
          pengguna_id: null, // Leave it as null
          post_id: post_id,
          isi: commentText,
          create_at: null,
        };

        console.log('Comment Data:', commentData);

        // Perform the POST request to the API endpoint
        const response = await fetch('/api/komentar/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          // Comment submitted successfully, you might want to update the UI or do something else
          console.log('Comment submitted successfully');
        } else {
          console.error('Failed to submit comment:', response.status);
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    } else {
      console.error('post_id is null');
    }
  };

  return (
    <>
      <div class='overlay'>
        <div class='feeds'>
          <div class='cont-feeds'>
          <div class='feeds-judul'>
            <span>{resultObject()?.nama}</span>
          </div>
          <div class='deskripsi-feeds'>
            <span>{resultObject()?.deskripsi}</span>
          </div>
          <hr />
            <SliderProvider>
              <div class='cont-pic'>
              <div class="">
                <SliderButton prev class='button-slide'>
                  &lt;
                </SliderButton>
              </div>
              <div class="cont-pic-feeds">
                <Slider options={{ loop: true }} >
                  {resultObject()?.gambar ? (
                    resultObject()?.gambar.map((gambar: GambarSelected, index: number) => (
                        <img src={gambar.path} />
                    ))
                    ) : (
                      <div></div>
                      )}
                </Slider>
              </div>
              <div class="next">
                <SliderButton next class='button-slide'>
                  &gt;
                </SliderButton>
              </div>
              </div>
            </SliderProvider>
          <hr />
          <div class='intr-feeds'>
            <Icon icon="flat-color-icons:like" class='icon-intr-feeds'></Icon>
            <span>{resultObject()?.like_count}</span>
            <Icon icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
            <span>{resultObject()?.comment_count}</span>
            <div class='link'>
            <Icon icon="ph:link-bold" class='icon-intr-feeds'></Icon>
            <span>{resultObject()?.link}</span>
            </div>
          </div>
          <hr />
          <div class='edit-feeds'>
            <div class='hapus-feeds' onClick={deletePostingan}>
              <span>Hapus Feeds</span>
            </div>
          </div>
          </div>

    <div class='comment-sec'>
      <div class='cont-comment'>
        <Icon icon="ep:close-bold" class='feeds-icon-exit' onclick={props.onClose}></Icon>
      </div>
      <div class='comment-sec-cont'>
        <div class='comment-cont-overflow'> 
        {(resultKomentar() ?? []).length > 0 ? (
          <For each={resultKomentar() || []}>
            {(komentar) => (
              <div class='comment'>
                <div class='comment-pic'>
                  {/* You might want to use the actual image from the 'komentar' object */}
                  <img src={`/src/assets/profile/${komentar.gambar}`} alt="" />
                </div>
                <div class='comment-nama-isi'>
                  <div class='comment-nama'>
                    {komentar.nama_akun}
                  </div>
                  <div class='comment-isi'>
                    {komentar.isi}
                  </div>
                  <div class='comment-time'>
                    {/* You might want to format the date here */}
                    {formatTimeDifference(komentar.create_at || '')}
                  </div>
                </div>
              </div>
            )}
          </For>
        ) : (
          <div class="no-comment">Tidak Ada Komentar</div>
        )}
        </div>
      <div class='comment-inp-cont'>
        <Icon icon="iconamoon:comment-fill" class='icon-intr-feeds'></Icon>
        <input
          type='text'
          class='inputan-comment'
          onInput={(e) => setCommentText(e.currentTarget.value)}
          value={commentText()}
        />
        <Icon
          icon="mingcute:send-fill"
          class='icon-intr-feeds'
          onClick={() => {
            if (commentText().trim() !== '') {
              submitComment(commentText());
              setCommentText(''); // Reset the commentText after submission
            }
          }}
        ></Icon>
      </div>
      </div>
    </div>

        </div>
      </div>
    </>
  );
};

export default Popup_feeds;