import React, { Component } from 'react';
import SideBarComponent from './SideBarContainer';
import ListSectionContainer from './ListSectionContainer';

class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <SideBarComponent ref={ this.props.sideBarRef } onSideBarSelectionChanged={this.props.onSideBarSelectionChanged} /> 
        <ListSectionContainer ref={ this.props.listSectionRef } /> 
      </div>
    );
  }
}

export default PageContainer;
