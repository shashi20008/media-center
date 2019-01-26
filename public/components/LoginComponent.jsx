'use strict';

import React from 'react';
import '../css/login.less';

const nameRef = React.createRef();
const passRef = React.createRef();
const onLogin = parentOnLogin => {
  parentOnLogin(nameRef.current.value, passRef.current.value);
};

function LoginComponent(props) {
  return (
    <div className="login-section">
      <div className="inpt-control"><input type="text" ref={ nameRef } placeholder="Email" autoFocus={ true } /></div>
      <div className="inpt-control"><input type="password" ref={ passRef } placeholder="Password" /></div>
      <div className="inpt-control"><button onClick={ onLogin.bind(null, props.onLogin) } >Login</button></div>
    </div>
  );
}

export default LoginComponent;
