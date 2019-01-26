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

export const logout = () => {
  return fetch('/logout')
    .then(resp => {
      if(!resp.ok) {
        throw new Error('logout failed!');
      }
    });
};

export const login = (username, password) => {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(resp => {
    if(resp.ok) {
      return resp.json();
    }
    throw UNAUTHORIZED;
  })
};
