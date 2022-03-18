import { ORIGIN } from '../config.js';

/**
 * Fetches a single user with the given user name.
 *
 * @async
 * @param {string} [userName=''] - The user name to request.
 * @returns {Promise<object|null>} The user object if it exists, otherwise null.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const userByUsername = async (userName = '') => {
  // --- declare your resource's URL ---
  // hint: ctr-f "filter" -> https://github.com/typicode/json-server
  const URL = `${ORIGIN}/users/?username=${userName}`;

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
  // --- process the fetched data (if necessary) ---
  //   you do not need to use `await` below this comment
  const user = data[0];
  if (user === undefined) {
    return null;
  }
  // --- return the final data ---
  return user;
};

/* 
describe('userByUsername: fetches the user with a specific username', () => {
  describe('it returns the user object if the username exists', () => {
    it('there is a user named "Delphine"', async () => {
      const user = await userByUsername('Delphine');
      expect(user).toEqual({
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
          street: 'Dayna Park',
          suite: 'Suite 449',
          city: 'Bartholomebury',
          zipcode: '76495-3109',
          geo: {
            lat: '24.6463',
            lng: '-168.8889',
          },
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
          name: 'Yost and Sons',
          catchPhrase: 'Switchable contextually-based project',
          bs: 'aggregate real-time technologies',
        },
      });
    });
*/
