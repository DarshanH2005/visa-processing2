import React, { useState } from 'react';
import styles from './SubmitButton_w1.module.css';

const SubmitButton = ({ onClick, children = 'Submit' }) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = (e) => {
    setPressed(true);
    onClick && onClick(e);
    setTimeout(() => setPressed(false), 150);
  };

  return (
    <button
      type="button"
      className={`${styles.btn} ${pressed ? styles.pressed : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
