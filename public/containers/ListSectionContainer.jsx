import React, { Component } from 'react';
import '../css/ListSection.less'

class ListSectionContainer extends Component {
  left() {
    const selectedItm = this.props.list.find(item => item.selected);
    const selectedIdx = this.props.list.indexOf(selectedItm);
    if(!selectedItm || selectedIdx <= 0) {
      selectedItm && (selectedItm.selected = false);
      this.setState({});
      return false;
    }

    selectedItm.selected = false;
    this.props.list[selectedIdx - 1].selected = true;
    this.setState({});
    return true;
  }

  right() {
    const selectedItm = this.props.list.find(item => item.selected);
    const selectedIdx = this.props.list.indexOf(selectedItm);

    if(selectedItm && (selectedIdx + 1) >= this.props.list.length) {
      return false;
    }

    selectedItm && (selectedItm.selected = false);
    (this.props.list[selectedIdx + 1] || this.props.list[0]).selected = true;
    this.setState({});
    return true;
  }

  up() {
    return true;
  }

  down() {
    return true;
  }

  getList() {
    if(this.props.loading) {
      return (<div className="loading center"></div>);
    }

    if(this.props.noItems) {
      return (<div className="empty-list center">Nothing matched your search.</div>);
    }

    return this.props.list.map(item => 
      <div className={ 'list-item ' + (item.selected ? 'selected ' : '') + (!item.POSTER ? 'no-poster ' : '') } 
        style={ !!item.POSTER ? {'background-image': 'url(' + item.POSTER + ')' } : {} } 
        tabindex="-1" 
        ref={
          listItem => listItem && item.selected && listItem.focus()
        }>
        <div className="title-name">{item.TITLE || item.title}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="list-section">
        {
          this.getList()
        }
      </div>
    );
  }
}

export default ListSectionContainer;
