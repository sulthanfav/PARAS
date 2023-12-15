import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { A } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import './profil_umkm.css';
import '../disukai/disukai.css'
import '../pengaturan/pengaturan.css'
import '../profil_user/profil_user.css'
import { fetchBiodataUmkm } from '../../api/akun';
import Popup_logout from '../../assets/popup/popup_logout/popup_logout';
import { fetchCountFolls } from '../../api/followers';
import { useNavigate } from '@solidjs/router';

interface CountFolls {
  count: number;
  // Sesuaikan dengan properti lain yang mungkin ada
}

interface BiodataUmkm {
  alamat_toko: string;
  deskripsi_toko: string;
  nib: string;
  kontak_bisnis: string;
  kategori: string;
  akun_id: string;
  gambar: String;
};

// Komponen ProfilUMKM
const EditProfilUMKM: Component = () => {
    //-----------------------------------------------------
  const getStoredUserData = () => {
  const userDataString = sessionStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
};
  // Mendapatkan data dari sessionStorage
  const userData = getStoredUserData();

  // Signal untuk menyimpan nama_akun
  const [namaAkun, setNamaAkun] = createSignal(userData?.nama_akun || "");
  console.log(namaAkun())

  // Membersihkan sinyal saat komponen di-unmount
  onCleanup(() => {
    // Clean-up logic here, if needed
  });

  //-------------------------------------------------------
const getStoredBiodataUmkm = () => {
  const BiodataUmkmString = sessionStorage.getItem("biodataUmkm");
  return BiodataUmkmString ? JSON.parse(BiodataUmkmString) : null;
};

const biodataUmkmArray = getStoredBiodataUmkm();
const biodataUmkm = biodataUmkmArray && biodataUmkmArray.length ? biodataUmkmArray[0] : null;

// Check if biodataUmkm is not null before accessing its properties
const deskripsiToko = biodataUmkm ? biodataUmkm.deskripsi_toko : "";
console.log(deskripsiToko);
//-------------------------------------------------
  onMount(async () => {
    try {
      const biodataUmkmArray = await fetchBiodataUmkm();

      // Now you have the biodataUmkm available for use
      console.log(biodataUmkm);

      // Additional logic with biodataUmkm if needed

    } catch (error) {
      console.error("Error fetching biodataUmkm", error);
      // Handle errors if needed
    }
  });
  //-----------------------------------------------------
  const [logout, setLogout] = createSignal(false);
      const openLogoutPopUp = () => {
        setLogout(true);
    };

    const closeLogoutPopUp = () => {
        setLogout(false);
    };
  //------------------------------------------------------
  const [folls, setFolls] = createSignal<CountFolls>();
  onMount(async () => {
    try {
      const dataFolls = await fetchCountFolls();
      console.log("test_data_follower", dataFolls)
      if (dataFolls) {
        setFolls(dataFolls);
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }
  });
  //------------------------------------------------------
  const [gambarProfile, setGambarProfile] = createSignal<BiodataUmkm[]>([]);
  onMount(async () => {
    try {
      const biodataUmkmArray = await fetchBiodataUmkm();
      // console.log(biodataUmkmArray);

      if (Array.isArray(biodataUmkmArray)) {
        setGambarProfile(biodataUmkmArray);
      } else {
        console.error('Data yang diterima bukan array GambarPostingan');
      }
    } catch (error) {
      console.error("Error fetching Postingan", error);
    }

  });
  const urlGambar = (namaGambar: string) => `/src/assets/profile/${namaGambar}`;

  //===========================================================
  const [selectedFile, setSelectedFile] = createSignal<File | null>(null);
    const [imageUrl, setImageUrl] = createSignal<string | null>(null);
    const navigate = useNavigate();
    const [selectedImageUrl, setSelectedImageUrl] = createSignal<string | null>(null);

  const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files && target.files[0];

  if (file) {
    setSelectedFile(() => file);

    // Create a temporary URL for the selected image file
    const url = URL.createObjectURL(file);
    setSelectedImageUrl(() => url); // Set the selected image URL
  } else {
    setSelectedFile(null);
    setSelectedImageUrl(null);
  }
};

    //================================================
      // Add these state variables along with your existing state
  const [Nama_Akun, setNamaAkunn] = createSignal(namaAkun());
  const [username, setUsername] = createSignal(userData?.username || "");
  const [kategoriUsaha, setKategoriUsaha] = createSignal(biodataUmkm ? biodataUmkm.kategori : "");
  const [nomorKontak, setNomorKontak] = createSignal(biodataUmkm ? biodataUmkm.kontak_bisnis : "");
  const [nib, setNib] = createSignal(biodataUmkm ? biodataUmkm.nib : "");
  const [DeskripsiToko, setDeskripsiToko] = createSignal(biodataUmkm ? biodataUmkm.deskripsi_toko : "");
  const [alamatToko, setAlamatToko] = createSignal(biodataUmkm ? biodataUmkm.alamat_toko : "");
  const [Gambar, setGambar] = createSignal(biodataUmkm ? biodataUmkm.gambar : "");
    // function agar user memasukkan foto (wajib)
    const isFormValid = () => {
        return !!selectedFile();
    };

    // function untuk kondisi form submit
const handleSubmit = async (event: Event) => {
  event.preventDefault();

  if (isFormValid()) {
    try {
      // Prepare data for API request
      const formData = new FormData();
      const selectedFileValue = selectedFile();

      if (selectedFileValue) {
        formData.append("gambar", selectedFileValue);
      } else {
        formData.append("gambar", ''); // Adjust this based on your server-side requirements
      }

      formData.append("nama_akun", Nama_Akun());
      formData.append("username", username());
      formData.append("kategori", kategoriUsaha());
      formData.append("kontak_bisnis", nomorKontak());
      formData.append("nib", nib());
      formData.append("deskripsi", DeskripsiToko());
      formData.append("alamat", alamatToko());

      // Make API request using fetch
      const userDataString = sessionStorage.getItem('userData');

      if (userDataString) {
        const updatedUserData = {
          ...JSON.parse(userDataString),
          nama_akun: Nama_Akun(),
          username: username(),
        };

        // Save the updated data back to sessionStorage
        sessionStorage.setItem('userData', JSON.stringify(updatedUserData));

        const akun_id = updatedUserData.akun_id;

        const apiUrl = `/api/biodata_umkm/update/${akun_id}`;
        const response = await fetch(apiUrl, {
          method: 'PUT',
          body: formData,
        });

        if (response.ok) {
          // Handle success scenario (e.g., show success message)
          alert('Data berhasil disimpan!');
          navigate('/umkm/ProfilUMKM', { replace: true });
        } else {
          // Handle error scenario
          console.error('Error submitting form data to the API');
          alert('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
        }
      } else {
        // Handle the case where userDataString is null
        console.error('userDataString is null');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
      alert('Terjadi kesalahan yang tidak terduga. Silakan coba lagi.');
    }
  } else {
    alert('Masukkan gambar sesuai ketentuan!');
  }
};


    const handleCancel = () => {
        navigate('/unggah_resep', { replace: true }); // Navigate to the home page when cancel button is clicked
    };

  
  
  return (
    <>
      <div class='body'>
        <div class='bg'></div>
          <nav>
        <A href="/umkm/dashboard">
            <img class='logo' src="/src/assets/Group_154.png" alt="" />
        </A>
          </nav>
        <div class='content'>
          <div class='side'>
                    <div class='profile-side'>
                        <div class='profile-img'>
                            {gambarProfile().map((gambar) => (
                                <img src={urlGambar(gambar.gambar.toString())} alt="" />
                            ))}
                        </div>
                        <span class='nama'>
                            <h2>{namaAkun()}</h2>
                        </span>
                        <span class='deskripsi'>
                            <p>{gambarProfile().map((deskripsi) => deskripsi.deskripsi_toko)}</p>
                        </span>
                        <A href="/umkm/folls"><span class='folls'>
                            <p class='p1'>Followers</p>
                            <p>{folls()?.count}</p>
                        </span></A>
                    </div>
                    <div class='side-menu'>
                        <ul>
                            <A href="/umkm/dashboard"><li> <Icon icon="ic:round-home" class='icon-side'></Icon>Beranda</li></A>
                            <A href="/umkm/notifumkm"><li><Icon icon="mingcute:notification-fill" class='icon-side'></Icon> Notifikasi</li></A>
                            <A href="/umkm/ProfilUMKM"><li><Icon icon="mdi:user" class='icon-side'></Icon> Profil</li></A>
                            <A href="/umkm/PengaturanUMKM"><li><Icon icon="icon-park-solid:setting-one" class='icon-side'/>Pengaturan</li></A>
                            <div onClick={openLogoutPopUp}>
                            <li><Icon icon="solar:logout-2-bold" class='icon-side'></Icon>Keluar</li>
                            </div>
                            {logout() && <Popup_logout onClose={closeLogoutPopUp} />}
                        </ul>
                    </div>
                </div>

          <div class="bg-all">
            <div class='titleprofile'>
              <Icon icon="iconamoon:profile-fill" class="ikon-sett-profile"/>
              <div class='page-title-pengaturan'>Profile</div>
              <hr />
              <div class='bungkus-edit-pengaturan'>
                <div class="btnedit-sett">
                  <Icon class='editprofile-pengaturan' icon="iconamoon:edit-fill"/>
                  <span class='btnedit-text'>Ubah Profile </span>
                </div>
              </div>
            </div>

            <div class='cont-body-profile'>
              <form action="">
              <div class='bodyheader-profile'>
                <fieldset class="profile-legend">
                  <legend>
                    <input type="file"
                            id="file-upload"
                            accept=".png, .jpg"
                            style="display: none"
                            onChange={handleFileChange}  />
                    <label for="file-upload">
                            <Icon icon="mingcute:pencil-fill" flip="horizontal" class='icon-legend'></Icon>
                        </label>
                    </legend>
<div class='ava-profile'>
  {selectedImageUrl() ? (
    <img src={selectedImageUrl()!} alt="Selected Image" />
  ) : Gambar() ? (
    <img src={urlGambar(Gambar())} alt="" />
  ) : (
    <div class="placeholder-image">No Image Selected</div>
  )}
</div>
                </fieldset>
                
                <div class='name-usn'>
                  <div class='profile-isi-name'>
                  <input class='profile-name-input' value={Nama_Akun()} onInput={(e) => setNamaAkunn(e.currentTarget.value)}></input>
                  </div>
                  <hr />
                  <div class='profile-isi-name'>
                  <input class='profile-name-input' value={username()} onInput={(e) => setUsername(e.currentTarget.value)} ></input>
                  </div>
                </div>
              </div>
              <hr />
              <div class='bodycontent-profile-edit'>
              <div class='bodyform'>
                <div class='form-profile'>Kategori Usaha</div>
                <div><input type="text" placeholder="Kategori Usaha" class="isianprofile input input-bordered w-full max-w-xs" value={kategoriUsaha()} onInput={(e) => setKategoriUsaha(e.currentTarget.value)} /></div>
              </div>
              <div class='bodyform'>
                <div class='form-profile'>Nomor Kontak</div>
                <div><input type="text" placeholder="Nomor Kontak" class="isianprofile input input-bordered w-full max-w-xs" value={nomorKontak()} onInput={(e) => setNomorKontak(e.currentTarget.value)} /></div>
              </div>
              <div class='bodyform'>
                <div class='form-profile'>NIB (Nomor Induk Berusaha)</div>
                <div><input type="text" placeholder="Nomor Induk Berusaha" class="isianprofile input input-bordered w-full max-w-xs" value={nib()} onInput={(e) => setNib(e.currentTarget.value)} /></div>
              </div>
              <div class='bodyform'>
                <div class='form-profile'>Deskripsi Toko</div>
                <div><input type="text" placeholder="Deskripsi Toko" class="isianprofile-panjang input input-bordered w-full max-w-xs" value={DeskripsiToko()} onInput={(e) => setDeskripsiToko(e.currentTarget.value)} /></div>
              </div>
              <div class='bodyform'>
                <div class='form-profile'>Alamat Toko</div>
                <div><input type="text" placeholder="Alamat Toko" class="isianprofile-panjang input input-bordered w-full max-w-xs" value={alamatToko()} onInput={(e) => setAlamatToko(e.currentTarget.value)} /></div>
              </div>
              </div>
              <div class='button-submit-prof'>
                <button class="full-rounded" onClick={handleSubmit}>
                <span>Simpan Data</span>
                <div class="border full-rounded"></div></button>
              </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EditProfilUMKM;
