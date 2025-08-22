import React, { useState } from 'react';
import styles from './VisaEntryOptionsRadio.module.css';

export default function VisaEntryOptionsRadio() {
  const [entry, setEntry] = useState('single');
  const [holdingVisa, setHoldingVisa] = useState(null);

  return (
    <div className={styles.container} aria-label="No of Entry">
      <div className={styles.group}>
        <div className={styles.groupLabel}>No of Entry</div><br />
        <div className={styles.options}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="entry"
              value="single"
              checked={entry === 'single'}
              onChange={() => setEntry('single')}
            />
            <span className={styles.radioText}>Single</span>
          </label>

          <label className={styles.radio}>
            <input
              type="radio"
              name="entry"
              value="multiple"
              checked={entry === 'multiple'}
              onChange={() => setEntry('multiple')}
            />
            <span className={styles.radioTextMuted}>Multiple (3 years Validity)</span>
          </label>
        </div>
      </div>

      <div className={styles.group}>
        <div className={styles.groupLabel}>Are you Holding any Valid Visa</div><br />
        <div className={styles.options}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="holdingVisa"
              value="yes"
              checked={holdingVisa === true}
              onChange={() => setHoldingVisa(true)}
            />
            <span className={styles.radioText}>Yes</span>
          </label>

          <label className={styles.radio}>
            <input
              type="radio"
              name="holdingVisa"
              value="no"
              checked={holdingVisa === false}
              onChange={() => setHoldingVisa(false)}
            />
            <span className={styles.radioTextMuted}>No</span>
          </label>
        </div>
      </div>
    </div>
  );
}
