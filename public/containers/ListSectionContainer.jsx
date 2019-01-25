import React, { Component } from 'react';
import '../css/ListSection.less'

class ListSectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      list: []
    }
  }

  componentDidMount() {
    // load data;
    fetch('http://rpi.local:8080/series/list')
      .then(resp => (resp.ok && resp.json()) || [])
      .catch(err => {
        console.log(err);
        return [];
      })
      .then(list => {
        this.setState({
          loading: false,
          list
        })
      });
  }

  left() {
    const selectedItm = this.state.list.find(item => item.selected);
    const selectedIdx = this.state.list.indexOf(selectedItm);
    if(!selectedItm || selectedIdx <= 0) {
      selectedItm && (selectedItm.selected = false);
      this.setState({});
      return false;
    }

    selectedItm.selected = false;
    this.state.list[selectedIdx - 1].selected = true;
    this.setState({});
    return true;
  }

  right() {
    const selectedItm = this.state.list.find(item => item.selected);
    const selectedIdx = this.state.list.indexOf(selectedItm);

    if(selectedItm && (selectedIdx + 1) >= this.state.list.length) {
      return false;
    }

    selectedItm && (selectedItm.selected = false);
    (this.state.list[selectedIdx + 1] || this.state.list[0]).selected = true;
    this.setState({});
    return true;
  }

  up() {
    return true;
  }

  down() {
    return true;
  }

  render() {
    return (
      <div className="list-section">
        {
          this.state.list.map(item => 
            <div className={ 'list-item ' + (item.selected ? 'selected ' : '') + (!item.POSTER ? 'no-poster ' : '') } 
              style={ {'background-image': 'url(' + item.POSTER || '' + ')' } } 
              tabindex="-1" 
              ref={
                listItem => listItem && item.selected && listItem.focus()
              }>
              <div className="title-name">{item.TITLE || item.title}</div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListSectionContainer;