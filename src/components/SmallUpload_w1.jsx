import React, { useRef, useState } from 'react';
import styles from './SmallUpload_w1.module.css';
import CloudIcon from '../assets/icon-cloud-upload.svg';
import CircleBg from '../assets/circle-48.svg';
import UploadIcon from '../assets/icon-upload-22.svg';

const MAX_SIZE = 3 * 1024 * 1024; // 3MB

export default function SmallUpload_w1({ onUpload }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFile = (f) => {
    if (!f) return;
    if (f.size > MAX_SIZE) {
      setError('File exceeds 3MB');
      setFile(null);
      return;
    }
    setFile(f);
    setError('');
    if (onUpload) onUpload(f);
  };

  const onInputChange = (e) => {
    const f = e.target.files && e.target.files[0];
    handleFile(f);
  };

  const onUploadClick = () => {
    inputRef.current && inputRef.current.click();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(f);
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div className={styles.container} onDrop={onDrop} onDragOver={onDragOver}>
      <div className={styles.left}>
        <div className={styles.iconWrap} aria-hidden>
          <img src={CircleBg} className={styles.circle} alt="" />
          <div style={{ position: 'absolute' }}>
            <img src={UploadIcon} alt="upload icon" />
          </div>
        </div>

        <div className={styles.textBlock}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className={styles.title}>{file ? file.name : 'Upload Document'}</p>
            {file && <span className={styles.fileName}>{(file.size / 1024).toFixed(0)} KB</span>}
          </div>

          <div className={styles.meta}>
            <span>PPT format</span>
            <span className={styles.dot} />
            <span>Max. 3MB</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.btnLarge} onClick={onUploadClick} aria-label="Upload with icon">
          <img src={CloudIcon} className={styles.iconSmall} alt="icon" />
          <span>Upload</span>
        </button>

        <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={onInputChange} />
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
