import React, { useState } from 'react';
import styles from './AddressField.module.css';

const Frame1321314558 = () => {
  const [address, setAddress] = useState('');

  return (
    <div className={styles.container} aria-label="Frame 1321314558">
      <div className={styles.field}>
  <div className={styles.label}>Current Address <span className="required-asterisk">*</span></div>
        <div className={styles.inputFrame}>
          <div className={styles.leftContent}>
            <input className={styles.input} placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1321314558;
