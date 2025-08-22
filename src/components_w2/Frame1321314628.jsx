// Frame1321314628.js

import React, { useState } from 'react';

// All styles are now included directly in the component file.
// This removes the need for a separate .css file and fixes the compilation error.
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap', // Allows items to wrap to the next line on smaller screens
    gap: '24px',
    alignItems: 'start',
    width: '100%',
    boxSizing: 'border-box',
  },
  leftField: {
    flex: '1 1 300px', // Flexible grow/shrink, with a base width of 300px
    display: 'flex',
    flexDirection: 'column',
    minWidth: '250px', // Prevents it from becoming too narrow
  },
  rightField: {
  flex: '0 0 415px', // Does not grow or shrink, fixed width of 415px
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#0f172a',
    marginBottom: '8px',
  },
  inputFrame: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Updated background color
    border: '1px solid #e6eef3',
    borderRadius: '6px',
    minHeight: '48px',
    boxSizing: 'border-box',
    padding: '0 16px',
  },
  input: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '14px',
    color: '#202224',
    padding: '8px 0',
  },
};

// CSS for pseudo-selectors like ::placeholder cannot be inlined.
// This style tag is a common workaround to apply the placeholder color.
const placeholderStyle = `
  .custom-input::placeholder {
    color: #9aa3ad;
  }
`;

export default function Frame1321314628() {
  const [visaType, setVisaType] = useState('');
  const [dateOfIssue, setDateOfIssue] = useState('2025-05-24');

  return (
    <div>
      <style>{placeholderStyle}</style>
      <div style={styles.container}>
        
        {/* --- Left Column (Flexible Width) --- */}
        <div style={styles.leftField}>
          <label style={styles.label}>Type of Visa <span className="required-asterisk">*</span></label>
          <div style={styles.inputFrame} className="fc-inputFrame">
            <input
              style={styles.input}
              className="custom-input fc-input" // Class for placeholder styling
              placeholder="xxx-xxx-xx-x"
              spellCheck={false}
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
            />
          </div>
        </div>

        {/* --- Right Column (Fixed Width) --- */}
        <div style={styles.rightField}>
          <label style={styles.label}>Date of Issue <span className="required-asterisk">*</span></label>
          <div style={styles.inputFrame} className="fc-inputFrame">
            <input
              style={styles.input}
              className="custom-input fc-dateInput" // Class for placeholder styling
              type="date"
              value={dateOfIssue}
              onChange={(e) => setDateOfIssue(e.target.value)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
