import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider1 from '../../../../src/slider/1.jpg';
import slider2 from '../../../../src/slider/2.jpg';
import slider3 from '../../../../src/slider/3.jpg';
const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">We Produce Best Product for you</p>
                        <Link to="/exploreMore"><button type="button" class="btn btn-primary btn-lg">Explore More</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">Always Improving our Quality</p>
                        <Link to="/exploreMore"><button type="button" class="btn btn-primary btn-lg">Explore More</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <p className="text-primary">Stay with us for very Best Services</p>
                        <Link to="/exploreMore"><button type="button" class="btn btn-primary btn-lg">Explore More</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;