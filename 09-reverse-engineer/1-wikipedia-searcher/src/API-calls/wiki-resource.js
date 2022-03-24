import { ORIGIN } from '../config.js';

/**
 *
 */

export const wikiResource = async (searchTerm = '') => {
  const URL = `${ORIGIN}${searchTerm}`;
  const encodeURL = encodeURI(URL);
  const searchPromise = await fetch(encodeURL);
  if (!searchPromise.ok) {
    throw new Error(`${searchPromise.status}: ${searchPromise.statusText}`);
  }
  const searchData = await searchPromise.json();
  return searchData;
};
