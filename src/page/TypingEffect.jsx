// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';

const TypingEffect = () => {
  const textElement = useRef(null);
  const strings = ["Freelancer", "Web Developer", "Frontend Developer"];
  let stringIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < strings[stringIndex].length) {
      textElement.current.textContent += strings[stringIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      setTimeout(erase, 1500);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      textElement.current.textContent = strings[stringIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 30);
    } else {
      stringIndex = (stringIndex + 1) % strings.length;
      setTimeout(type, 500);
    }
  };

  useEffect(() => {
    type();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={textElement} className="text"></div>;
};

export default TypingEffect;
