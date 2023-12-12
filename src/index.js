import { lineSpinner } from 'ldrs';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix';
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

  fetchCatByBreed(id)
    .then(result => {
      console.log(result);
      const img = result[0].url;
      const catMatkup = createCatInfoMarckup(
        name,
        description,
        temperament,
        img
      );

      refs.catInfoBox.classList.remove('is-hidden');
      refs.catInfoBox.innerHTML = catMatkup;
    })
    .catch(error => {
      return Notify.failure(error.message);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};

const onWindowLoad = () => {
  lineSpinner.register();
  refs.loader.classList.remove('is-hidden');

  fetchBreeds()
    .then(result => {
      console.log(result);
      cats = result;

      const markup = createSelectMarkup(result);
      refs.select.innerHTML = markup;

      new SlimSelect({
        select: '#breed-select',
      });

      refs.select.classList.remove('is-hidden');
      refs.catInfoBox.classList.add('is-hidden');
      refs.select.addEventListener('change', onSelectChange);
    })
    .catch(error => {
      return Notify.failure(error.message);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};

window.addEventListener('load', onWindowLoad);
