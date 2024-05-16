// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const MapEmbed = () => {
  const [style, setStyle] = useState({
    width: "100%",
    height: "400px",
    padding: "30px",
    marginBottom: "0px",
    overflow: "hidden", // Ensures the inner content is clipped to this container
    borderRadius: "10px", // Applies border radius to the container
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adds shadow for better UI effect
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setStyle((prevStyle) => ({
          ...prevStyle,
          padding: "10px",
        }));
      } else {
        setStyle((prevStyle) => ({
          ...prevStyle,
          padding: "30px",
        }));
      }
    };

    // Set initial style based on current window size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={style}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1148.0970422319258!2d102.6723962696184!3d17.908536275068457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU0JzMwLjciTiAxMDLCsDQwJzIyLjkiRQ!5e1!3m2!1sen!2sla!4v1715830517605!5m2!1sen!2sla"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
