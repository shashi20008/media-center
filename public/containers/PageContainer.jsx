import React, { Component } from 'react';
import SideBarComponent from './SideBarContainer';

class PageContainer extends Component {
  render() {
    return (
      <div> 
        <SideBarComponent ref={ this.props.sideBarRef } onSideBarSelectionChanged={this.props.onSideBarSelectionChanged} /> 
        Blah 
      </div>
    );
  }
}

export default PageContainer;
