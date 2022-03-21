/**
 * A function that renders the user post object and creates DOM elements for the ui.
 *
 *@param {Object} [postPromise = {}] - The user post to render.
 * @returns {String} - The inner html DOM elements to append.
 */

export const renderPost = (postPromise = {}) => {
  const userId = postPromise.userId;
  const postTitle = postPromise.title;
  const postBody = postPromise.body;
  return `<h1>${postTitle}</h1><code>posted by user: ${userId}</code><p>${postBody}</p>`;
};
