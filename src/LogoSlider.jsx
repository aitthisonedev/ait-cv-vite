// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSlider = ({ logos, linkTo }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 2000,
        // cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings} className="custom-logo-slider">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-slide">
                        <a href={linkTo} target="_blank" rel="noopener noreferrer">
                            <img src={logo} alt={`Logo ${index + 1}`} style={{ textTransform: 'none' }} />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Define prop types for LogoSlider component
LogoSlider.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string).isRequired, // Specify that 'logos' is an array of strings
    linkTo: PropTypes.string.isRequired // Specify that 'linkTo' is a string
};

export default LogoSlider;
