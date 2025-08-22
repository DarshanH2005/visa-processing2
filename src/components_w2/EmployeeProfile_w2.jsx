import React from 'react';
import '../styles/EmployeeProfile.css';
import Avatar_w2 from './Avatar_w2';
import UserInfo_w2 from './UserInfo_w2';
import ProfileCard_w2 from './ProfileCard_w2';

const EmployeeProfile_w2 = ({
  employee,
  onAvatarClick,
  onNameClick,
  onEmailClick,
  onDesignationClick,
  onDivisionClick,
  onManagerClick,
  className = '',
}) => {
  const {
    initials = 'MK',
    name = 'Manoj Kandan M',
    genId = '255048778',
    email = 'Manoj.kandan@partner.samsung.com',
    designation = 'Outsourcing',
    division = 'Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools',
    manager = 'Ravindra S R (06786669)',
    isOnline = true,
  } = employee || {};

  return (
    <div className={`employee-profile-section ${className}`}>
      <Avatar_w2 initials={initials} isOnline={isOnline} onClick={onAvatarClick} />

      <UserInfo_w2
        name={name}
        genId={genId}
        email={email}
        onNameClick={onNameClick}
        onEmailClick={onEmailClick}
      />

      <ProfileCard_w2
        designation={designation}
        division={division}
        manager={manager}
        onDesignationClick={onDesignationClick}
        onDivisionClick={onDivisionClick}
        onManagerClick={onManagerClick}
      />
    </div>
  );
};

export default EmployeeProfile_w2;
