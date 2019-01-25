'use strict';

export const fetchList = (type) => {
  return fetch(`http://rpi.local:8080/${type}/list`)
    .then(resp => (resp.ok && resp.json()) || [])
    .catch(err => {
      console.log(err);
      return [];
    });
};