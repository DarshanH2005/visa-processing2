import React, { useState } from 'react';
import styles from './Frame1272628575.module.css';

export default function Frame1272628575({ initial = '', onChange }) {
  const [value, setValue] = useState(initial);

  const handleChange = (e) => {
    const v = e.target.value;
    if (v.length <= 500) {
      setValue(v);
      if (typeof onChange === 'function') onChange(v);
    }
  };

  return (
    <div className={styles.container} aria-label="Frame 1272628575">
      <div className={styles.label}>Comment (Max 500 Chars)</div>
      <div className={styles.inputFrame}>
        <textarea
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          placeholder="xxx-xxx-xx-xxx-x"
          maxLength={500}
          aria-label="Comment"
        />
        <div className={styles.count} aria-hidden>{value.length}/500</div>
      </div>
    </div>
  );
}
