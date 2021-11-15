import React from 'react';
import { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const handleEmailChange = e => {
        setEmail(e.target.value);
        e.preventDefault();
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        setMessage('');
        const user = { email: email }
        const url = 'https://mysterious-gorge-96095.herokuapp.com/users/admin';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                if (resData?.modifiedCount) {
                    setMessage('Admin Created Successfully!!!');
                }
                else {
                    setError('User not found or Admin already Created!!!');
                }
            })
    }
    return (
        <React.Fragment>
            <Dashboard></Dashboard>
            <div className="mx-5">
                <form onSubmit={handleFormSubmit}>
                    <h2>Create Admin</h2>
                    {setMessage ?
                        <div className="row mb-5  ml-5 text-primary">{message}</div> : ''

                    }
                    {error ?
                        <div className="row mb-5  ml-5 text-danger">{error}</div> : ''

                    }
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>





                    <button type="submit" className="btn btn-primary">Make Admin</button>

                </form>
            </div >
        </React.Fragment>
    );
};

export default MakeAdmin;