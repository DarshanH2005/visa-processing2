import React, { useState } from 'react';
import styles from './ViewPolicies.module.css';
import poliIcon from '../assets/poli.svg';

const ViewPolicies = ({ onClick }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((v) => !v);
    onClick && onClick();
  };

  return (
    <div
      className={[styles.wrapper, active ? styles.active : ''].filter(Boolean).join(' ')}
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
      aria-pressed={active}
    >
      <div className={styles.iconWrap}>
        <img src={poliIcon} alt="policies" style={{ width: 20, height: 20 }} />
      </div>
      <div className={styles.text}>View Policies</div>
    </div>
  );
};

export default ViewPolicies;
