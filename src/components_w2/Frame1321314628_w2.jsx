import React, { useState } from 'react';
import styles from './Frame1321314628.module.css';

const Frame1321314628_w2 = () => {
  const [comment, setComment] = useState('xxx-xxx-xx-xxx-x');

  return (
    <div className={styles.wrapper} aria-label="Frame 1321314628">
      <div className={styles.label}>Comment (Max 500 Chars)</div>
      <div className={styles.inputFrame}>
        <div className={styles.innerRow}>
          <textarea
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1321314628_w2;
