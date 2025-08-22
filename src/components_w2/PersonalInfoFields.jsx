import React, { useState } from 'react';
import styles from './PersonalInfoFields.module.css';

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
      <div className={styles.leftContent}>{children}</div>
    </div>
  </div>
);

const PersonalInfoFields = () => {
  const [fullName, setFullName] = useState('Manoj Kandan M');
  const [dob, setDob] = useState('2025-05-24');

  return (
    <div className={styles.container} aria-label="Personal Information">
      <InputField label={`Full Name (As in Passport)  *`}>
        <input className={styles.input} value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </InputField>

      <InputField label={`Date of Birth *`}>
        <input className={styles.dateInput} type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </InputField>
    </div>
  );
};

export default PersonalInfoFields;
