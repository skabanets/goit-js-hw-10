export const createCatInfoMarckup = (name, description, temperament, src) => {
  return `<img
        class="cat-img"
        src="${src}"
        alt="${name}"
        width="300"
      />
      <div class="cat-text-info">
        <h1 class="cat-title">${name}</h1>
        <p class="cat-text">${description}</p>
        <p class="cat-text">
          <span class="cat-temperament">Temperament: </span>${temperament}
        </p>
      </div>`;
};
