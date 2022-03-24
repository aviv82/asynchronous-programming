import { wikiResource } from '../API-calls/wiki-resource.js';
import { renderSearchData } from '../component/render-search-data.js';

/**
 *
 */

export const fetchAndRenderItem = async (event) => {
  const app = document.getElementById('app');
  const error = document.getElementById('#error');
  const searchTerm = event.target.parentElement.children[0].value;
  try {
    const searchResult = await wikiResource(searchTerm);
    renderSearchData(searchResult);
  } catch (error) {
    const output = document.getElementById('output');
    output.innerHTML = "OWW shit! API isn't working!";
  }
};
