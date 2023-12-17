import { Component, createSignal, createEffect } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import './registerPersonalpage2.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid";
// import LogoImage from './logo.tsx';
import './registerUMKMpage1.css'
import './registerUMKMpage2.css'

// Definisi komponen RegisterPersonalPage2 sebagai functional component
const RegisterPersonalPage2: Component = () => {
    // Mengembalikan elemen JSX
            const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = createSignal<File | null>(null);
    const [imageUrl, setImageUrl] = createSignal<string | null>(null);
  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files && target.files[0];

    if (file) {
      setSelectedFile(() => file);
    } else {
      setSelectedFile(null);
    }
  };


  
  const handleBuatAkun = async (e: Event) => {
    e.preventDefault();
    // Mengambil data dari session storage
    const formData = JSON.parse(sessionStorage.getItem('formData') || '{}');
    const registrationType = sessionStorage.getItem('registrationType') || '';

    // Data untuk dikirim ke /api/account/create
    const accountData = {
      nama_akun: formData.namaPersonal || '',
      email: formData.emailPersonal || null,
      access: registrationType || null,
      username: formData.usernamePersonal || '',
      password: formData.passwordPersonal || '',
    };

    console.log(accountData)

    try {
      // Mengirim data ke /api/account/create
      const responseAccount = await fetch('/api/account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
      });

      if (!responseAccount.ok) {
        throw new Error('Failed to create account');
      }

      // Mengambil data dari form registrasi page 2
  const formDataPage2 = {
    nomor_telepon: getInputElementValue('.input-nomor-telepon'),
    tempat_tanggal_lahir: getInputElementValue('.input-tempat-tanggal-lahir'),
    jenis_kelamin: getSelectedOption('.select-jenis-kelamin'),
    alamat: getInputElementValue('.input-alamat'),
    kategori: getSelectedOption('.select-kategori'),
    gambar: selectedFile() || null,
  };

      // Mengirim data ke /api/biodata_umkm/create
      const responseBiodata = await fetch('/api/biodata_pengguna/create', {
        method: 'POST',
        body: createFormData(formDataPage2),
      });

      if (!responseBiodata.ok) {
        throw new Error('Failed to create biodata_umkm');
      }

      // Navigasi ke halaman login setelah berhasil membuat akun
      navigate('/BeforeLogin/login');
    } catch (error) {
      console.error('Error:', error);
      // Handle error, mungkin menampilkan pesan kesalahan kepada pengguna
    }
  };

  const getInputElementValue = (selector: string): string => {
    const inputElement = document.querySelector(selector) as HTMLInputElement | null;
    return inputElement ? inputElement.value : '';
  };

  const getSelectedOption = (selector: string): string => {
    const selectElement = document.querySelector(selector) as HTMLSelectElement | null;
    return selectElement ? selectElement.value : '';
  };

const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  for (const key in data) {
    if (key === 'gambar' && data[key] instanceof File) {
      formData.append(key, data[key]);
    } else {
      formData.append(key, data[key]);
    }
  }

  return formData;
};
    return (
        <>
            {/* Bagian navigasi */}
            <div class='body'>
                <nav>
                    <A href="/BeforeLogin/Paras">
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </A>
                    <div class='button-navigation-bar'>
                      <A href="/BeforeLogin/Paras">
                        <button class='btn-daftar'> Daftar </button>
                      </A>
                        <A href="/BeforeLogin/login">
                        <button class='btn-masuk'> Masuk </button>
                        </A>
                    </div>
                </nav>
                {/* Konten utama */}
                <div class='content'>
                    {/* Bagian latar belakang registrasi */}
                    <div class='background-regis-1'>
                        <div class='registrasipage2UMKM'>
                            {/* Headline registrasi UMKM */}
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis UMKM Anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                            {/* Formulir registrasi */}
                            <form class='form-regist-page2'>
                                <div class='cont-input-form'>
                                    <label>Nomor Telepon</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)' class='input input-nomor-telepon' />
                                </div>
                                <div class='cont-input-form'>
                                    <label>Tempat/Tanggal Lahir</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)' class='input input-tempat-tanggal-lahir' />
                                </div>
                                <div class='cont-input-form'>
                                    <label>Jenis Kelamin</label>
                                    <div class="paste-button">
                                        <select class='select-jenis-kelamin button-dpdown'>
                                            <option value="pria">Pria</option>
                                            <option value="wanita">Wanita</option>
                                        </select>
                                    </div>
                                </div>
                                <div class='cont-input-form-long'>
                                    <label>Alamat</label>
                                    <input type="text" name="" id="" placeholder='(Wajib Diisi)' class='input input-alamat' />
                                </div>
                                <div class='cont-input-form'>
                                    <label>Kategori Produk Yang Disukai</label>
                                    <div class='tag-profile'>
                                        <div class="paste-button">
                                            <select class='select-kategori button-dpdown'>
                                                <option value="makanan_minuman">Produk Makanan dan Minuman</option>
                                                <option value="fashion">Fashion & Accessories</option>
                                            </select>
                                        </div>
                                        <div class='sel-prof'>
                                            <input
                                                type="file"
                                                id="file-upload"
                                                accept=".png, .jpg"
                                                style="display: none"
                                                onChange={handleFileChange}
                                            />
                                            <label for="file-upload" class='label-file'>
                                                {selectedFile() ? (
                                                    <span class='select-file'>{selectedFile()!.name}</span>
                                                ) : (
                                                    <div class='cont-icon-sel-prof'>
                                                        <Icon icon='mingcute:attachment-line' class='icon-attc-prof'></Icon>
                                                        <span>Pilih Foto Profile Anda!</span>
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class='btn-next'>
                                    <A href="/BeforeLogin/RegisterUMKMPage1">
                                    <button class = 'btn-back-page'>
                                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                                        <span>Halaman Sebelumnya</span>
                                    </button>
                                    </A>
                                    
                                    <button class = 'btn-buat-akun' onClick={handleBuatAkun}>Buat Akun</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Ekspor komponen sebagai default
export default RegisterPersonalPage2;
