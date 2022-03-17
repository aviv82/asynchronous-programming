import { ORIGIN } from '../config.js';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#evolution-section
  const URL = `${ORIGIN}/evolution-chain/${chainId}/`;
  // console.log(URL);
  // --- fetch the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok (this works!) ---*/
  const data = await response.json();
  // console.log(data);
  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  // tricky one!  you will need to push all the species into an array
  const pokemon = [];
  pokemon.push(data.chain.species);
  const keys = Object.keys(data);
  console.log(keys)
  for (const key of keys) {
    if (key === 'chain') {
    }
  }
  return pokemon;
};
// data -> chain -> evolves_to -> 0 -> evolves_to
//            species             species
/*
const isObject = (value) => (Object(value) === value); // return true if value is an Object/Array
  const findSpecies = (data = {}) => {
      let species = [];
      if(isObject(data)) {
          const keys = Object.keys(data);
          for(const key of keys) {
              let tempSpecies;
              if (key === 'species') {
                  tempSpecies = [ data[key] ];
              } else {
                  tempSpecies = findSpecies(data[key]);
              }
              // species = species.concat(tempSpecies);
              species.push(...tempSpecies);
          }
      }
      return species;
  };
  const pokemon = findSpecies(data).reverse();

  // --- return the final data ---
  return pokemon;
}; 

 /*
  const pokemon = [];
pokemon.push(data.chain.species);
// console.log(pokemon)

const keyOne = Object.keys(data.chain.evolves_to);
// console.log(keys)

if (keyOne.includes('0')) {
  pokemon.push(data.chain.evolves_to[0].species);
  // console.log(pokemon)
}
const keyTwo = Object.keys(data.chain.evolves_to[0].evolves_to)
// console.log(keyTwo)
if (keyTwo.includes('0')) {
  pokemon.push(data.chain.evolves_to[0].evolves_to[0].species);
  // console.log(pokemon)
}
  // --- return the final data ---
  // console.log(pokemon);
  */
