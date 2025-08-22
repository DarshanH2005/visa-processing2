import React, { useState } from "react";
import "../styles/RequiredInfo.css";
import Frame1321314631 from './Frame1321314631_w2';
import Frame1321314628 from './Frame1321314628_w2';
import Frame1272628366 from './Frame1272628366_w2';
import Group1321314573 from './Group1321314573_w2';
import ViewPolicies from './ViewPolicies_w2';
import ClipboardIcon from '../assets/clipboard-green-24x26.svg';
import RichTextBlock from './RichTextBlock_w2';
import UploadBox from './UploadBox_w2';
// DateStudentRow, TargetOutputSection, DataCollectionSection, CollegeProfessorRow, MentorArea
// removed per user request
import ActionButtons from './ActionButtons_w2';
import VisaForm from './VisaForm_w2';

const RequiredInfo = ({ onClick, className = "" }) => {
  const [title, setTitle] = useState('xxx-xxx-xx-xxx-x');

  return (
    <div className={`required-info-rectangle ${className}`}> 
      <div className="required-info-header">
        <span className="required-info-title">
          <img className="clipboard-icon" src={ClipboardIcon} width={24} height={26} alt="clipboard" />
          Required Information
        </span>
      </div>
  <div className="worklet-details-card">

  {/* Rich text sections removed per request */}
    {/* Date, Mentor, College/Professor, Data Collection and Target Output sections
      removed per user request. */}

    {/* Full width layout container */}
    <div className="form-sections-container">

          {/* Visa / Travel fields (matches Invitation & Visa Processing page) */}
          <VisaForm />

          <ActionButtons />
          <br />

          {/* Group 1321314573 - Transfer Workflow */}
          <div style={{ marginTop: 16 }}>
            <Group1321314573 />
          </div>
          <br /><br />
          <div style={{ marginTop: 8 }}>
            <ViewPolicies />
          </div>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;
