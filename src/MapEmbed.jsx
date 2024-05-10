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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.1036495707785!2d102.6729516422094!3d17.908359991671613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312465d4914ee76b%3A0xff00815ec6de840b!2z4Lqq4Lqw4LqW4Lqy4Lqa4Lqx4LqZ4LqB4Lqy4LqZ4LuA4LqH4Lq04LqZLeC6geC6suC6meC6muC6seC6meC6iuC6tSBBY2FkZW15IE9mIEZpbmFuY2UgYW5kIEFjY291bnRpbmc!5e1!3m2!1sth!2sla!4v1715359694169!5m2!1sth!2sla"
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