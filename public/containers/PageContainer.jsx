import React, { Component } from 'react';
import SideBarComponent from './SideBarContainer';
import ListSectionContainer from './ListSectionContainer';

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'series' };

    this.selectionChanged = this.selectionChanged.bind(this);
  }

  selectionChanged(selection) {
    console.log(selection);
    this.setState({ type: selection });
  }

  render() {
    return (
      <div> 
        <SideBarComponent ref={ this.props.sideBarRef } selected={this.state.type} onSideBarSelectionChanged={this.selectionChanged} /> 
        <ListSectionContainer ref={ this.props.listSectionRef } type={ this.state.type } /> 
      </div>
    );
  }
}

export default PageContainer;
