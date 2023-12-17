// Import statement untuk mengimpor modul yang diperlukan
import { Component, createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import './registerPersonalpage1.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid"; // Komponen Icon dari modul solid
import './registerUMKMpage1.css'
// Import LogoImage dari file logo.tsx - belum digunakan
// import LogoImage from './logo.tsx';

// Definisi komponen RegisterPersonalPage1 sebagai functional component
const RegisterPersonalPage1: Component = () => {
    // Mengembalikan elemen JSX
  const [formData, setFormData] = createSignal({
    namaPersonal: '',
    emailPersonal: '',
    usernamePersonal: '',
    passwordPersonal: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleNextPage = () => {
    if (formData().passwordPersonal !== formData().confirmPassword) {
      alert('Password and Confirm Password must match.');
    } else {
      // Save data to session storage
      sessionStorage.setItem('formData', JSON.stringify(formData()));

      // Navigate to the next page
      navigate('/BeforeLogin/RegisterPersonalPage2');
    }
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
                        <A href="/BeforeLogin/Login">
                        <button class='btn-masuk'> Masuk </button>
                        </A>
                    </div>
                </nav>
                {/* Konten utama */}
                <div class='content'>
                    {/* Bagian latar belakang registrasi */}
                    <div class='background-regis-1'>
                        <div class='registrasipage1UMKM'>
                            {/* Headline registrasi UMKM */}
                            <div class='headline-umkm-regis'>
                                <span>Gabung di <span class='text-paras'>Paras</span>, tempat terbaik untuk memajukan bisnis UMKM Anda!</span>
                                <p>Masukkan data diri Anda untuk mendaftarkan akun Paras.</p>
                            </div>
                            <form class='form-regist-personal'>
                                <div class='nama-personal'>
                                <label for="nama-personal">Nama </label>
                                <input
                                    class="input"
                                    placeholder="(wajib diisi)"
                                    value={formData().namaPersonal}
                                    onInput={(e) => setFormData({ ...formData(), namaPersonal: e.target.value })}
                                />
                                </div>
                                <div class='email-personal'>
                                <label for="email-personal">Email</label>
                                <input
                                    class="input"
                                    placeholder="(wajib diisi)"
                                    value={formData().emailPersonal}
                                    onInput={(e) => setFormData({ ...formData(), emailPersonal: e.target.value })}
                                />
                                </div>
                                <div class='username-personal'>
                                <label for="username-personal">Username</label>
                                <input
                                    class="input"
                                    placeholder="(wajib diisi)"
                                    value={formData().usernamePersonal}
                                    onInput={(e) => setFormData({ ...formData(), usernamePersonal: e.target.value })}
                                />
                                </div>
                                <div class='password-personal'>
                                <div class='left-box-personal'>
                                    <label for="password-personal">Password</label>
                                    <input
                                    class="input-password-personal input-password"
                                    placeholder="(wajib diisi)"
                                    type="password"
                                    value={formData().passwordPersonal}
                                    onInput={(e) => setFormData({ ...formData(), passwordPersonal: e.target.value })}
                                    />
                                </div>
                                <div class='right-box-personal'>
                                    <label for="confirm-password-personal">Confirm Password</label>
                                    <input
                                    class="input-confirm-password-personal input-password"
                                    placeholder="(wajib diisi)"
                                    type="password"
                                    value={formData().confirmPassword}
                                    onInput={(e) => setFormData({ ...formData(), confirmPassword: e.target.value })}
                                    />
                                </div>
                                </div>
                                <button class='btn-next-page' type='button' onClick={handleNextPage}>
                                Halaman Berikutnya
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Ekspor komponen sebagai default
export default RegisterPersonalPage1;
