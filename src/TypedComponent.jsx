// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Freelancer", "Web Developer", "Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false, // Ensure the cursor is shown
//       cursorChar: '|', // Customize cursor character as needed
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div className="text" ref={el}></div>;
};

export default TypedComponent;
