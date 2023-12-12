import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_XjMzyb9eZS59yLID0lEw1FUKNsyzpsYio0gyJQBONCXaFMIDQbys46kRb6UAKaFY';

export const fetchBreeds = () => {
  const BASE_URL = 'https://api.thecatapi.com';

  return axios.get(`${BASE_URL}/v1/breeds`).then(res => {
    if (res.status) return res.data;
    throw new Error('Oops! Something went wrong! Try reloading the page!');
  });
};

export const fetchCatByBreed = breedId => {
  const BASE_URL = 'https://api.thecatapi.com';

  return axios
    .get(`${BASE_URL}/v1/images/search?breed_ids=${breedId}`)
    .then(res => {
      if (res.status) return res.data;
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    });
};
