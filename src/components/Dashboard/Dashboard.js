import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
import './Dashboard.css';
const Header = () => {
    const { user, logout, admin } = useAuth();
    const history = useHistory();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand px-3"><Link to="/">Sunglass Shop</Link></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">

                        {user?.email && !admin && <React.Fragment>
                            <li className="nav-item">
                                <Link to="/pay">Pay</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myOrders">My Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addReview">Add Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">Profile</Link>
                            </li>
                        </React.Fragment>
                        }


                        {admin && <React.Fragment>
                            <li className="nav-item">
                                <Link to="/manageOrder">Manage Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/createAdmin">Create Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addProduct">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/manageProduct">Manage Product</Link>
                            </li>
                        </React.Fragment>

                        }
                        {user?.email &&
                            <li className="nav-item">
                                <span className="text-primary">{user.displayName}</span>
                            </li>
                        }
                        {user?.email &&
                            <li className="nav-item">
                                <button onClick={() => logout(history)} className="btn-small btn-primary" style={{ marginLeft: "10px" }}>Log Out</button>
                            </li>
                        }
                    </ul>
                </div>
            </nav >







        </div >
    );
};

export default Header;