const BASE_URL = `https://dummyjson.com/posts`;

//const get: async (<stuff>) => {}

export const getPosts = async () => {
  try {
    const apiResponse = await fetch(BASE_URL);
    const data = await apiResponse.json();
    return data.posts;
  } catch (error) {
    return "Error"
  }
}

/* 
export async function getPosts() {
  try {
    const apiResponse = await fetch(BASE_URL);
    const data = await apiResponse.json();
    return data.posts;
  } catch (error) {
    return "Error"
  }
};
 */