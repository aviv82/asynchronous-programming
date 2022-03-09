import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/**
 * A function that fetches the user's username and email address.
 * 
 * @param {number} userID - The user Id to fetch 
 * @returns {Promise<string>} a promise that resolves in username and email.
 * 
 * @throws {Error} {status number}: {status text}
 */

const usernameAndEmail = (id = 0) => {
  return fetchUserById(id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then((user) => {
      return `${user.id}. ${user.username}, ${user.email}`;
    });
};
// --- test function ---


describe("usernameAndEmail: returns a user's name", () => {
  it("gets user 2's name", () => {
    return usernameAndEmail(2).then((actual) => {
      expect(actual).toEqual('2. Antonette, Shanna@melissa.tv');
    });
  });
  it("gets user 3's name", () => {
    return usernameAndEmail(3).then((actual) => {
      expect(actual).toEqual('3. Samantha, Nathan@yesenia.net');
    });
    });
  it("gets user 4's name", () => {
    return usernameAndEmail(4).then((actual) => {
      expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org');
    });
  });
  it("gets user 7's name", () => {
    return usernameAndEmail(7).then((actual) => {
      expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
    });
  });
  it("gets user 10's name", () => {
    return usernameAndEmail(10).then((actual) => {
      expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz');
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
