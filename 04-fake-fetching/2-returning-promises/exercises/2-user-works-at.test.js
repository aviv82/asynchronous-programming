import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/**
 * A function that fetches a user and checks their company name against the data object.
 *
 * @param {number} userId - The user ID to fetch.
 * @param {string} user's companyName - The company name we want to check if the user works at.
 *
 * @returns {Promise<boolean>} A promise that resolves if the user's company name is correct.
 *
 * @throws {Error} {status number}: {status text}
 */

const userWorksAt = (id = 0, companyName = '') => {
  return fetchUserById(id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then((user) => {
      return user.company.name === companyName;
    });
};

// users[id-1].company.name


// --- test function ---


describe('userWorksAt checks if a user works at a specific company', () => {
  it('user 2 does work at Deckow-Crist', () => {
    return userWorksAt(2, 'Deckow-Crist').then((actual) => {
      expect(actual).toEqual(true);
    });
  });
  it('user 2 does not work at Romaguera-Jacobson', () => {
    return userWorksAt(2, 'Romaguera-Jacobson').then((actual) => {
      expect(actual).toEqual(false);
    });
  });
  it('user 4 does work at Robel-Corkery', () => {
    return userWorksAt(4, 'Robel-Corkery').then((actual) => {
      expect(actual).toEqual(true);
    });
  });
  it('user 4 does not work at Romaguera-Jacobson', () => {
    return userWorksAt(4, 'Romaguera-Jacobson').then((actual) => {
      expect(actual).toEqual(false);
    });
  });
  it('user 6 does work at Considine-Lockman', () => {
    return userWorksAt(6, 'Considine-Lockman').then((actual) => {
      expect(actual).toEqual(true);
    });
  });
  it('user 7 does not work at John Groups', () => {
    return userWorksAt(7, 'John Groups').then((actual) => {
      expect(actual).toEqual(false);
    });
  });
});

log('= = = =  the call stack is empty  = = = =');
