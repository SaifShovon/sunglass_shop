import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { signUpUsigEmailAndPass, error } = useAuth();
    const [email, setEmail] = useState('');
    const [errorMessage, setError] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be atleast 6 character long!!!');
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/.test(password)) {
            setError('At least 1 alphabet!!At least 1 digit!!Contains no space!!!Optional special characters e.g. @$!%*#?&^_-!!!Minimum 8 characters long!!');
            return;
        }
        setError('');

        signUpUsigEmailAndPass(email, password, name);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        e.preventDefault();
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        e.preventDefault();
    }
    const handleNameChange = e => {
        setName(e.target.value);
        e.preventDefault();
    }

    return (
        <div>
            <div className="bg-secondary py-3">
                <Link to="/login">
                    <button style={{ marginTop: "10px" }} type="submit" className="btn btn-primary">Already Registered?</button>
                </Link>
            </div>
            <div className="mx-5">
                <form onSubmit={handleRegistration}>
                    <h2>Please Register</h2>
                    <div className="row mb-3">
                        <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>

                    {errorMessage ?
                        <div className="row mb-3 ml-5 text-danger">{errorMessage}</div> : ''

                    }
                    {error ?
                        <div className="row mb-3 ml-5 text-danger">{error}</div> : ''
                    }


                    <button type="submit" className="btn btn-primary">Register</button>

                </form>
            </div >

        </div >
    );
};

export default Register;