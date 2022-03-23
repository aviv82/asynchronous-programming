import { wikiResource } from '../API-calls/wiki-resource.js';

/**
 *
 */

export const fetchAndRenderItem = async (event) => {
  const output = document.getElementById('output');
  const error = document.getElementById('#error');

  const searchTerm = event.target.parentElement.children[0].value;
  try {
    const searchResult = await wikiResource(searchTerm);
  } catch (error) {
    throw new Error(error);
  }

  return;
};
