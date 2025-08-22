import React from 'react';
import styles from './Frame1272628366.module.css';
import DocPdf from '../assets/doc-pdf-48.svg';
import DownloadIcon from '../assets/download-28.svg';

const Frame1272628366 = ({
  fileName = 'xxx-xx-xxx-xxxx.pdf',
  datetime = '11 Sep, 2023 | 12:24pm',
  size = '13MB',
  onDownload,
}) => {
  return (
    <div className={styles.card} role="group" aria-label="Attachment">
      <div className={styles.fileType}>
        <img src={DocPdf} width={48} height={48} alt="pdf" />
      </div>
      <div className={styles.content}>
        <div className={styles.filename}>{fileName}</div>
        <div className={styles.meta}>
          <span>{datetime}</span>
          <span className={styles.dot} />
          <span className={styles.size}>{size}</span>
        </div>
      </div>
      <div className={styles.download}>
        <img src={DownloadIcon} width={28} height={28} alt="download" onClick={onDownload} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Frame1272628366;
