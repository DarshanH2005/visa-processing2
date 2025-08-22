import React, { useState } from 'react';
import styles from './PhoneNumberFields.module.css';

export default function Frame1321314582() {
  const [mobile, setMobile] = useState('');
  const [officeExt, setOfficeExt] = useState('');

  return (
    <div className={styles.container} role="group" aria-label="Contact numbers">
      <div className={styles.column}>
  <label className={styles.label} htmlFor="mobile">Mobile Number <span className="required-asterisk">*</span></label>
        <div className={styles.inputFrame}>
          <div className={styles.leftContent} aria-hidden>
            <div className={styles.textCursor}>
              {/* visible input text would go here; we render the input element below */}
            </div>
          </div>
          <input
            id="mobile"
            className={styles.input}
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="+91 7550142047"
            inputMode="tel"
            aria-required="true"
          />
          <div className={styles.rightContent} aria-hidden>
            {/* optional right addon / icon */}
          </div>
        </div>
      </div>

      <div className={styles.column}>
  <label className={styles.label} htmlFor="officeExt">Office Number (EXT no) <span className="required-asterisk">*</span></label>
        <div className={styles.inputFrame}>
          <div className={styles.leftContent} aria-hidden>
            <div className={styles.textCursor} />
          </div>
          <input
            id="officeExt"
            className={styles.input}
            type="text"
            value={officeExt}
            onChange={(e) => setOfficeExt(e.target.value)}
            placeholder="20-006"
            aria-required="true"
          />
          <div className={styles.rightContent} aria-hidden>
          </div>
        </div>
      </div>
    </div>
  );
}
