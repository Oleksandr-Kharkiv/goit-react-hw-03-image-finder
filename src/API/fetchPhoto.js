const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=34921015-82cb8e104c87b6309f3f6f395';

export const fetchPhoto = (q, p) => {
  // console.log(`номер сторінки з fetch: ${p}`);
  return fetch(
    `${BASE_URL}${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&per_page=12&page=${p}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(console.log(res.status));
    }
    return res.json();
  });
};
