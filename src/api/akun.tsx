// export type account = {
//     "nama_akun": String,
//     "email": String,
//     "access": String,
//     "username": String,
//     "password": String
// }


// export async function account(query: string) {
//     if (query.trim() === "") return [];
//     // /?q=${encodeURI(query)}
    
             
//     const response = await fetch(
// 	`/api/account/`
//     );
//     const results = await response.json();
//     // console.log("response ", results)
//     const documents = results as account[];
//     console.log(documents);
//     return documents.slice(0, 10).map(({ nama_akun, email, access, username, password }) => ({
//       nama_akun, email, access, username, password
//     }));
//   }

//----------------------------------------------------

import { createSignal, onCleanup } from "solid-js";

export type BiodataUmkm = {
  alamat_toko: string;
  deskripsi_toko: string;
  nib: string;
  kontak_bisnis: string;
  kategori: string;
  akun_id: string;
  gambar: string;
};

export type BiodataPersonal = {
  tempat_tanggal_lahir: string;
  alamat: string;
  jenis_kelamin: string;
  akun_id: string;
  gambar: string;
};

export type AkunUmkmHome = {
  nama_akun: string;
  email: string;
  access: string;
  username: string;
};

export type AkunUmkmHomeSearch = {
  nama_akun: string;
  email: string;
  access: string;
  username: string;
  gambar: string
};


//===================================================
export async function fetchBiodataUmkm() {
  const userDataString = sessionStorage.getItem("userData");

  if (!userDataString) {
    // Handle the case where userData is not available in sessionStorage
    return null;
  }

  const userData = JSON.parse(userDataString);
  const akun_id = userData?.akun_id;

  if (!akun_id) {
    // Handle the case where akun_id is not available in userData
    return null;
  }

  const response = await fetch(`/api/biodata_umkm/${akun_id}`);
  const biodataUmkm = await response.json() as BiodataUmkm;
  console.log(biodataUmkm);

  // Store the fetched data in sessionStorage
  sessionStorage.setItem("biodataUmkm", JSON.stringify(biodataUmkm));

  return biodataUmkm;
}
//===================================================
export async function fetchAkunUmkmSearch() {
  const searchInput = sessionStorage.getItem("searchInput");

  if (!searchInput) {
    return null;
  }

  const searchInputKey = searchInput;

  if (!searchInputKey) {
    return null;
  }

  try {
    const response = await fetch(`/api/account/akunumkm/search/${searchInputKey}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const AkunUmkmSearch = await response.json() as AkunUmkmHomeSearch[];
    console.log(AkunUmkmSearch);

    sessionStorage.setItem("AkunUmkmSearch", JSON.stringify(AkunUmkmSearch));

    return AkunUmkmSearch;
  } catch (error) {
    console.error("Error fetching AkunUmkmSearch", error);
    return null;
  }
}

//===================================================
export async function fetchBiodataUmkmHome(akun_id?: number) {
  if (!akun_id) {
    // Handle the case where akun_id is not available in userData
    return null;
  }

  const response = await fetch(`/api/biodata_umkm/${akun_id}`);
  const biodataUmkm = await response.json() as BiodataUmkm;
  console.log(biodataUmkm);

  return biodataUmkm;
}
//===================================================
export async function fetchAkunUmkmHome(akun_id?: number) {

  // const akun_id = userData?.akun_id;

  if (!akun_id) {
    // Handle the case where akun_id is not available in userData
    return null;
  }

  const response = await fetch(`/api/account/akunumkm/${akun_id}`);
  const AkunUmkmHome = await response.json() as AkunUmkmHome;
  console.log(AkunUmkmHome);

  return AkunUmkmHome;
}
//===================================================
export async function fetchBiodataPersonal() {
  const userDataString = sessionStorage.getItem("userData");

  if (!userDataString) {
    // Handle the case where userData is not available in sessionStorage
    return null;
  }

  const userData = JSON.parse(userDataString);
  const akun_id = userData?.akun_id;

  if (!akun_id) {
    // Handle the case where akun_id is not available in userData
    return null;
  }

  const response = await fetch(`/api/biodata_pengguna/${akun_id}`);
  const biodataPersonal = await response.json() as BiodataPersonal;
  console.log(biodataPersonal);

  // Store the fetched data in sessionStorage
  sessionStorage.setItem("biodataUmkm", JSON.stringify(biodataPersonal));

  return biodataPersonal;
}

//-------------------------------------------------------------------

// export async function fetchBiodataPersonal() {
//   const userDataString = sessionStorage.getItem("userData");

//   if (!userDataString) {
//     // Handle the case where userData is not available in sessionStorage
//     return null;
//   }

//   const userData = JSON.parse(userDataString);
//   const akun_id = userData?.akun_id;

//   const response = await fetch(`/api/biodata_umkm/${akun_id}`);
//   const result = await response.json();

//   const biodataUmkm = result as BiodataPersonal;
//   console.log(biodataUmkm);

//   // You can modify the return statement based on your requirements
//   return {
//     alamat_toko: biodataUmkm.alamat_toko,
//     deskripsi_toko: biodataUmkm.deskripsi_toko,
//     nib: biodataUmkm.nib,
//     kontak_bisnis: biodataUmkm.kontak_bisnis,
//     kategori: biodataUmkm.kategori,
//     akun_id: biodataUmkm.akun_id
//   };
// }
