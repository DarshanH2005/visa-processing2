import React, { useState } from 'react';
import styles from './NewVisaDetailsSection.module.css';

const NewVisaDetailsSection = () => {
  const [date, setDate] = useState('2025-05-24');
  const [visaObtained, setVisaObtained] = useState('yes');

  return (
    <div>
  <h3 className={styles.sectionTitle}>New Visa Details</h3>
      <div className={styles.container}>
      <div className={styles.left}>
  <label className={styles.label}>Document Submitted On <span className="required-asterisk">*</span></label>
        <div className="_inputFrame_j8q6v_41">
          <div className="_leftContent_j8q6v_69">
            <input
              id="document-submitted-on"
              className="_dateInput_j8q6v_101"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.title}>Visa Obtained</div>
        <div className={styles.radios} role="radiogroup" aria-label="visa-obtained">
          <label className={styles.radio}>
            <input
              type="radio"
              name="visaObtained"
              value="yes"
              checked={visaObtained === 'yes'}
              onChange={() => setVisaObtained('yes')}
            />
            <span className={styles.radioText}>Yes</span>
          </label>

          <label className={styles.radio}>
            <input
              type="radio"
              name="visaObtained"
              value="no"
              checked={visaObtained === 'no'}
              onChange={() => setVisaObtained('no')}
            />
            <span className={styles.radioTextMuted}>No</span>
          </label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewVisaDetailsSection;
