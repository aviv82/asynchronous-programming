import { fetchAndRenderItem } from '../handlers/fetch-and-render-item.js';

export const fetchAndRenderListener = document.getElementById('id');
fetchAndRenderListener.addEventListener('click', fetchAndRenderItem);
