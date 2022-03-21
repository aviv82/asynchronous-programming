import { typicodeResource } from '../api/typicode-resource.js';

import { renderPost } from '../components/render-post.js';
import { renderComments } from '../components/render-comments.js';

import { otherError } from '../components/other-error.js';
import { fourOhfour } from '../components/four-oh-four.js';

export const chooseAndRenderPost = async (event) => {
  const postId = event.target.form.postId.value;

  const root = document.getElementById('root');
  root.innerHTML = '';

  try {
    const postPromise = await typicodeResource('posts', postId);
    const commentPromise = await typicodeResource('posts', postId, 'comments');
    const postDiv = document.createElement('div');
    postDiv.id = `post-${postPromise.id}`;
    postDiv.innerHTML = renderPost(postPromise);
    const commentDiv = document.createElement('div');
    commentDiv.id = 'comments';
    commentDiv.innerHTML = renderComments(commentPromise);
    postDiv.appendChild(commentDiv);
    root.appendChild(postDiv);
    return root;
  } catch (err) {
    let errorElement = err.message;
    if (err.message.includes('404')) {
      errorElement = fourOhfour(postId);
    } else {
      errorElement = otherError(postId);
    }
    root.appendChild(errorElement);
  }
};
