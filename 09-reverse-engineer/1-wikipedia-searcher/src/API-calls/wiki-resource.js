import { ORIGIN } from '../config.js';

/**
 *
 */

export const wikiResource = async (searchTerm = '') => {
  const URL = `${ORIGIN}${searchTerm}`;
  const encodeURL = encodeURI(URL);
  const searchPromise = await fetch(encodeURL);

  if (!searchPromise.ok) {
    console.log('error');
    throw new Error(`${searchPromise.status}: ${searchPromise.statusText}`);
  }
  const searchData = await searchPromise.json();
  console.log('API result:', searchData);
  return searchData;
};
