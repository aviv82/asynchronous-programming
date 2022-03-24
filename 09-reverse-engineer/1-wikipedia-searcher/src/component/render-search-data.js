/**
 *
 */

export const renderSearchData = (searchResult = {}) => {
  const output = document.getElementById('output');
  output.innerHTML = '';
  for (let i = 0; i < searchResult.query.search.length; i++) {
    const divEl = document.createElement('div');
    divEl.className = 'row';
    const h3El = document.createElement('h3');
    const a1El = document.createElement('a');
    const URL = `https://en.wikipedia.org/wiki/${searchResult.query.search[i].title}`;
    const encodeURL = encodeURI(URL);
    a1El.href = encodeURL;
    a1El.innerHTML = `${searchResult.query.search[i].title}`;
    h3El.appendChild(a1El);
    divEl.appendChild(h3El);
    const pEl = document.createElement('p');
    pEl.innerHTML = `${searchResult.query.search[i].snippet}`;
    divEl.appendChild(pEl);
    const a2El = document.createElement('a');
    a2El.href = encodeURL;
    const button = document.createElement('button');
    button.innerHTML = 'View Full Article';
    a2El.appendChild(button);
    divEl.appendChild(a2El);
    output.appendChild(divEl);
  }
  return output;
};
