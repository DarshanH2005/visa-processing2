import React from "react";
import "../styles/Avatars.css";
import Header_w2 from './Header_w2';
import EmployeeProfile_w2 from './EmployeeProfile_w2';
import RequiredInfo_w2 from './RequiredInfo_w2';
import TrainingVideos_w2 from './TrainingVideos_w2';

const Avatars = () => {
	// Event handlers for all clickable components (kept local to this copy)
	const handleBackClick = () => {
		console.log("Back button clicked (w2)");
	};

	const handleClockClick = () => {
		console.log("Clock icon clicked (w2)");
	};

	const handleAvatarClick = () => {
		console.log("Avatar clicked (w2)");
	};

	const handleNameClick = () => {
		console.log("Name clicked (w2)");
	};

	const handleEmailClick = () => {
		console.log("Email clicked (w2)");
	};

	const handleRequiredInfoClick = () => {
		console.log("Required Information clicked (w2)");
	};

	const handleDesignationClick = () => {
		console.log("Designation clicked (w2)");
	};

	const handleDivisionClick = () => {
		console.log("Division clicked (w2)");
	};

	const handleLocationClick = () => {
		console.log("Location clicked (w2)");
	};

	const handleManagerClick = () => {
		console.log("Manager clicked (w2)");
	};

	const employeeData = {
		initials: "MK",
		name: "Manoj Kandan M",
		genId: "255048878",
		email: "Manoj.kandan@partner.samsung.com",
		designation: "Outsourcing",
		division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
		manager: "Ravindra S R (06786669)",
		isOnline: true,
	};

	return (
		<div className="avatars-container">
			<Header_w2
				breadcrumb="My Workspace > Invitation & Visa Processing"
				title="Invitation & Visa Processing - (Employee Visa Info Update)"
				onBackClick={handleBackClick}
				onClockClick={handleClockClick}
			/>

			<EmployeeProfile_w2
				employee={employeeData}
				onAvatarClick={handleAvatarClick}
				onNameClick={handleNameClick}
				onEmailClick={handleEmailClick}
				onDesignationClick={handleDesignationClick}
				onDivisionClick={handleDivisionClick}
				onLocationClick={handleLocationClick}
				onManagerClick={handleManagerClick}
			/>

			<RequiredInfo_w2 onClick={handleRequiredInfoClick} />

			<TrainingVideos_w2 />
		</div>
	);
};

export default Avatars;
