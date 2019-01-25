import React, { Component } from 'react';
import SideBarComponent from './SideBarContainer';
import ListSectionContainer from './ListSectionContainer';
import LoginComponent from '../components/LoginComponent';
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
      )
      .catch(err => {
        if(err === API.UNAUTHORIZED) {
          this.setState({
            loginRequired: true,
            loading: false,
            list: [],
            ts: 0,
            noItems: false
          });
        }
      });

    this.setState({
      ts,
      type,
      loading: true
    });
  }

  onLogin() {
    this.setState({
      loginRequired: false
    });
  }

  render() {
    if(this.state.loginRequired) {
      return <LoginComponent onLogin={ this.onLogin.bind(this) }/>;
    }

    return (
      <div> 
        <SideBarComponent ref={ this.props.sideBarRef } selected={this.state.type} onSideBarSelectionChanged={this.selectionChanged} /> 
        <ListSectionContainer ref={ this.props.listSectionRef } { ...this.state }  /> 
      </div>
    );
  }
}

export default PageContainer;
