export type account = {
    "nama_akun": String,
    "email": String,
    "access": String,
    "username": String,
    "password": String
}


export async function account(query: string) {
    if (query.trim() === "") return [];
    // /?q=${encodeURI(query)}
    
             
    const response = await fetch(
	`/api/account/`
    );
    const results = await response.json();
    // console.log("response ", results)
    const documents = results as account[];
    console.log(documents);
    return documents.slice(0, 10).map(({ nama_akun, email, access, username, password }) => ({
      nama_akun, email, access, username, password
    }));
  }
