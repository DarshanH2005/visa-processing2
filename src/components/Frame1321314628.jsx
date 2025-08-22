import React, { useState, useRef } from 'react';
import styles from './Frame1321314628.module.css';
import RichTextToolbar from './RichTextToolbar';

const Frame1321314628 = ({ showToolbar = true }) => {
  const [comment, setComment] = useState('xxx-xxx-xx-xxx-x');
  const textareaRef = useRef(null);

  const applyWrap = (beforeWrap, afterWrap = beforeWrap) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const before = comment.slice(0, start);
    const sel = comment.slice(start, end);
    const after = comment.slice(end);
    let newVal, newStart, newEnd;

    if (sel) {
      newVal = before + beforeWrap + sel + afterWrap + after;
      newStart = before.length;
      newEnd = newStart + (beforeWrap + sel + afterWrap).length;
    } else {
      // insert placeholder and position caret between wraps
      newVal = before + beforeWrap + afterWrap + after;
      newStart = before.length + beforeWrap.length;
      newEnd = newStart;
    }

    setComment(newVal);
    // restore selection after state update
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(newStart, newEnd);
    }, 0);
  };

  const applyLinePrefix = (prefix) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    // find line start
    const lineStart = comment.lastIndexOf('\n', start - 1) + 1;
    const before = comment.slice(0, lineStart);
    const rest = comment.slice(lineStart);
    const newVal = before + prefix + rest;
    const shift = prefix.length;
    setComment(newVal);
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(start + shift, end + shift);
    }, 0);
  };

  const handleAction = (action) => {
    switch (action) {
      case 'bold':
        applyWrap('**');
        break;
      case 'italic':
        applyWrap('*');
        break;
      case 'underline':
        applyWrap('<u>', '</u>');
        break;
      case 'strike':
        applyWrap('~~');
        break;
      case 'h1':
        applyLinePrefix('# ');
        break;
      case 'h2':
        applyLinePrefix('## ');
        break;
      case 'h3':
        applyLinePrefix('### ');
        break;
      case 'bullet':
        applyLinePrefix('- ');
        break;
      case 'number':
        applyLinePrefix('1. ');
        break;
      case 'quote':
        applyLinePrefix('> ');
        break;
      case 'code': {
        const ta = textareaRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const sel = comment.slice(start, end);
        if (sel.includes('\n')) {
          // block
          const newVal = comment.slice(0, start) + '``\n' + sel + '\n```' + comment.slice(end);
          setComment(newVal);
          setTimeout(() => {
            ta.focus();
            ta.setSelectionRange(start + 3, start + 3 + sel.length);
          }, 0);
        } else {
          applyWrap('`');
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className={styles.wrapper} aria-label="Frame 1321314628">
  <div className={styles.label}>Comment (Max 500 Chars)</div>
  {showToolbar && <RichTextToolbar onAction={handleAction} />}
      <div className={styles.inputFrame}>
        <div className={styles.innerRow}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1321314628;
