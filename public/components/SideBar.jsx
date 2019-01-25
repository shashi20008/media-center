'use strict';
import React from 'react';
import '../css/SideBar.less';

const map = items => items.map(item => 
  <div className={ "side-bar-item " + (item.selected ? 'selected' : '') } tabindex="0">
    { item.item }
  </div>
);

function SideBar(props) {
  return (
    <div class="side-bar">
      { map(props.items) }
    </div>
  );
}

export default SideBar;
