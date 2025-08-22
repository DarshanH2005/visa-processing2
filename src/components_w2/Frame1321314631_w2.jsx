import React, { useState } from 'react';
import styles from './Frame1321314631.module.css';

// Small helper radio component
const Radio = ({ checked, onClick, id }) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      className={`${styles.radio} ${checked ? styles.checked : ''}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick();
        }
      }}
      aria-labelledby={id}
    >
      <span className={styles.radioInner} />
    </button>
  );
};

const Frame1321314631_w2 = ({ mentors = [] }) => {
  // default mentors if none provided
  const defaultMentors = mentors.length
    ? mentors
    : [
        { id: 'm1', name: 'Ravindra S R', email: 'Ravindra@partner.samsung.com' },
        { id: 'm2', name: 'Shabeer', email: 'Shabeer@partner.samsung.com' },
      ];

  const [items] = useState(defaultMentors);
  const [primaryId, setPrimaryId] = useState(items[0]?.id || null);

  return (
    <div className={styles.card} aria-label="Frame 1321314631">
      <div className={styles.headerBand}>
        <div className={styles.tableHeader}>
          <div className={styles.headerLabel}>Primary Mentor</div>
          <div className={styles.headerLabel}>Mentor Name</div>
          <div className={styles.headerLabel}>Knox ID</div>
        </div>
      </div>

      <div className={styles.rows} role="radiogroup" aria-label="Primary mentors">
        {items.map((m) => (
          <div key={m.id} className={styles.row}>
            <div className={styles.radioWrap}>
              <Radio id={`mentor-${m.id}`} checked={primaryId === m.id} onClick={() => setPrimaryId(m.id)} />
            </div>
            <div>
              <div className={styles.mentorName} id={`mentor-${m.id}`}>{m.name}</div>
            </div>
            <div>
              <div className={styles.mentorEmail}>{m.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frame1321314631_w2;

