import React, { Component } from 'react';
import SideBarComponent from './SideBarContainer';
import ListSectionContainer from './ListSectionContainer';
import * as API from '../libs/api';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'series',
      loading: true,
      noItems: false,
      list: []
    };

    this.selectionChanged = this.selectionChanged.bind(this);
  }

  componentDidMount() {
    this.selectionChanged(this.state.type);
  }

  selectionChanged(type) {
    const ts = Date.now();
    API.fetchList(type)
      .then(list => 
        (this.state.ts <= ts) && this.setState({
          list,
          noItems: list.length === 0,
          loading: false
        })
      );

    this.setState({
      ts,
      type,
      loading: true
    });
  }

  render() {
    return (
      <div> 
        <SideBarComponent ref={ this.props.sideBarRef } selected={this.state.type} onSideBarSelectionChanged={this.selectionChanged} /> 
        <ListSectionContainer ref={ this.props.listSectionRef } { ...this.state }  /> 
      </div>
    );
  }
}

export default PageContainer;
