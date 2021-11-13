import React from 'react';
import { Card } from 'react-bootstrap';

const About = (props) => {
    const all_product = props.all_product
    return (
        <div>
            <h3 className="bg-secondary py-3">About Us</h3>
            <Card className="text-center" >
                {all_product.map(product =>
                    <div key={product.id}>
                        <Card.Header as="h3"> {product.short_description}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                    </div >
                )}

            </Card>


        </div >
    );
};

export default About;