import React, { useState } from 'react';
import styles from './Frame1321314629.module.css';

export default function Frame1321314629() {
  // Initialize with the placeholder dates from the JSON (converted to yyyy-mm-dd)
  const [validityFrom, setValidityFrom] = useState('2025-05-24');
  const [validityTo, setValidityTo] = useState('2025-06-30');

  return (
    <div className={styles.container} aria-label="Frame 1321314629">
      <div className={styles.leftGroup}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="validityFrom">Validity From <span className="required-asterisk">*</span></label>
          <div className={styles.simpleInputFrame}>
            <input
              id="validityFrom"
              className={styles.simpleInput}
              type="date"
              value={validityFrom}
              onChange={(e) => setValidityFrom(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="validityTo">Validity To <span className="required-asterisk">*</span></label>
          <div className={styles.simpleInputFrame}>
            <input
              id="validityTo"
              className={styles.simpleInput}
              type="date"
              value={validityTo}
              onChange={(e) => setValidityTo(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
