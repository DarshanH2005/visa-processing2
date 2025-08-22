import React from 'react';
import styles from './RichTextToolbar.module.css';
import ICONS from '../assets/optionIcons';

// Buttons correspond to the original toolbar in order:
// B, I, U, S, H1, H2, H3, bullet, number, quote, code
const BUTTONS = [
  { key: 'bold', label: 'Bold' },
  { key: 'italic', label: 'Italic' },
  { key: 'underline', label: 'Underline' },
  { key: 'strike', label: 'Strike' },
  { key: 'h1', label: 'H1' },
  { key: 'h2', label: 'H2' },
  { key: 'h3', label: 'H3' },
  { key: 'bullet', label: 'Bulleted list' },
  { key: 'number', label: 'Numbered list' },
  { key: 'quote', label: 'Quote' },
  { key: 'code', label: 'Code' }
];

export default function RichTextToolbar({ onAction = () => {}, className = '' }) {
  return (
    <div className={`${styles.toolbar} ${className}`} role="toolbar" aria-label="Rich text formatting">
      {BUTTONS.map((btn, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <button
            key={btn.key}
            type="button"
            className={styles.btn}
            aria-label={btn.label}
            onClick={() => onAction(btn.key)}
          >
            <span className={styles.icon}><Icon /></span>
          </button>
        );
      })}
    </div>
  );
}
