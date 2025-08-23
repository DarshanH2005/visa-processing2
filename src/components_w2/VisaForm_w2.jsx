import React, { useState } from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import InitiationTypeRadio from './InitiationTypeRadio';
import Group1321314688 from './Group1321314688';
import PassportInfoFields from './PassportInfoFields';
import PersonalInfoFields from './PersonalInfoFields';
import AddressField from './AddressField';
import ContactInfoFields from './ContactInfoFields';
import PhoneNumberFields from './PhoneNumberFields';
import TravelInfoFields from './TravelInfoFields';
import Frame1321318109 from './Frame1321318109';
import VisaEntryOptionsRadio from './VisaEntryOptionsRadio';
import Frame1321314586 from './Frame1321314586';
import Frame1321314628 from './Frame1321314628';
import Frame1321314629 from './Frame1321314629';
import Frame1321314624 from './Frame1321314624';
import Tooltip from './Tooltip';

const Field = ({ label, required, children, className = '' }) => (
  <div className={`form-field ${className}`.trim()}>
    <label className="field-label">{label}{required ? <span className="required-asterisk">*</span> : null}</label>
    {children}
  </div>
);

const VisaForm = () => {
  const [showNote2, setShowNote2] = useState(false);
  return (
    <div className="visa-form">
      <div className="section-heading-with-note">
        <h3 className="section-heading">Initiation Type</h3>
        <div className="section-note">
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <Group1321314688
              onClick={() => setShowNote2(s => !s)}
              aria-pressed={showNote2}
              aria-label="Toggle note"
            />
            <Tooltip
              visible={showNote2}
              onClose={() => setShowNote2(false)}
              title="Note:"
              content={
                  `<ol style="padding-left:18px; margin:0 0 8px 0;"><li>To enter Valid Visa details, please click on the respective column of grid and enter or select values.</li><li>If having more than one visa, press keyboard TAB key on last column after value selection to have a new row.</li><li>Select Country first and proceed for next entries in order to retain entry.</li></ol><p style="margin:8px 0 0 0;"><strong>Press Enter or TAB key on the last column on value selection to confirm or save entry in the grid.</strong></p>`
                }
            />
          </div>
        </div>
      </div>
      <div className="row radio-row">
        <InitiationTypeRadio />
      </div>
<br />
      <h3 className="section-heading">Project Details</h3>
      <div className="row">
        <Field label="Project" required className="span-3 project-field">
          <div style={{ width: 720 }}>
            <select className="input select-input" style={{ width: '100%', maxWidth: '100%' }}>
              <option>IoT_Advanced_Features_(SRI_B)_Y2025</option>
            </select>
          </div>
        </Field>
        <br />
      </div>

      <h3 className="section-heading">Personal Information</h3>
  <PassportInfoFields />
  <div style={{ height: 12 }} />
  <PersonalInfoFields />
  <div style={{ height: 12 }} />
  <AddressField />
  <div style={{ height: 12 }} />
  <ContactInfoFields />
  <div style={{ height: 12 }} />
  <PhoneNumberFields />

  <div style={{ height: 16 }} /><br />
  <h3 className="section-heading">Travel Information</h3>
  <TravelInfoFields />
<br />
  <div style={{ height: 12 }} />
  <Frame1321318109 /><br />
  <div style={{ height: 12 }} />
  <VisaEntryOptionsRadio /><br />
  <div style={{ height: 12 }} />
  <Frame1321314624 />
  <br />

  

  {/* Removed Full Name, Date of Birth and Current Address fields per request */}

      {/* Removed remaining input sections (State/Emails/Mobile, Travel, Visa Information, New Visa Details)
          per request — keep Attachment and upload card below. */}

      
  {/* Removed New Visa Details and other inputs per request */}
  <Frame1321314628 />
    <div style={{ height: 12 }} />
    <Frame1321314629 />
  <div style={{ height: 18 }} />
  <br />
  <Frame1321314586 />
  <br />

    </div>
  );
};

export default VisaForm;
