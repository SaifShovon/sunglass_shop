import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
import { useState } from 'react';
import Header from '../Header/Header';
const Login = () => {
    const { user } = useAuth();
    const { signInUsigEmailAndPass, error } = useAuth();
    const [email, setEmail] = useState('');
    const [errorMessage, setError] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const history = useHistory();
    const url = location.state?.from || "/home"
    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password, signInUsigEmailAndPass);
        if (password.length < 6) {
            setError('Password must be atleast 6 character long!!!');
            return;
        }
        // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/.test(password)) {
        //     setError('At least 1 alphabet!!At least 1 digit!!Contains no space!!!Optional special characters e.g. @$!%*#?&^_-!!!Minimum 8 characters long!!');
        //     return;
        // }
        setError('');
        signInUsigEmailAndPass(email, password, url, history)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        e.preventDefault();
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            {!user?.email &&
                <div className="bg-secondary py-3">
                    <Link to="/register">
                        <button style={{ marginTop: "10px" }} type="submit" className="btn btn-primary">New User?</button>
                    </Link>
                </div>
            }
            <div className="mx-5">
                <form onSubmit={handleLogin}>
                    <h2>Please Login</h2>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onChange={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    {errorMessage ?
                        <div className="row mb-5  ml-5 text-danger">{errorMessage}</div> : ''

                    }
                    {error ?
                        <div className="row mb-5  ml-5 text-danger">{error}</div> : ''
                    }


                    <button type="submit" className="btn btn-primary">Login</button>

                </form>
            </div >

        </div >
    );
};

export default Login;