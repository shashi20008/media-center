'use strict';
import React from 'react';

export const sideBarRef = React.createRef();
export const listSectionRef = React.createRef();

let focusedRef = listSectionRef;

const focusShiftMap = {
  left: [{
      from: listSectionRef,
      to: sideBarRef
    }],
  right: [{
    from: sideBarRef,
    to: listSectionRef
  }]
}

const switchFocus = (key) => {
  const nextFocus = ((focusShiftMap[key] || []).find(k => k.from === focusedRef) || {}).to;
  focusedRef = nextFocus || focusedRef;
};

const KeyToFnMap = {
  37: 'left',
  39: 'right',
  38: 'up',
  40: 'down',
  13: 'enter'
};

const noop = () => {};

const keyPressHandler = e => {
  if(sideBarRef.current === null && listSectionRef.current === null) {
    return;
  }

  const handler = (KeyToFnMap[e.which] || noop);
  if(!focusedRef.current[handler]()) {
    switchFocus(handler);
    focusedRef.current[handler]();
  }
};

function startKeyNavigation() {
  document.removeEventListener('keydown', keyPressHandler);
  document.addEventListener('keydown', keyPressHandler);
}

export { startKeyNavigation as start };
