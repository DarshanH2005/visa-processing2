import React from 'react';

/**
 * Reusable Select Field Component
 * @param {string|React.Node} label - Field label
 * @param {Array} options - Array of option values or {value, label} objects
 * @param {string} value - Selected value
 * @param {Function} onChange - Callback when selection changes
 * @param {boolean} required - Whether field is required
 * @param {string} className - Additional CSS classes
 * @param {string} id - Select ID
 */
export const GenericSelectField = ({ 
  label, 
  options = [], 
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

  const renderOptions = () => {
    return options.map((option, index) => {
      if (typeof option === 'string') {
        return <option key={index} value={option}>{option}</option>;
      }
      return <option key={option.value || index} value={option.value}>{option.label}</option>;
    });
  };

  return (
    <div className={`field ${className}`.trim()}>
      <div className="label">
        {renderLabel()}
      </div>
      <div className="input-frame fc-inputFrame">
        <div className="left-content fc-leftContent">
          <select
            id={id}
            className="select fc-input"
            value={value}
            onChange={onChange}
            {...props}
          >
            {renderOptions()}
          </select>
        </div>
      </div>
    </div>
  );
};
