import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createCatInfoMarckup } from './createCatInfoMarkup';
import { createSelectMarkup } from './createSelectMarkup';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  errorMessage: document.querySelector('.error'),
  catInfoBox: document.querySelector('.cat-info'),
};

let cats = [];

const onSelectChange = e => {
  refs.catInfoBox.innerHTML = '';
  refs.loader.classList.remove('is-hidden');
  refs.catInfoBox.classList.add('is-hidden');
  const id = e.target.value;

  const cat = cats.filter(cat => cat.id === id);
  const { name, description, temperament } = cat[0];

  fetchCatByBreed(id).then(result => {
    const img = result[0].url;
    const catMatkup = createCatInfoMarckup(name, description, temperament, img);

    refs.loader.classList.add('is-hidden');
    refs.catInfoBox.classList.remove('is-hidden');
    refs.catInfoBox.innerHTML = catMatkup;
  });
};

const onWindowLoad = () => {
  fetchBreeds().then(result => {
    cats = result;
    const markup = createSelectMarkup(result);
    refs.select.innerHTML = markup;

    refs.select.classList.remove('is-hidden');
    refs.loader.classList.add('is-hidden');
    refs.catInfoBox.classList.add('is-hidden');

    refs.select.addEventListener('change', onSelectChange);
  });
};

window.addEventListener('load', onWindowLoad);
