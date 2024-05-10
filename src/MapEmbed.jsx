// eslint-disable-next-line no-unused-vars
import React from "react";
const MapEmbed = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        padding: "30px",
        marginBottom: "10px",
        overflow: "hidden", // Ensures the inner content is clipped to this container
        borderRadius: "10px", // Applies border radius to the container
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: Adds shadow for better UI effect
      }}
    >
      <iframe
        className=""
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d893.242831797984!2d102.67291681018591!3d17.908229962344144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sth!2sla!4v1715333912900!5m2!1sth!2sla"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "10px",}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
