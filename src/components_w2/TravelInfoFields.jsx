import React, { useState } from 'react';
import styles from './TravelInfoFields.module.css';

const Field = ({ label, children, className = '' }) => (
  <div className={`${styles.field} ${className}`.trim()}>
    <div className={styles.label}>{label}</div>
    <div className={styles.inputFrame}>{children}</div>
  </div>
);

export default function TravelInfoFields() {
  const [place, setPlace] = useState('United State (Zone B)');
  const [purpose, setPurpose] = useState('');
  const [fromDate, setFromDate] = useState('2025-05-24');
  const [toDate, setToDate] = useState('2025-06-30');

  return (
    <div className={styles.container} aria-label="Travel Information">
      <Field label={<>Place to Travel <span className="required-asterisk">*</span></>}>
        <select className={styles.select} value={place} onChange={(e) => setPlace(e.target.value)}>
          <option>United State (Zone B)</option>
          <option>United Kingdom</option>
          <option>Germany</option>
        </select>
      </Field>

      <Field label={<>Purpose of Travel <span className="required-asterisk">*</span></>} className={styles.span2}>
        <input
          className={styles.input}
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="Enter purpose of travel"
        />
      </Field>

  <Field label={<>From <span className="required-asterisk">*</span></>}>
        <input
          type="date"
          className={styles.input}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </Field>

  <Field label={<>To <span className="required-asterisk">*</span></>}>
        <input
          type="date"
          className={styles.input}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </Field>
    </div>
  );
}
