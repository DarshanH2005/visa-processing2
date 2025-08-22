import React from 'react';
import '../styles/RequiredInfo.css';
import RichTextToolbar from './RichTextToolbar';

const RichTextBlock = ({ title, children, showToolbar = true }) => {
  return (
    <div className="worklet-richtext-section">
      <label className="worklet-richtext-label">{title}</label>
      <div className="worklet-richtext-editor">
  {showToolbar && <RichTextToolbar onAction={() => { /* no-op for now */ }} />}
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
