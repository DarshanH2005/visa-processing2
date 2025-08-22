import React, { useState } from 'react';
import RequiredInfo from './RequiredInfo';
import WorkletCreation2 from './WorkletCreation2';
import '../styles/RequiredInfo.css';

const WorkletSwitcher = () => {
  const [page, setPage] = useState('workletcreation');

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <button
          onClick={() => setPage('workletcreation')}
          style={{
            padding: '8px 12px',
            borderRadius: 6,
            border: page === 'workletcreation' ? '2px solid #0b5cff' : '1px solid #cbd5e1',
            background: page === 'workletcreation' ? '#eef2ff' : '#fff',
            cursor: 'pointer'
          }}
        >
          WorkletCreation
        </button>

        <button
          onClick={() => setPage('workletcreation2')}
          style={{
            padding: '8px 12px',
            borderRadius: 6,
            border: page === 'workletcreation2' ? '2px solid #0b5cff' : '1px solid #cbd5e1',
            background: page === 'workletcreation2' ? '#eef2ff' : '#fff',
            cursor: 'pointer'
          }}
        >
          WorkletCreation2
        </button>
      </div>

      <div>
        {page === 'workletcreation' ? (
          <RequiredInfo />
        ) : (
          <WorkletCreation2 />
        )}
      </div>
    </div>
  );
};

export default WorkletSwitcher;
