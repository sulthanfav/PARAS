import { Component, createSignal } from 'solid-js';
import { For } from 'solid-js/web';
import './popup_post.css';
import 'daisyui/dist/full.css';
import { useNavigate } from '@solidjs/router';
import { Icon } from '@iconify-icon/solid';

interface PopUpPostProps {
  onClose: () => void;
}

const Popup_post: Component<PopUpPostProps> = (props) => {
  const [selectedFiles, setSelectedFiles] = createSignal<File[]>([]);
  const [imageUrls, setImageUrls] = createSignal<string[]>([]);
  const [selectedTag, setSelectedTag] = createSignal<string>('Fashion');
  const navigate = useNavigate();

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      const selectedImages = Array.from(files).slice(0, 4); // Ambil maksimal 4 gambar
      setSelectedFiles(selectedImages);

      const urls = selectedImages.map((file) => URL.createObjectURL(file));
      setImageUrls(urls);
    } else {
      setSelectedFiles([]);
      setImageUrls([]);
    }
  };

  const isFormValid = () => selectedFiles().length >= 1;

  const saveImages = () => selectedFiles().map((file) => `${file.name}-${Date.now()}.${file.name.split('.').pop()}`);

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    if (isFormValid()) {
      try {
        const imageNamesArray = saveImages();

        const userDataString = sessionStorage.getItem('userData');
        const akun_id = userDataString ? JSON.parse(userDataString).akun_id : '';

        const requestData = {
          post_id: 0,
          akun_id,
          nama: (document.querySelector('.judul-post') as HTMLInputElement)?.value || '',
          deskripsi: (document.querySelector('textarea') as HTMLTextAreaElement)?.value || '',
          tag: selectedTag(),
          link: (document.querySelector('.bg-link input') as HTMLInputElement)?.value || '',
        };

        const formResponse = await fetch('/api/postingan/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (formResponse.ok) {
          for (const [index, file] of selectedFiles().entries()) {
            const filename = `${file.name}-${Date.now()}.${file.name.split('.').pop()}`;
            const formData = new FormData();
            formData.append('nama_gambar', file, filename);

            const imageUploadResponse = await fetch('/api/gambar_postingan/create', {
              method: 'POST',
              body: formData,
            });

            if (!imageUploadResponse.ok) {
              console.error(`Error uploading image ${index + 1}:`, imageUploadResponse.statusText);
              alert(`Gagal mengunggah gambar ${index + 1}. Silakan coba lagi.`);
              return;
            }
          }

          alert('Unggahan resep Anda berhasil diunggah!');
          navigate('/umkm/dashboard', { replace: true });
          window.location.reload();
        } else {
          alert('Gagal mengunggah resep. Silakan coba lagi.');
        }
      } catch (error) {
        console.error('Error during form submission:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    } else {
      alert('Masukkan minimal 1 gambar masakan sesuai resep yang Anda ketik di halaman sebelumnya!');
    }
  };

  return (
    <>
      <div class='overlay'>
        <div class='popup-post' id='post_popup'>
          <span>Buat Unggahan Baru</span>
          <Icon icon='ep:close-bold' class='feeds-icon-exit' onclick={props.onClose}></Icon>
          <form action=''>
            <div class='cont-poppost'>
              <Icon icon='solar:home-add-bold' class='icon-cont-post'></Icon>
              <div class='post-input'>
                <input type='text' placeholder='Judul Unggahan' class='judul-post' />
                <br />
                <hr />
                <textarea name='' id='' cols='76' rows='2' placeholder='Deskripsi Unggahan'></textarea>
              </div>
            </div>
            <select name='' id='' value={selectedTag()} onChange={(e) => setSelectedTag(e.currentTarget.value)}>
              <option value='Fashion'>----Pilih Tag Anda!----</option>
              <option value='Fashion'>Fashion</option>
              <option value='Makanan'>Makanan</option>
              <option value='Jasa'>Jasa</option>
              <option value='Barang/Jasa Lain'>Barang/Jasa Lain</option>
            </select>
            <div class='cont-icon'>
              <input
                type='file'
                id='file-upload'
                accept='.png, .jpg'
                style='display: none'
                onChange={handleFileChange}
                multiple // Izinkan pengguna untuk memilih beberapa gambar
              />
              <label for='file-upload'>
                {imageUrls().length > 0 ? (
                  <div class='image-preview-container'>
                    <For each={imageUrls()}>
                      {(imageUrl) => <img src={imageUrl} alt='Selected Image' width='100' height='100' />}
                    </For>
                  </div>
                ) : (
                  <div class='bg-attc'>
                    <Icon icon='mingcute:attachment-line' class='attc-icon'></Icon>
                  </div>
                )}
              </label>
              <div class='bg-link'>
                <Icon icon='ph:link-bold' class='link-icon'></Icon>
                <input type='text' name='' id='' placeholder='Input Link Disini' />
              </div>
              <button onClick={handleSubmit}>Unggah</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup_post;
