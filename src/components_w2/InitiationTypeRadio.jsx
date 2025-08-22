import React, { useEffect, useState } from 'react';
import styles from './InitiationTypeRadio.module.css';

/**
 * InitiationTypeRadio Component
 * - Implements a simple initiation-type radio group with two options:
 *   "For Me" and "For My Reportee".
 * - Uses local state and calls onChange when selection changes.
 * - Accessible (role=radiogroup) and responsive.
 */
export default function InitiationTypeRadio({ initial = 'me', onChange }) {
  const [value, setValue] = useState(initial);

  useEffect(() => { setValue(initial); }, [initial]);
  useEffect(() => { if (typeof onChange === 'function') onChange(value); }, [value, onChange]);

  return (
  <div className={styles.container} data-scope="initiation" role="radiogroup" aria-label="Initiation Type">
      <label className={styles.option}>
        <input
          className={styles.radio}
          type="radio"
          name="initiation"
          value="me"
          checked={value === 'me'}
          onChange={() => setValue('me')}
        />
        <span className={styles.label}>For Me</span>
      </label>

      <label className={styles.option}>
        <input
          className={styles.radio}
          type="radio"
          name="initiation"
          value="reportee"
          checked={value === 'reportee'}
          onChange={() => setValue('reportee')}
        />
        <span className={styles.label}>For My Reportee</span>
      </label>
    </div>
  );
}
