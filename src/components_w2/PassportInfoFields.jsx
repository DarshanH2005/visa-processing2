import React from 'react';
import styles from './PassportInfoFields.module.css';

const InputField = ({ label, children }) => (
  <div className={styles.field}>
    <div className={styles.label}>
      {typeof label === 'string' ? (
        label.split(/\*/).reduce((acc, part, idx, arr) => {
          acc.push(<span key={`t-${idx}`}>{part}</span>);
          if (idx < arr.length - 1) acc.push(<span key={`s-${idx}`} className="required-asterisk">*</span>);
          return acc;
        }, [])
      ) : label}
    </div>
    <div className={styles.inputFrame}>
      <div className={styles.leftContent}>
        {children}
      </div>
    </div>
  </div>
);

const PassportInfoFields = () => {
  return (
    <div className={styles.container} aria-label="Passport Information">
      <InputField label={`Passport Number *`}>
        <input className={styles.input} placeholder="3532242424244" />
      </InputField>

      <InputField label={`Date of Issue *`}>
        <input className={styles.dateInput} type="date" />
      </InputField>

      <InputField label={`Date of Expiry *`}>
        <input className={styles.dateInput} type="date" />
      </InputField>
    </div>
  );
};

export default PassportInfoFields;
