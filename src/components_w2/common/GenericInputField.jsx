import React from 'react';

/**
 * Reusable Input Field Component
 * @param {string|React.Node} label - Field label (can include required asterisk)
 * @param {string} type - Input type (text, email, tel, etc.)
 * @param {string} value - Input value
 * @param {Function} onChange - Callback when value changes
 * @param {boolean} required - Whether field is required
 * @param {string} placeholder - Input placeholder text
 * @param {string} className - Additional CSS classes
 * @param {string} id - Input ID
 */
export const GenericInputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  placeholder = '',
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
            className="input fc-input"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};
