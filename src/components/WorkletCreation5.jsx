import React from 'react';
import Navbar_w2 from '../components_w2/Navbar_w2';
import Avatars_w2 from '../components_w2/Avatars_w2';
import '../styles_w2/WorkletCreation4.override.css';

const WorkletCreation5 = () => {
  return (
    <>
      <Navbar_w2 />
      <div className="worklet3-scope" style={{ padding: 12 }}>
        {/* hideControls=true removes Transfer Workflow, Submit/Action buttons and comment textarea for Worklet5 */}
        <Avatars_w2 title={"Worklet Creation - Prism Head"} showAddMentor={true} hideControls={true} />
        <div style={{ marginTop: 12 }}>This is the WorkletCreation5 variant (copy of Worklet4).</div>
      </div>
    </>
  );
};

export default WorkletCreation5;
