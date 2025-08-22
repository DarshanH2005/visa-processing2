import React from 'react';

/**
 * Reusable Radio Group Component
 * @param {string} name - Input name for radio group
 * @param {Array} options - Array of {value, label, muted} objects
 * @param {string} value - Currently selected value
 * @param {Function} onChange - Callback when selection changes
 * @param {string} label - Group label
 * @param {string} className - Additional CSS classes
 */
export const GenericRadioGroup = ({ 
  name, 
  options = [], 
  value, 
  onChange, 
  label,
  className = '',
  ariaLabel
}) => {
  return (
    <div className={className} role="radiogroup" aria-label={ariaLabel || label}>
      {label && <div className="group-label">{label}</div>}
      <div className="options">
        {options.map((option) => (
          <label key={option.value} className="radio">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange && onChange(option.value)}
            />
            <span className={option.muted ? "radio-text-muted" : "radio-text"}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
