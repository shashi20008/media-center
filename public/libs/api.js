'use strict';

export const UNAUTHORIZED = new Error('unauthorized');

export const fetchList = (type) => {
  return fetch(`/${type}/list`)
    .then(resp => {
      if(!resp.ok && resp.status === 401) {
        // blah.
        throw UNAUTHORIZED;
      }
      return resp.json() || [];
    })
    .catch(err => {
      if(err === UNAUTHORIZED) {
        throw UNAUTHORIZED; // re-throw.
      }

      console.log(err);
      return [];
    });
};