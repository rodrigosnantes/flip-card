import React from 'react';

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'

import './card.css';

export default function Card() {
    return (
        <div className="card">
            <div className="imgBox">
                <img src={img1} alt="family" />
                <img src={img2} alt="family" />
            </div>
            <div className="details">

                <div className="content">
                    <h2>Rodrigo Nantes <br></br> <span>Web Developer</span> </h2>
                    <div className="social-icons">
                        <a href="#">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>
                        <a href="">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}