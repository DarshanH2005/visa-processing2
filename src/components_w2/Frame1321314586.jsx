import React, { useState } from 'react';
import styles from './Frame1321314586.module.css';
import TrashIcon from '../assets/trash-red.svg';
import SubmitButton2 from './SubmitButton2';
import Frame1272628575 from './Frame1272628575';

const Frame1321314586 = () => {
  return (
    <div>
      <div className="_table_ywcap_29" role="table" aria-label="visa-table">
        <div className="_tableHeader_ywcap_39" role="rowgroup">
          <div className="_headerRow_ywcap_49" role="row">
            <div className="_colCountry_ywcap_105">Country</div>
            <div className="_colVisaType_ywcap_107">Visa Type</div>
            <div className="_colValidFrom_ywcap_109">Valid From</div>
            <div className="_colValidTo_ywcap_111">Valid To</div>
            <div className="_colEntries_ywcap_113">Entries</div>
            <div className="_colAction_ywcap_115">Action</div>
          </div>
        </div>

        <div className="_tableBody_ywcap_69" role="rowgroup">
          <div className="_row_ywcap_77" role="row">
            <div className="_colCountry_ywcap_105" role="cell">Somashree Nandy</div>
            <div className="_colVisaType_ywcap_107" role="cell">23517968</div>
            <div className="_colValidFrom_ywcap_109" role="cell">24-May-2025</div>
            <div className="_colValidTo_ywcap_111" role="cell">30-Jun-2025</div>
            <div className="_colEntries_ywcap_113" role="cell">Single</div>
            <div className="_colAction_ywcap_115" role="cell">
              <button className="_deleteBtn_ywcap_119" aria-label="Delete row 1">
                <img src={TrashIcon} alt="delete" width="16" height="17" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Comment input added above submit button */}
      <div style={{ marginTop: 12 }}>
        <Frame1272628575 />
      </div><br /><br />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
        <SubmitButton2 onClick={() => { /* placeholder action */ }} />
      </div>
    </div>
  );
};

export default Frame1321314586;
