import React from 'react';
import '../styles/RequiredInfo.css';
import RichTextToolbar from '../components/RichTextToolbar';

const RichTextBlock = ({ title, children }) => {
  return (
    <div className="worklet-richtext-section">
      <label className="worklet-richtext-label">{title}</label>
      <div className="worklet-richtext-editor">
        <RichTextToolbar onAction={() => { /* no-op */ }} />
        <div className="richtext-content">
          {children}
        </div>
        <div className="richtext-footer">
          <button className="design-btn">Design</button>
          <button className="html-btn">HTML</button>
        </div>
      </div>
    </div>
  );
};

export default RichTextBlock;
