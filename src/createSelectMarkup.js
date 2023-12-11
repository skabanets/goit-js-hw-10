export const createSelectMarkup = cats => {
  return cats.map(createSelectOptionMarkup).join('');
};

const createSelectOptionMarkup = ({ id, name }) => {
  return `<option value="${id}">${name}</option>`;
};
