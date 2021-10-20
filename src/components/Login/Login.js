import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const redirectURL = location.state?.from || '/';

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL)
            })
    }


    //form handling 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = mail => {
        setEmail(mail.target.value)
    }
    const handlePassword = pass => {
        setPassword(pass.target.value)
    }

    const { loginUser, error, setError } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        loginUser(email, password)
            .then(result => {
                if (result) {
                    history.push('/profile');
                }
            }).catch((error) => {
                setError(error.message);
            });

    }

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1>Login Page</h1>
                <p>You need to login to access private spaces</p>
            </div>
            <form onSubmit={handleLogin} >
                <div className="bg-danger">
                    {
                        error
                    }
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-secondary w-50">Login</button>
                </div>
            </form>
            <NavLink exact to="/register" className="nav-link text-center">Need an account?</NavLink>
            <div className="container my-3 text-center">
                <button onClick={handleGoogleSignin} type="submit" className="btn btn-secondary">Continue with Google</button>
            </div>



        </div>
    );
};

export default Login;