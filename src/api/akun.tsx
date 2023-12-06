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
  gambar: String;
};

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

//-------------------------------------------------------------------
// export type BiodataUmkm = {
//   "alamat_toko": string,
//   "deskripsi_toko": string,
//   "nib": string,
//   "kontak_bisnis": string,
//   "kategori": string,
//   "akun_id": string
// }

// export async function fetchBiodataUmkm() {
//   const userDataString = sessionStorage.getItem("userData");

//   if (!userDataString) {
//     // Handle the case where userData is not available in sessionStorage
//     return null;
//   }

//   const userData = JSON.parse(userDataString);
//   const akun_id = userData?.akun_id;

//   const response = await fetch(`/api/biodata_umkm/${akun_id}`);
//   const result = await response.json();

//   const biodataUmkm = result as BiodataUmkm;
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
