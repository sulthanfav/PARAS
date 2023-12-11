export interface CountFolls {
  count: number;
}

    const getStoredUserData = () => {
  const userDataString = sessionStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
};

const userData = getStoredUserData()?.akun_id;
console.log(userData)

export async function fetchCountFolls(userData?: number) {
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

    const response = await fetch(`/api/followers/${userData}/count`);
    const follsCount = await response.json();
    return follsCount as CountFolls;
  } catch (error) {
    console.error('Error fetching folls:', error);
    return null;
  }
}
