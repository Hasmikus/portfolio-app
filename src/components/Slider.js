import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay>
                <div>
                    <img src="/assets/images/home/1.jpg" />
                </div>
                <div>
                    <img src="/assets/images/home/slide-1.jpg" />
                </div>
                <div>
                    <img src="/assets/images/home/slide-2.jpg" />
                </div>
            </Carousel>
        );
    }
};

export { Slider };
