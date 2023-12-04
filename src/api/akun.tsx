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

export type BiodataUmkm = {
  "alamat_toko": string,
  "deskripsi_toko": string,
  "nib": string,
  "kontak_bisnis": string,
  "kategori": string,
  "akun_id": string
}

export async function fetchBiodataUmkm() {
  const akun_id = sessionStorage.getItem('userData');
  console.log(akun_id);

  if (!akun_id) {
    // Handle the case where akunId is not available in sessionStorage
    return [];
  }

  const response = await fetch(`/api/biodata_umkm/${akun_id}`);
  const result = await response.json();

  const biodataUmkm = result as BiodataUmkm;
  console.log(biodataUmkm);

  // You can modify the return statement based on your requirements
  return {
    alamat_toko: biodataUmkm.alamat_toko,
    deskripsi_toko: biodataUmkm.deskripsi_toko,
    nib: biodataUmkm.nib,
    kontak_bisnis: biodataUmkm.kontak_bisnis,
    kategori: biodataUmkm.kategori,
    akun_id: biodataUmkm.akun_id
  };
}
