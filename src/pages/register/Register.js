import React, { useState } from 'react';
import './register.css';
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hand = (e) => {
        console.log(e.target);

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className='loginbtn'>Sign in</button>
                </div>
                <div className='container'>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    {
                        !email ? <div className='input'>
                            <input type="email" name="email" placeholder='Email adress' className='rinput' required />
                            <button className='registerbtn' onClick={hand}>Get started</button>
                        </div> : <form action="" className='input'>
                            <input type="password" name="password" placeholder='Enter password' className='rinput' onChange={handlePassword} required />
                            <button className='registerbtn' >Login</button>
                        </form>
                    }
                </div>

            </div>
        </div>
    );
}

export default Register;