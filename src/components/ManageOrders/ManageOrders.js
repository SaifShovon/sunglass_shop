import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';
const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    //const orderLinks = `http://localhost:5000/orders`;
    const orderLinks = `https://mysterious-gorge-96095.herokuapp.com/orders`;
    useEffect(() => {
        fetch(orderLinks)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //DElete an Order
    const handleDeleteOrder = id => {
        //const url = `http://localhost:5000/orders/${id}`;
        const url = `https://mysterious-gorge-96095.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully!!!')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders)
                }
            })
    }

    const handleApproveOrder = (id, status) => {
        //  const url = `http://localhost:5000/approve_orders/${id}`;
        const url = `https://mysterious-gorge-96095.herokuapp.com/approve_orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated');
                    const updatedOrders = orders.filter(function (obj) {
                        if (obj._id === id) {
                            obj.status = status;
                            return true;
                        }
                        return true;
                    });
                    setOrders(updatedOrders)
                }
                else {
                    alert('Not Updated');
                }
            })
    }

    return (
        <div>
            <Dashboard></Dashboard>
            <h3 className="bg-secondary py-3">Manage Orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Product Name</th>
                        <th>Shipping Address</th>
                        <th>Billing Address</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.date}</td>
                            <td>{order.product_name}</td>
                            <td>{order.shipping_address}</td>
                            <td>{order.billing_address}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            {order.status !== 'Shipped' ?
                                <td><button onClick={() => handleApproveOrder(order._id, 'Shipped')}>Ship</button></td> :
                                <td><button onClick={() => handleApproveOrder(order._id, 'Pending')}>Make Pending</button></td>
                            }
                            <td><button onClick={() => { if (window.confirm('Delete the item?')) { handleDeleteOrder(order._id) }; }}>X</button></td>


                        </tr>)
                    }


                </tbody>
            </Table>



        </div >
    );
};

export default ManageOrders;