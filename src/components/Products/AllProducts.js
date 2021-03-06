import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Products from './Products';
import Header from '../Header/Header';
const AllProducts = (props) => {
    const all_product = props.all_product;
    const isLoading = props.isLoading;
    if (isLoading) {
        return <div><Spinner animation="border" variant="primary" /></div>;
    }
    return (
        <React.Fragment>
            <Header></Header>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">All Products</h3>
                {all_product.map((product, key) =>
                    //All Items
                    <Products key={product._id} product={product}></Products>

                )}

            </Row>
        </React.Fragment>

    );
};

export default AllProducts;