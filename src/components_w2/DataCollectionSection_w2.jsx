import React from 'react';

const DataCollectionSection = () => {
  return (
    <div className="data-collection-section">
      <div className="section-label">Data Collection Involvement</div>
      <div className="checkbox-row">
        <label className="checkbox-item">
          <input type="checkbox" defaultChecked />
          <span>Self Collected</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Open Source</span>
        </label>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span>Not Applicable</span>
        </label>
      </div>
    </div>
  );
};

export default DataCollectionSection;
