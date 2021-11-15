
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const ProductDetails = (props) => {
    const { product_id } = useParams();
    console.log(props.all_product);
    return (

        <div>
            <Header></Header>
            <h3 className="bg-secondary py-3 my-3">Service Details</h3>
            {

                props.all_product.filter(product => product._id === product_id).map(product =>
                    <Row className="px-5 py-3" key={product._id}>
                        <Col className="col-md-12 col-sm-12 py-3"><Card className="text-center">
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{product.short_description}</Card.Title>
                                <img
                                    className="d-block w-100"
                                    src={product.img}
                                    alt={product.name}
                                    style={{ height: '300px' }}
                                />
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    <b> Price:</b> {product.price}
                                </Card.Text>
                                <Link to={`/addOrder/${product._id}`}><Button variant="primary">Order Now</Button></Link>
                            </Card.Body>
                        </Card>
                        </Col>

                    </Row>
                )
            }
        </div>
    );
};

export default ProductDetails;