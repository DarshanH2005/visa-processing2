import React from 'react';
import styles from './SubmitButton2.module.css';

export default function SubmitButton2({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick} aria-label="Submit">
      <span className={styles.text}>Submit</span>
    </button>
  );
}
