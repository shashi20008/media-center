'use strict';
import SideBar from '../components/SideBar';
import React from 'react';

const SIDEBAR_ITEMS = ['series', 'movies', 'others'];

class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: SIDEBAR_ITEMS.map( item => ({item, selected: false}) )
    };
  }

  clearSelected() {
    this.state.items.forEach(item => item.selected = false);
  }

  changeSelection(idx) {
    const items = this.state.items;
    this.clearSelected();
    items[idx].selected = true;
    this.setState({});
    this.props.onSideBarSelectionChanged(items[idx].item);
  }

  left() {
    this.state.items.find(item => item.item === 'series').selected = true;
    this.setState({});
  }

  down() {
    const items = this.state.items;
    let idx = 0;
    while(idx < items.length && !items[idx].selected) idx++;

    idx++;
    if(idx >= items.length) {
      return false;
    }
    this.changeSelection(idx);
    return true;
  }

  up() {
    const items = this.state.items;
    let idx = 0;
    while(idx < items.length && !items[idx].selected) idx++;

    idx--;
    if(idx < 0) {
      return false;
    }
    this.changeSelection(idx);
    return true;
  }

  right() {
    this.clearSelected();
    this.setState({});
  }

  render() {
    return (<SideBar {...this.state} />);
  }
}

export default SideBarComponent;
