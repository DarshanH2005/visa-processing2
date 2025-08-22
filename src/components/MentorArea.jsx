import React from 'react';
import Frame1321314631 from './Frame1321314631';
import Frame1321314628 from './Frame1321314628';
import Button from './Button';

const MentorArea = ({ showCommentToolbar = true, mentorName = '', setMentorName = () => {}, hideControls = false }) => {
  return (
    <>
      <div className="mentor-section">
        <div className="form-field" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'stretch', width: '100%', maxWidth: '640px' }}>
          <label className="field-label">Mentor Name <span className="required-asterisk">*</span></label>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: '60%' }}>
            <input
              type="text"
              className="text-input"
              value={mentorName}
              onChange={(e) => setMentorName(e.target.value)}
              style={{ flex: 1 }}
            />
            <div>
              <Button onClick={() => console.log('Add Mentor clicked')}>Add Mentor</Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <Frame1321314631 />
      </div>
      {/* Comment textarea hidden for worklets with hideControls */}
      {!hideControls && (
        <div style={{ marginTop: 12 }}>
          <Frame1321314628 showToolbar={showCommentToolbar} />
        </div>
      )}
    </>
  );
};

export default MentorArea;
