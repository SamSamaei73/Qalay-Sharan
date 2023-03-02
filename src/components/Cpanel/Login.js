import React from 'react';
import "../../Sass/Cpanel.scss";
import Logo from '../../img/logo-qalay.png';

const Login = () => {
  return (
    <div className='Login'>
        <div className="BoxLogin">
            <h2>Login</h2>
            <div className="boxItem">
                <h4>Username</h4>
                <input type="username" />
            </div>
            <div className="boxItem">
                <h4>Password</h4>
                <input type="password" />
            </div>
            <div className="btn">
                <button>Login</button>
            </div>
        </div>
        <img src={Logo} alt="Logo" />
    </div>
  )
}

export default Login