import React, { useState } from 'react';
import styles from './Frame1321314624.module.css';
import '../styles/formControls.css';

const LabeledInput = ({ label, value, onChange, placeholder, id, compact = false, type = 'text' }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {compact ? (
        <div className={styles.compactFrame}>
          <div className={styles.compactLeftContent}>
            <input id={id} className={styles.dateInput} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
          </div>
        </div>
      ) : (
        <div className={`${styles.inputWrapper} fc-inputFrame`}>
          <div className={`fc-leftContent ${styles.leftContent}`}>
            {/* Icon-left placeholder (hidden by default in design) */}
            <div aria-hidden className="icon-left" style={{ width: 20, height: 20 }} />
            <input
              id={id}
              className="fc-input fc-dateInput"
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              style={{ border: 'none', background: 'transparent', padding: 0 }}
            />
          </div>
          <div className="fc-rightContent" aria-hidden>
            <div className={styles.placeholder}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Frame1321314624({
  initial = {
    country: 'United State (Zone B)',
    visaType: 'Business',
    entries: 'Single',
  },
  onChange,
}) {
  const [country, setCountry] = useState(initial.country);
  const [visaType, setVisaType] = useState(initial.visaType);
  const [entries, setEntries] = useState(initial.entries);

  // Notify parent on change if callback provided
  React.useEffect(() => {
    if (typeof onChange === 'function') {
      onChange({ country, visaType, entries });
    }
  }, [country, visaType, entries, onChange]);

  return (
    <div className={styles.container} aria-label="Frame 1321314624">
      <LabeledInput id="country" label={"Country *"} value={country} onChange={setCountry} placeholder={"United State (Zone B)"} />
      <LabeledInput id="visaType" label={"Visa Type *"} value={visaType} onChange={setVisaType} placeholder={"Business"} />
      <LabeledInput id="entries" label={"Entries *"} value={entries} onChange={setEntries} placeholder={"Single"} />
    </div>
  );
}
