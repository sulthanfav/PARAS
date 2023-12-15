// postingan.tsx
export interface PostinganSelected {
  gambar: any;
  post_id: number;
  akun_id: number;
  nama?: string;
  deskripsi?: string;
  tag?: string;
  jenis_postingan?: string;
  created_at?: Date | null;
  link: string;
  like_count?: number;
  comment_count?: number;
}

export interface GambarSelected {
  nama_gambar: string;
  path?: string;
}

export async function fetchPostinganSelected(post_id: number) {

  try {
    // Fetch data postingan dari API
    const responsePostingan = await fetch(`/api/postingan/selected/${post_id}`);
    const allPostingan = await responsePostingan.json();

    // Fetch data gambar untuk setiap postingan
    const gambarPromises = allPostingan.map(async (post: PostinganSelected) => {
      const responseGambar = await fetch(`/api/gambar_postingan/${post.post_id}`);
      const gambar = await responseGambar.json();
      const gambarWithPath = gambar.map((g: GambarSelected) => ({
        ...g,
        path: `/src/assets/postingan/${g.nama_gambar}`
      }));
      return { post_id: post.post_id, gambar: gambarWithPath };
    });

    // Menunggu semua gambar selesai di-fetch
    const gambarResults = await Promise.all(gambarPromises);

    // Gabungkan data postingan dan gambar
    const postinganWithGambar = allPostingan.map((post: PostinganSelected) => {
      const relatedGambar = gambarResults.find((g) => g.post_id === post.post_id);
      return { ...post, gambar: relatedGambar?.gambar || [] };
    });

    return postinganWithGambar;
  } catch (error) {
    console.error('Error fetching postingan:', error);
    return null;
  }
}
// postingan.tsx=============================
export interface PostinganPersonalSelected {
  nama_akun?: string;
  gambar?: any;
  gambar_profile: any;
  post_id?: number;
  akun_id?: number;
  nama?: string;
  deskripsi?: string;
  tag?: string;
  created_at?: Date | null;
  link: string;
  like_count?: number;
  comment_count?: number;
}

export interface GambarPersonalSelected {
  nama_gambar: string;
  path?: string;
}

export async function fetchPostinganPersonalSelected(post_id: number) {

  try {
    // Fetch data postingan dari API
    const responsePostingan = await fetch(`/api/postingan/selected/personal/${post_id}`);
    const allPostingan = await responsePostingan.json();

    // Fetch data gambar untuk setiap postingan
    const gambarPromises = allPostingan.map(async (post: PostinganPersonalSelected) => {
      const responseGambar = await fetch(`/api/gambar_postingan/${post.post_id}`);
      const gambar = await responseGambar.json();
      const gambarWithPath = gambar.map((g: GambarSelected) => ({
        ...g,
        path: `/src/assets/postingan/${g.nama_gambar}`
      }));
      return { post_id: post.post_id, gambar: gambarWithPath };
    });

    // Menunggu semua gambar selesai di-fetch
    const gambarResults = await Promise.all(gambarPromises);

    // Gabungkan data postingan dan gambar
    const postinganWithGambar = allPostingan.map((post: PostinganPersonalSelected) => {
      const relatedGambar = gambarResults.find((g) => g.post_id === post.post_id);
      return { ...post, gambar: relatedGambar?.gambar || [] };
    });

    return postinganWithGambar;
  } catch (error) {
    console.error('Error fetching postingan:', error);
    return null;
  }
}
