import React, { useState, useRef } from "react";
import "../styles/RequiredInfo.css";
import Frame1321314631 from './Frame1321314631';
import Frame1321314628 from './Frame1321314628';
import Frame1272628366 from './Frame1272628366';
import Group1321314573 from './Group1321314573';
import ViewPolicies from './ViewPolicies';
import RichTextBlock from './RichTextBlock';
import SmallUpload_w1 from './SmallUpload_w1';
import DateStudentRow from './DateStudentRow';
import TargetOutputSection from './TargetOutputSection';
import DataCollectionSection from './DataCollectionSection';
import CollegeProfessorRow from './CollegeProfessorRow';
import MentorArea from './MentorArea';
import SubmitButton from './SubmitButton_w1';

const RequiredInfo = ({ onClick, className = "", showProblemToolbar = true, showCommentToolbar = true, hideControls = false }) => {
  const [title, setTitle] = useState('xxx-xxx-xx-xxx-x');
  const [mentorName, setMentorName] = useState('Ravindra');
  const rootRef = useRef(null);

  const validateAndSubmit = () => {
    const container = rootRef.current;
    if (!container) return;
    const selectors = 'input[type="text"], input[type="email"], input[type="number"], textarea, select';
    const fields = container.querySelectorAll(selectors);
    for (const f of fields) {
      if (f.disabled) continue;
      if (f.getAttribute && f.getAttribute('data-optional') === 'true') continue;
      const raw = f.value || '';
      const val = (typeof raw === 'string') ? raw.trim() : raw;
      if (!val || (typeof val === 'string' && val.toLowerCase().startsWith('xxx-'))) {
        // Try to get a label
        let label = null;
        if (f.id) label = container.querySelector(`label[for="${f.id}"]`);
        if (!label) {
          const ff = f.closest && f.closest('.form-field');
          if (ff) label = ff.querySelector('.field-label') || ff.querySelector('label');
        }
        const labelText = label ? label.textContent.replace(/\*/g, '').trim() : (f.placeholder || f.getAttribute('aria-label') || f.id || 'field');
        alert(`Please enter ${labelText}`);
        try { f.focus(); } catch (e) {}
        return;
      }
    }
    alert('Form validated — submitting...');
    console.log('Worklet1 submit');
  };

  return (
  <div ref={rootRef} className={`required-info-rectangle ${className}`} data-hide-controls={hideControls ? 'true' : 'false'}> 
      <div className="required-info-header">
        <span className="required-info-title">
          <svg className="clipboard-icon" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M2.66667 26C1.93333 26 1.30556 25.7454 0.783333 25.2362C0.261111 24.7271 0 24.115 0 23.4V5.2C0 4.485 0.261111 3.87292 0.783333 3.36375C1.30556 2.85458 1.93333 2.6 2.66667 2.6H8.26667C8.55556 1.82 9.03889 1.19167 9.71667 0.715C10.3944 0.238333 11.1556 0 12 0C12.8444 0 13.6056 0.238333 14.2833 0.715C14.9611 1.19167 15.4444 1.82 15.7333 2.6H21.3333C22.0667 2.6 22.6944 2.85458 23.2167 3.36375C23.7389 3.87292 24 4.485 24 5.2V23.4C24 24.115 23.7389 24.7271 23.2167 25.2362C22.6944 25.7454 22.0667 26 21.3333 26H2.66667ZM2.66667 23.4H21.3333V5.2H2.66667V23.4ZM5.33333 20.8H14.6667V18.2H5.33333V20.8ZM5.33333 15.6H18.6667V13H5.33333V15.6ZM5.33333 10.4H18.6667V7.8H5.33333V10.4ZM12 4.225C12.2889 4.225 12.5278 4.13292 12.7167 3.94875C12.9056 3.76458 13 3.53167 13 3.25C13 2.96833 12.9056 2.73542 12.7167 2.55125C12.5278 2.36708 12.2889 2.275 12 2.275C11.7111 2.275 11.4722 2.36708 11.2833 2.55125C11.0944 2.73542 11 2.96833 11 3.25C11 3.53167 11.0944 3.76458 11.2833 3.94875C11.4722 4.13292 11.7111 4.225 12 4.225Z" fill="#28303F" />
            </g>
          </svg>
          Required Information
        </span>
      </div>
      <div className="worklet-details-card">
        <div className="worklet-details-title">Prism Worklet Details</div>
  <SmallUpload_w1 onUpload={(file) => { console.log('Worklet1 uploaded file:', file); }} />
        <div className="worklet-title-section">
          <label className="worklet-title-label" htmlFor="worklet-title-input">Worklet Title <span className="required-asterisk">*</span></label>
          <input
            className="worklet-title-input"
            id="worklet-title-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Rich Text Editor Section */}
  <RichTextBlock showToolbar={showProblemToolbar} title={<>Problem Statement <span className="required-asterisk">*</span></>}>
          <h2>High quality rich text editor for the web</h2>
          <p>&lt;vaadin-rich-text-editor&gt; is a Web Component providing rich text editor functionality, part of the Vaadin components.</p>
          <p>It handles the following formatting:</p>
          <ul>
            <li>Bold</li>
            <li>Italic</li>
            <li>Underline</li>
            <li>Strike-through</li>
            <li>Headings (H1, H2, H3)</li>
            <li>Lists (ordered and unordered)</li>
          </ul>
        </RichTextBlock>

        {/* Additional Required Info: Expectations */}
  <RichTextBlock title={<>Expectations <span className="required-asterisk">*</span></>}>
          <p>Describe the expected outcomes, success criteria, and acceptance conditions.</p>
        </RichTextBlock>

        {/* Additional Required Info: Prerequisites */}
  <RichTextBlock title={<>Prerequisites <span className="required-asterisk">*</span></>}>
          <p>List any dependencies, data, or access required before this worklet can be executed.</p>
        </RichTextBlock>
        {/* Frame 1321314559 - Date and Student Fields Section */}
  <DateStudentRow />

        {/* Full width layout container */}
        <div className="form-sections-container">
          {/* Target Output Section */}
          <TargetOutputSection />
      <br />
          {/* Data Collection Involvement Section */}
          <DataCollectionSection />
          <br />

          {/* College and Professor Fields Row */}
          <CollegeProfessorRow />

          {/* Mentor Name Field */}
          <MentorArea showCommentToolbar={showCommentToolbar} mentorName={mentorName} setMentorName={setMentorName} hideControls={hideControls} />

          {/* Hide Submit area when hideControls is true */}
          {!hideControls && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ViewPolicies />
              </div>
              <div>
                <SubmitButton onClick={validateAndSubmit} />
              </div>
            </div>
          )}
          <br />

          {/* Group 1321314573 - Transfer Workflow (hidden for worklets that set hideControls) */}
          {!hideControls && (
            <div style={{ marginTop: 16 }}>
              <Group1321314573 />
            </div>
          )}
          <br /><br />
        </div>
      </div>
    </div>
  );
};export default RequiredInfo;
