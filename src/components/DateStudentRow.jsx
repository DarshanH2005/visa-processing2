import React from 'react';
import CalendarIcon from '../components_w2/CalendarIcon_w2';

const DateStudentRow = () => {
  return (
    <div className="worklet-form-fields">
      <div className="form-field">
  <label className="field-label">Start Date <span className="required-asterisk">*</span></label>
        <div className="date-input-wrapper" style={{ position: 'relative', display: 'block' }}>
          <input
            type="text"
            className="date-input"
            defaultValue="24-May-2025"
            placeholder="24-May-2025"
            style={{ width: '100%', paddingRight: 44 }}
          />
          <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }} aria-hidden>
            <CalendarIcon />
          </div>
        </div>
      </div>

      <div className="form-field">
  <label className="field-label">End Date <span className="required-asterisk">*</span></label>
        <div className="date-input-wrapper" style={{ position: 'relative', display: 'block' }}>
          <input
            type="text"
            className="date-input"
            defaultValue="24-May-2025"
            placeholder="24-May-2025"
            style={{ width: '100%', paddingRight: 44 }}
          />
          <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }} aria-hidden>
            <CalendarIcon />
          </div>
        </div>
      </div>

      <div className="form-field">
  <label className="field-label">Number of Students <span className="required-asterisk">*</span></label>
        <select className="select-input" defaultValue="5">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>
  );
};

export default DateStudentRow;
