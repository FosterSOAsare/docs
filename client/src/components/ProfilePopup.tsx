import React, { ReactNode, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useUserSlice } from "../slices/user.slice";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

type sortPopUpTypes = {
	setShowProfilePopup: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfilePopup = ({ setShowProfilePopup }: sortPopUpTypes) => {
	const user = useSelector(useUserSlice);
	const profileRef = useRef<any>();
	function logout() {
		setShowProfilePopup(false);
	}
	return (
		<div className={`w-[200px] h-auto bg-white absolute top-[110%] right-0  rounded-[5px] shadow-custom py-2`} ref={profileRef}>
			<Avatar image={user.user.image} email={user.user.email} sx="mx-auto block" />
			<p className="text-[14px] text-center opacity-80">{user.user.email}</p>
			<ul className="list-none h-auto mt-2 px-4">
				<li
					className="text-[14px] mb-[3px] flex justify-start items-center gap-2"
					onClick={() => {
						setShowProfilePopup(false);
					}}>
					<Link to="/profile" className="text-[14px] hover:text-blue-500 hover:underline">
						Edit profile
					</Link>
				</li>
				<button className="block rounded-[10px] h-10 mb-2 text-white bg-red-400 hover:bg-red-600 mt-4 w-full mx-auto" onClick={logout}>
					Logout
				</button>
			</ul>
		</div>
	);
};

export default ProfilePopup;
