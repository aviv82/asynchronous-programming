/**
 * this function creates an error message for 404 errors
 *
 * @param {Number} [postId = 0] - The erroneous post id.
 * @returns {String} - The error message to be displayed to the user.
 */

export const fourOhfour = (postId) => {
  const preEl = document.createElement('pre');
  preEl.innerHTML = `there is no post with id: ${postId}. try a different Id number.`;
  return preEl;
};
