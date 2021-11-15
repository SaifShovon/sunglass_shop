import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/AuthProvider';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (admin && user?.email) ? children :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                >

                </Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;