export interface KomentarPostingan {
  gambar: any;
  post_id?: number;
  umkm_id?: number;
  pengguna_id?: number;
  komentar_id?: number;
  nama_akun?: string;
  isi?: string;
  create_at?: string;
}

export async function fetchKomentarPostingan(post_id?: number) {
  try {
    const response = await fetch(`/api/komentar/postingan/${post_id}`);
    const getKomentar = await response.json();
    
    // If the data is an array, return it directly
    if (Array.isArray(getKomentar)) {
      console.log('Komentar :', getKomentar);
      return getKomentar as KomentarPostingan[];
    }

    // If the data is not an array, wrap it in an array
    const singleItemArray: KomentarPostingan[] = [getKomentar as KomentarPostingan];
    console.log('Komentar :', singleItemArray);
    return singleItemArray;
  } catch (error) {
    console.error('Error fetching folls:', error);
    return null;
  }
}
