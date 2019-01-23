'use strict';

const fullScreenAPI = [{
  request: 'requestFullscreen',
  exit: 'exitFullscreen',
  curElem: 'fullscreenElement',
  successEvt: 'fullscreenchange',
  errEvt: 'fullscreenerror'
}, {
  request: 'mozRequestFullScreen',
  exit: 'mozCancelFullScreen',
  curElem: 'mozFullScreenElement',
  successEvt: 'mozfullscreenchange',
  errEvt: 'mozfullscreenerror'
}, {
  request: 'webkitRequestFullScreen',
  exit: 'webkitCancelFullScreen',
  curElem: 'webkitCurrentFullScreenElement',
  successEvt: 'webkitfullscreenchange',
  errEvt: 'webkitfullscreenerror'
}, {
  request: 'msRequestFullscreen',
  exit: 'msExitFullscreen',
  curElem: 'msFullscreenElement',
  successEvt: 'msfullscreenchange',
  errEvt: 'msfullscreenerror'
}];

function requestFullScreen(API, elem) {
  return function() {
    elem[API.request]();
  }
}

function noop() {}

// Calling this will 
function ensureFullScreen(elem, enterFSCb, exitFSCb, errorCb) {
  if (!elem) {
    throw new Error('element is required');
  }

  enterFSCb = enterFSCb || noop;
  exitFSCb = exitFSCb || noop;
  errorCb = errorCb || noop;

  const API = fullScreenAPI.find(api => !!elem[api.request]);

  if (!API) {
    throw new Error('Full screen apis not supported on this system!');
  }

  document.addEventListener(API.errEvt, errorCb);

  document.addEventListener(API.successEvt, function(e) {
    if (document[API.curElem]) {
      window.onkeypress = window.onclick = null;
      return enterFSCb(e);
    }
    exitFSCb(e);
    window.onkeypress = window.onclick = requestFn;
  });

  const requestFn = requestFullScreen(API, elem);
  window.onkeypress = window.onclick = requestFn;
}

export default ensureFullScreen; 