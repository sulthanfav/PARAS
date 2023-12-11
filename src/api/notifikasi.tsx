export interface GetNotifikasi{
    nama_akun: string;  // Change 'String' to 'string'
    gambar: string;
    tipe: string;
    created_at: string;   // Change 'String' to 'string'
}

  const getStoredUserData = () => {
  const userDataString = sessionStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
};

const userData = getStoredUserData()?.akun_id;
console.log(userData)

export async function fetchGetNotifikasi(userData?: number) {
  try {
    if (!userData) {
      const storedUserData = getStoredUserData();
      userData = storedUserData?.akun_id;
    }

    if (!userData) {
      // Handle the case where userData is still not available
      console.error('User data not available');
      return null;
    }

    const response = await fetch(`/api/notifikasi/notif/${userData}`);
    const getNotif = await response.json();
    return getNotif as GetNotifikasi;
  } catch (error) {
    console.error('Error fetching folls:', error);
    return null;
  }
}
