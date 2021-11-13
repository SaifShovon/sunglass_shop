import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const productLinks = `https://mysterious-gorge-96095.herokuapp.com/products`;
    useEffect(() => {
        fetch(productLinks)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //DElete an Order
    const handleDeleteProduct = id => {
        const url = `https://mysterious-gorge-96095.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully!!!')
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts)
                }
            })
    }



    return (
        <div>
            <h3 className="bg-secondary py-3">Manage Orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Short Description</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.short_description}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/users/update/${product._id}`}>
                                    <button>Update</button>
                                </Link>
                            </td>
                            <td><button onClick={() => { if (window.confirm('Delete the Product?')) { handleDeleteProduct(product._id) }; }}>X</button></td>


                        </tr>)
                    }


                </tbody>
            </Table>



        </div >
    );
};

export default ManageProducts;