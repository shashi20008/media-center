import React from 'react';
import ReactDom from 'react-dom';

import PageContainer from './containers/PageContainer';

import './css/common.less';

const sideBarRef = React.createRef();

const onSideBarSelectionChanged = (selected) => {
  console.log(selected);
};

const options = { sideBarRef, onSideBarSelectionChanged };

let focusPane;
document.addEventListener('keydown', e => {
  switch(e.which) {
    case 37:
      return sideBarRef.current.focus();
    case 39:
      return sideBarRef.current.removeFocus();
    case 38:
      return sideBarRef.current.up();
    case 40:
      return sideBarRef.current.down();
  }
});

ReactDom.render(<PageContainer { ...options } />, document.getElementById('root'));
