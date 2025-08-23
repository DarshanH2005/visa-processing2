import React, { useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.css';

/**
 * Tooltip
 * Props:
 * - title: string
 * - content: string (supports line-breaks)
 * - visible: boolean (controlled)
 * - defaultVisible: boolean (uncontrolled initial)
 * - onClose: function
 */
export default function Tooltip({
  title = 'Note:',
  content = `To enter Valid Visa details, please click on the respective column of grid and enter or select values.\u2028If having more than one visa, press keyboard TAB key on last column after value selection to have a new row.\u2028Select Country first and proceed for next entries in order to retain entry.\u2028Press Enter or TAB key on the last column on value selection to confirm or save entry in the grid.`,
  visible: controlledVisible,
  defaultVisible = false,
  onClose,
  className = '',
  ignoreClickSelector = '[data-note-trigger]',
}) {
  const [visible, setVisible] = useState(typeof controlledVisible === 'boolean' ? controlledVisible : defaultVisible);
  const rootRef = useRef(null);
  const openedAtRef = useRef(0);
  const attachTimerRef = useRef(null);

  useEffect(() => {
    if (typeof controlledVisible === 'boolean') setVisible(controlledVisible);
  }, [controlledVisible]);

  useEffect(() => {
    function onDocClick(e) {
      // ignore clicks that happen immediately after opening (these are usually the opening clicks)
      if (Date.now() - openedAtRef.current < 50) return;
      // ignore clicks that originate from known trigger elements so two triggers on the page don't fight
      try {
        if (ignoreClickSelector && e.target && typeof e.target.closest === 'function') {
          const hit = e.target.closest(ignoreClickSelector);
          if (hit) return;
        }
      } catch (err) {
        // ignore
      }
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        if (typeof controlledVisible === 'boolean') {
          if (onClose) onClose();
        } else {
          setVisible(false);
          if (onClose) onClose();
        }
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        if (typeof controlledVisible === 'boolean') {
          if (onClose) onClose();
        } else {
          setVisible(false);
          if (onClose) onClose();
        }
      }
    }
    if (visible) {
      openedAtRef.current = Date.now();
      // attach listeners on next tick so the opening click doesn't close the tooltip
      attachTimerRef.current = setTimeout(() => {
        document.addEventListener('click', onDocClick);
        document.addEventListener('keydown', onKey);
      }, 0);
    }
    return () => {
      if (attachTimerRef.current) {
        clearTimeout(attachTimerRef.current);
        attachTimerRef.current = null;
      }
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [visible, controlledVisible, onClose]);

  if (!visible) return null;

  return (
    <div className={`${styles.tooltip} ${className}`} role="dialog" aria-label={title} ref={rootRef}>
      <div className={styles.beakStroke} aria-hidden="true" />
      <div className={styles.beak} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: content.replace(/\u2028/g, '<br/>') }} />
      </div>
    </div>
  );
}
