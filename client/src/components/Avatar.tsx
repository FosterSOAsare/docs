import React, { useState, useRef, useEffect } from "react";
import ProfilePopup from "./ProfilePopup";
import closePopup from "../utils/close_popup";

const Avatar = ({ image, email, sx, type }: { image: string | null; email: string; sx?: string; type?: string }) => {
	const [showProfilePopup, setShowProfilePopup] = useState(false);
	const profileRef = useRef<any>();

	useEffect(() => {
		closePopup(profileRef, () => {
			setShowProfilePopup(false);
		});
	}, [closePopup]);
	return (
		<div className="relative" ref={profileRef}>
			<div className={`profile w-10 rounded-full h-10 bg-red-400 hover:shadow-custom overflow-hidden flex items-center justify-center ${sx}`} onClick={() => setShowProfilePopup(true)}>
				{image && <img src={image} className="w-full h-ful" alt="User" />}
				{!image && <p className="text-2xl font-bold">{email[0]?.toUpperCase()}</p>}
			</div>
			{type && type === "advanced" && showProfilePopup && <ProfilePopup setShowProfilePopup={setShowProfilePopup} />}
		</div>
	);
};

export default Avatar;
