import React from 'react';

const TargetOutputSection = () => {
  return (
    <div className="target-output-section"><br />
      <div className="section-label">Target Output</div><br />
      <div className="checkbox-grid-layout">
        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          <span>Paper Publication</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Patent</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Internal Commercialization</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>External Commercialization</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Data Collection</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>User Experience/User Interface</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Research Based</span>
        </label>
      </div><br />
      <div className="location-field">
        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          <span>Ideation</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>POC</span>
        </label>
      </div>
    </div>
  );
};

export default TargetOutputSection;
