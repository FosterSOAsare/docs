import React from "react";

const Avatar = ({ image, email }: { image: string | null; email: string }) => {
	return (
		<div className="profile w-10 rounded-full h-10 bg-red-400 hover:shadow-custom overflow-hidden flex items-center justify-center">
			{image && <img src={image} className="w-full h-ful" alt="User" />}
			{!image && <p className="text-2xl font-bold">{email[0]?.toUpperCase()}</p>}
		</div>
	);
};

export default Avatar;
