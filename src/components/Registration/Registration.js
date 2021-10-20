import { React, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = mail => {
        setEmail(mail.target.value)
    }
    const handlePassword = pass => {
        setPassword(pass.target.value)
    }

    const history = useHistory();
    const { createUser } = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        createUser(email, password)
            .then(result => {
                if (result) {
                    history.push('/login');
                }
            })

    }

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1>Registration Page</h1>
                <p>You need to provide some information here</p>
            </div>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" onBlur={handleEmail} className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" onBlur={handlePassword} className="form-control" id="password" required />
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-secondary w-50">Register</button>
                </div>
            </form>
            <NavLink exact to="/login" className="nav-link text-center">Already have an account?</NavLink>
        </div>
    );
};

export default Registration;