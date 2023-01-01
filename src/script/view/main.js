/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import '../component/search-bar.js';
import '../component/card-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cardListElement = document.querySelector('card-list');
  const loaderElement = document.querySelector('#loader');

  const onButtonSearchClicked = () => {
    searchDrinks(searchElement.value);
  };

  const searchDrinks = async (keyword) => {
    loaderElement.style.display = 'block';
    try {
      const result = await DataSource.searchDrinks(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    loaderElement.style.display = 'none';
    cardListElement.cards = results;
  };

  const fallbackResult = (message) => {
    cardListElement.renderError(message);
  };

  // Default List Drinks
  searchDrinks('');
  // Search Drinks
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
