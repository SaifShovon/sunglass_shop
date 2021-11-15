import React from 'react';
import useAuth from '../hooks/AuthProvider';
import { Table } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';

const Profile = () => {
    const { user, error } = useAuth();

    return (
        <div>
            <Dashboard></Dashboard>
            <h2 className="bg-secondary py-3">Your Profile</h2>
            <div className="mx-5 mt-5">

                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.email}</td>
                            <td>{user.displayName}</td>
                        </tr>
                    </tbody>
                </Table>

                {error ?
                    <div className="row mb-3 text-danger">{error}</div> : ''
                }
            </div >

        </div >
    );
};

export default Profile;