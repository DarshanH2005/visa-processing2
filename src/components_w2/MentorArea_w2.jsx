import React from 'react';
import Frame1321314631 from './Frame1321314631_w2';
import Frame1321314628 from './Frame1321314628_w2';

const MentorArea = () => {
  return (
    <>
      <div className="mentor-section">
        <div className="form-field">
          <label className="field-label">Mentor Name <span className="required-asterisk">*</span></label>
          <input
            type="text"
            className="text-input"
            defaultValue="Ravindra"
          />
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Frame1321314631 />
      </div>
      <div style={{ marginTop: 12 }}>
        <Frame1321314628 />
      </div>
    </>
  );
};

export default MentorArea;
