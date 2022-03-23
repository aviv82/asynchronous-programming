import { fetchAndRenderItem } from '../handlers/fetch-and-render-item.js';

export const fetchAndRenderListener = document
  .getElementById('submit-btn')
  .addEventListener('click', fetchAndRenderItem);
