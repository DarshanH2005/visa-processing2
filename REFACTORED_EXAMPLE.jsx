import React, { useState } from 'react';
import { GenericInputField, GenericDateField } from './common';
import styles from './PersonalInfoFields.module.css';

const PersonalInfoFields = () => {
  const [fullName, setFullName] = useState('Manoj Kandan M');
  const [dob, setDob] = useState('2025-05-24');

  return (
    <div className={styles.container} aria-label="Personal Information">
      <GenericInputField 
        label="Full Name (As in Passport) *"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter full name as shown in passport"
      />

      <GenericDateField 
        label="Date of Birth *"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
  );
};

export default PersonalInfoFields;
