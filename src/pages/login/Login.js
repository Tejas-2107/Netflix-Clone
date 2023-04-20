import React, { useState } from 'react';
import './login.css';
function Login() {
    return (
        <div className='login'>
            <div className='top'>
                <div className='wrapper'>
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className='loginform'>
                <form action="" className='form'>
                    <h1>Sign in</h1>
                    <input type="email" name="email" placeholder='Enter email' />
                    <input type="password" name="password" placeholder='Enter password' />
                    <button className='loginbtn1'>Sign in</button>
                </form>
                <div className="bottom">
                    <div className='first'>
                        <p>New to Netflix</p>
                        <a href="#">Sign up now</a>
                    </div>
                    <div className='second'>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot  <a href="#">Learn more</a></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;