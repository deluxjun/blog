import client from './client';

export const readPost = (id) => client.get(`/json/getDocument?docId=${id}`);
