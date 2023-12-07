// postingan.tsx
export interface Postingan {
  gambar: any;
  post_id: number;
  akun_id: number;
  nama?: string;
  deskripsi?: string;
  tag?: string;
  jenis_postingan?: string;
  created_at?: Date | null;
}

export interface Gambar {
  nama_gambar: string;
  path?: string;
}

export async function fetchPostingan() {
  // Mendapatkan akun_id dari sessionStorage
  const userDataString = sessionStorage.getItem('userData');
  
  if (!userDataString) {
    console.error('Data pengguna tidak tersedia.');
    return null;
  }

  const userData = JSON.parse(userDataString) as { akun_id: string };

  // Jika akun_id tidak tersedia, mungkin hendaknya menangani kasus ini dengan cara tertentu
  if (!userData.akun_id) {
    console.error('Akun ID tidak tersedia.');
    return null;
  }

  try {
    // Fetch data postingan dari API
    const responsePostingan = await fetch(`/api/postingan/`);
    const allPostingan = await responsePostingan.json();

    // Fetch data gambar untuk setiap postingan
    const gambarPromises = allPostingan.map(async (post: Postingan) => {
      const responseGambar = await fetch(`/api/gambar_postingan/${post.post_id}`);
      const gambar = await responseGambar.json();
      const gambarWithPath = gambar.map((g: Gambar) => ({
        ...g,
        path: `/src/assets/postingan/${g.nama_gambar}`
      }));
      return { post_id: post.post_id, gambar: gambarWithPath };
    });

    // Menunggu semua gambar selesai di-fetch
    const gambarResults = await Promise.all(gambarPromises);

    // Gabungkan data postingan dan gambar
    const postinganWithGambar = allPostingan.map((post: Postingan) => {
      const relatedGambar = gambarResults.find((g) => g.post_id === post.post_id);
      return { ...post, gambar: relatedGambar?.gambar || [] };
    });

    // Filter postingan berdasarkan akun_id
    const filteredPostingan = postinganWithGambar.filter((post: Postingan) => post.akun_id === parseInt(userData.akun_id, 10));

    console.log("Data Postingan Filter :", filteredPostingan);

    return filteredPostingan;
  } catch (error) {
    console.error('Error fetching postingan:', error);
    return null;
  }
}
