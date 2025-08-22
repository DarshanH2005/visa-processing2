import React, { useState } from 'react';
import styles from './ContactInfoFields.module.css';

const Field = ({ label, children }) => (
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
    <div className={styles.inputFrame}><div className={styles.leftContent}>{children}</div></div>
  </div>
);

const Frame1321314581 = () => {
  const [state, setState] = useState('Karnataka');
  const [personalEmail, setPersonalEmail] = useState('Manojkandan20@gmail.com');
  const [officialEmail, setOfficialEmail] = useState('Manoj.kandan@partner.samsung.com');

  return (
    <div className={styles.container} aria-label="Frame 1321314581">
      <Field label={`State / Province / Region *`}>
        <select className={styles.select} value={state} onChange={(e) => setState(e.target.value)}>
          <option>Karnataka</option>
          <option>Delhi</option>
        </select>
      </Field>

      <Field label={`Email ID (Personal) *`}>
        <input className={styles.input} value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} />
      </Field>

      <Field label={`Email ID (Official) *`}>
        <input className={styles.input} value={officialEmail} onChange={(e) => setOfficialEmail(e.target.value)} />
      </Field>
    </div>
  );
};

export default Frame1321314581;
