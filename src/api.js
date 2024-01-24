export const fetchData = async (query) => {
  const BASE_URL = "https://pixabay.com/api/";
  const response = await fetch(
    `${BASE_URL}?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`
  );
  const data = await response.json();
  return data;
};
