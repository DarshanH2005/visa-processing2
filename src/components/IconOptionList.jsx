import React from 'react';
import styles from '../components/IconOptionList.module.css';
import ICONS from '../assets/optionIcons';

// Simple list component that renders icon + label and calls onSelect when clicked.
export default function IconOptionList({ options = [], onSelect = () => {}, activeIndex = -1 }) {
  return (
    <div className={styles.list} role="list">
      {options.map((opt, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <button
            key={i}
            type="button"
            role="listitem"
            className={`${styles.item} ${i === activeIndex ? styles.active : ''}`}
            onClick={() => onSelect(opt, i)}
          >
            <span className={styles.icon}><Icon /></span>
            <span className={styles.label}>{opt.label || opt}</span>
          </button>
        );
      })}
    </div>
  );
}
