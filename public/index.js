import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDom from 'react-dom';

import PageContainer from './containers/PageContainer';
import FSHelper from './libs/full-screen-helpers';
import * as KeyNav from './libs/key-navigation';
import { sideBarRef, listSectionRef } from './libs/key-navigation';

import './css/common.less';

const options = { sideBarRef, listSectionRef };

function renderUI() {
  ReactDom.render(<PageContainer { ...options } />, document.getElementById('root'));
  KeyNav.start();
}

function exitUI() {
  ReactDom.unmountComponentAtNode(document.getElementById('root'));
}

FSHelper(document.getElementById('root'), renderUI, exitUI);
