import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import { For } from 'solid-js/web';
import { A } from '@solidjs/router';
import './login.css'; // File stylesheet eksternal
import "daisyui/dist/full.css"; // File stylesheet eksternal dari daisyui
import { Icon } from "@iconify-icon/solid";
// import LogoImage from './logo.tsx';
import "../dashboard/dashboard_umkm.css"
import "../paras/paras.css"


interface LoginProps {
  OnClose?: () => void;
}

const Login: Component<LoginProps> = (props) => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  onMount(() => {
  console.log('ini halaman Login');
  });

  const ActionLogin = () => {
  console.log('hallo login button clicked');
  const dataUser = { username: "bubbles", email: "bubbles_puff@gmail.com" };
  sessionStorage.setItem('userData', JSON.stringify(dataUser));
  window.location.assign('/');
  }

  const fetchLogin = async () => {
      try {
      const response = await fetch(`/api/login`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          identifier: username(),
          password: password(),
          }),
      });

      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw new Error('Failed to login');
      }
      } catch (error) {
      console.error(error);
      throw error;
      }
  };

  const ActionLogin1 = async () => {
    console.log(`test ${username()} ${password()}`)
      try {
      const data = await fetchLogin();
      // Cek apakah data login berhasil atau tidak
      if (data) {
          // Login berhasil, Anda dapat menyimpan data pengguna di sessionStorage atau localStorage
          sessionStorage.setItem('userData', JSON.stringify(data));
          // Redirect ke halaman utama atau halaman lain yang sesuai
          window.location.assign('/');
      } else {
          // Handle login gagal di sini
          console.error('Login failed');
      }
      } catch (error) {
      // Handle kesalahan saat melakukan permintaan login
      console.error(error);
      }
  };

    // Mengembalikan elemen JSX
    return (
        <>
            {/* Bagian navigasi */}
            <div class='body'>
                <nav>
                    {/* Link untuk kembali ke dashboard */}
                    <A href="/dashboard">
                        {/* Logo */}
                        <img class='logo' src="/src/assets/Group_154.png" alt="" />
                    </A>
                    {/* Tombol navigasi */}
                    <div class='button-navigation-bar'>
                        {/* Tombol Daftar */}
                        <A href="/paras">
                        <div class='btn-daftar'> Daftar </div>
                        {/* Link ke RegisterUMKMPage1 - belum digunakan */}
                        </A>
                        <A href="/login">
                        {/* Tombol Masuk */}
                        <div class='btn-masuk'> Masuk </div>
                        </A>
                    </div>
                </nav>
                {/* Konten utama */}
                <div class='content'>
                    {/* Bagian latar belakang registrasi */}
                    <div class='background-login'>
                        {/* Isi sesuai kebutuhan konten */}
                        <div class='login-cont'>
                            <div class='headline-login'>
                                <span>
                                    Selamat Datang di <span>Paras</span>!
                                </span>
                                <span> <br />
                                    Masuk untuk 
                                </span>
                            </div>
                            <div class='login-form-cont'>
                                <div class='cont-login-input-form'>
                                    <label>Usernam/Email</label>
                                    <input type="text" name="" id="" value={username()} onInput={(e) => setUsername(e.currentTarget.value)}/>
                                </div>
                                <div class='cont-login-input-form'>
                                    <label>Password</label>
                                    <input type="text" name="" id="" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} />
                                </div>
                                <button  onClick={ActionLogin1}>
                                    Masuk
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Ekspor komponen sebagai default
export default Login;