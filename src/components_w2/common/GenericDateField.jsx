import React from 'react';

/**
 * Reusable Date Input Field Component
 * @param {string|React.Node} label - Field label
 * @param {string} value - Date value (YYYY-MM-DD format)
 * @param {Function} onChange - Callback when date changes
 * @param {boolean} required - Whether field is required
 * @param {string} className - Additional CSS classes
 * @param {string} id - Input ID
 */
export const GenericDateField = ({ 
  label, 
  value, 
  onChange, 
  required = false,
  className = '',
  id,
  ...props
}) => {
  const renderLabel = () => {
    if (typeof label === 'string') {
      // Split by asterisk and add required spans
      return label.split(/\*/).reduce((acc, part, idx, arr) => {
        acc.push(<span key={`t-${idx}`}>{part}</span>);
        if (idx < arr.length - 1) {
          acc.push(<span key={`s-${idx}`} className="required-asterisk">*</span>);
        }
        return acc;
      }, []);
    }
    return label;
  };

  const fallbackStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#ffffff',
    border: '1px solid #d0d5dd',
    borderRadius: 6,
    padding: '8px 10px',
    height: 40,
    boxSizing: 'border-box',
    width: '100%',
  };

  const inputStyle = { border: 'none', outline: 'none', background: 'transparent', fontSize: 14, width: '100%', height: '100%', padding: '0 4px', boxSizing: 'border-box' };

  return (
    <div className={`field ${className}`.trim()}>
      <div className="label">
        {renderLabel()}
      </div>
      <div className="simple-input-frame" style={fallbackStyle}>
        <input
          id={id}
          className="simple-input"
          type="date"
          value={value}
          onChange={onChange}
          style={inputStyle}
          {...props}
        />
      </div>
    </div>
  );
};
