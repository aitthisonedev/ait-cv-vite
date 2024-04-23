// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Slideshow.css'
// Sample array of images
const images = [
    "https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg", // Replace with actual URLs of your certificates
    "https://images.template.net/297220/Certificate-Design-Template-edit-online-2.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg", // Replace with actual URLs of your certificates
    "https://images.template.net/297220/Certificate-Design-Template-edit-online-2.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    // Function to go to the next image
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Automatic transition every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change interval here as needed
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);

    return (
        <div className="slideshow">
            <button onClick={prevSlide}>Prev</button>
            {images.map((image, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={image} alt={`Certificate ${index + 1}`} />
                    )}
                </div>
            ))}
            <button onClick={nextSlide}>Next</button>
        </div>
    );
}

export default Slideshow;
