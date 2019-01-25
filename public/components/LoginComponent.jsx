'use strict';

import React from 'react';
//import '../css/login.less';

const nameRef = React.createRef();
const passRef = React.createRef();
const onLogin = parentOnLogin => {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username: nameRef.current.value,
      password: passRef.current.value
    })
  })
  .then(resp => {
    if(!resp || resp.status === 401) {
      return;
    }

    return parentOnLogin();
  })
};

function LoginComponent(props) {
  return (
    <div className="login-section">
      <input type="text" ref={ nameRef } />
      <input type="password" ref={ passRef } />
      <button onClick={ onLogin.bind(null, props.onLogin) }>Login</button>
    </div>
  );
}

export default LoginComponent;
