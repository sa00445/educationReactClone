import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Navbar } from './Navbar.component';
import './banner.styles.css'

export class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel>
                    <div className="banner">
                        <img alt="classroom1" src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                <Navbar />
                <Navbar />
                <Navbar />
            </div>
        );
    }
};