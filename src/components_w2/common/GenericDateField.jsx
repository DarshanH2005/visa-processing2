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

  return (
    <div className={`field ${className}`.trim()}>
      <div className="label">
        {renderLabel()}
      </div>
      <div className="input-frame fc-inputFrame">
        <div className="left-content fc-leftContent">
          <input
            id={id}
            className="date-input fc-dateInput"
            type="date"
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};
