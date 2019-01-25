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
    fetch(`http://rpi.local:8080/${this.props.type}/list`)
      .then(resp => (resp.ok && resp.json()) || [])
      .catch(err => {
        console.log(err);
        return [];
      })
      .then(list => {
        if(!list || list.length === 0) {
          return this.setState({
            loading: false,
            noItems: true,
            list: []
          });
        }

        this.setState({
          noItems: false,
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

  shouldComponentUpdate(nextProps) {
    if(nextProps.type !== this.props.type) {
      this.state.loading = true;
      setTimeout(this.componentDidMount.bind(this), 100);
    }
    return true;
  }

  getList() {
    if(this.state.loading) {
      return (<div className="loading center"></div>);
    }

    if(this.state.noItems) {
      return (<div className="empty-list center">Nothing matched your search.</div>);
    }

    return this.state.list.map(item => 
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