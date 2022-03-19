import { typicodeResource } from "../api/typicode-resource.js";

import { renderPost } from "../components/render-post.js";

export const chooseAndRenderPost = async (event) => {
    const postId = event.target.form.postId.value;

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
const postPromise = typicodeResource('posts', postId);
const commentPromise = typicodeResource('posts', postId, 'comments')
    } catch{

    };
};