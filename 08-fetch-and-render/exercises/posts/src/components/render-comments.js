/**
 * A function that renders the user comments object and creates DOM elements for the ui.
 *
 *@param {Object} [commentPromise = {}] - The user comments to render.
 * @returns {String} - The inner html DOM element to append.
 */

export const renderComments = (commentPromise = {}) => {
  let commentString = '';
  for (let i = 0; i < commentPromise.length; i++) {
    const commentId = String(commentPromise[i].id);
    const commentTitle = commentPromise[i].name;
    const commentEmail = commentPromise[i].email;
    const commentBody = commentPromise[i].body;
    const text = `<div class="comment" id="${commentId}"><h2>${commentTitle}</h2><code>comment by: ${commentEmail}</code><p>${commentBody}</p></div>`;
    commentString = commentString + text;
  }
  return commentString;
};
