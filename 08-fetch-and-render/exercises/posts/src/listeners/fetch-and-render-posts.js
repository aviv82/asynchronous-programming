import { chooseAndRenderPost } from "../handlers/choose-and-render-post.js";

export const fetchAndRenderPosts = (id = '') => {
    document.getElementById(id).addEventListener('click', chooseAndRenderPost)
};