/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

const TypedComponent = () => {
  const el = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('Typed.Freelancer'), t('Typed.Developer'), t('Typed.Frontend')],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false, // Ensure the cursor is shown
      cursorChar: '|', // Customize cursor character as needed
    });

    return () => {
      typed.destroy();
    };
  }, [t]); // Re-run the effect if the translation function changes

  return <div className="text" ref={el}></div>;
};

export default TypedComponent;