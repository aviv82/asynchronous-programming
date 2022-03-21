/**
 * this function creates an error message for non 404 errors
 *
 * @param {Number} [postId = 0] - The erroneous post id.
 * @returns {String} - The error message to be displayed to the user.
 */

export const otherError = (postId) => {
  const preEl = document.createElement('pre');
  preEl.innerHTML = `there was a problem getting the post at id: ${postId}. Please try again.`;
  return preEl;
};
