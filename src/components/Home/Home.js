import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Products from '../Products/Products';
import Header from '../Header/Header';
import Slider from './Slider/Slider';
import HappyCustomer from './HappyCustomer/HappyCustomer';
import Subscribe from './Subscribe/Subscribe';
import ReviewRating from './ReviewRating/ReviewRating';
import { Link } from 'react-router-dom';
const Home = (props) => {
    const all_product = props.all_product;
    const isLoading = props.isLoading;
    if (isLoading) {
        return <div><Spinner animation="border" variant="primary" /></div>;
    }

    return (
        <div>

            <Header></Header>
            <Slider></Slider>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Our Products</h3>
                {all_product.map((product, key) =>
                    //Limit to 6 Items
                    (key <= 5) &&
                    <Products key={product._id} product={product}></Products>

                )}
                <Link to="/exploreMore"><button type="button" class="btn btn-primary btn-lg">Explore More Products</button></Link>
            </Row>

            <ReviewRating></ReviewRating>
            <HappyCustomer></HappyCustomer>
            <Subscribe></Subscribe>

        </div >
    );
};

export default Home;