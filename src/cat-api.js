import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_XjMzyb9eZS59yLID0lEw1FUKNsyzpsYio0gyJQBONCXaFMIDQbys46kRb6UAKaFY';

export const fetchBreeds = () => {
  const BASE_URL = 'https://api.thecatapi.com';

  return fetch(`${BASE_URL}/v1/breeds`)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    })
    .catch(error => {
      return Notify.failure(error.message);
    });
};

export const fetchCatByBreed = breedId => {
  const BASE_URL = 'https://api.thecatapi.com';

  return fetch(`${BASE_URL}/v1/images/search?breed_ids=${breedId}`)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Oops! Something went wrong! Try reloading the page!');
    })
    .catch(error => {
      return Notify.failure(error.message);
    });
};
