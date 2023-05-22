const BASE_URL = `https://dummyjson.com/posts`;

export async function getArticles() {
  const apiResponse = await fetch(BASE_URL);
  const data = await apiResponse.json();
 return data.posts;
};