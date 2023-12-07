// gambar.tsx
export interface Gambar {
  nama_gambar: string;
}

export async function fetchGambar(postId: number) {
  try {
    const response = await fetch(`/api/gambar/${postId}`);
    const gambar = await response.json();
    return gambar as Gambar[];
  } catch (error) {
    console.error('Error fetching gambar:', error);
    return null;
  }
}
