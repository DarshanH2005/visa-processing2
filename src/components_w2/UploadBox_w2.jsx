import React from 'react';
import Frame1272628366 from './Frame1272628366_w2';
import styles from './UploadBox_w2.module.css';
import uploadIcon from '../assets/icon-upload-22.svg';

const UploadBox = () => {
  return (
    <div className="worklet-upload-section">
      <div className="worklet-upload-label">Upload your Worklet Info</div>
      <div className={styles.uploadContainer} style={{ marginTop: 8 }}>
        <div className={styles.uploadInner}>
          

          <div className={styles.uploadContent}>
            <Frame1272628366 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBox;
