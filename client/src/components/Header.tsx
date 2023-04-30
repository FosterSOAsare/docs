import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useUserSlice } from "../slices/user.slice";

import Avatar from "./Avatar";

type headerType = { slideIn: () => void; headerData: any };
const Header = ({ slideIn, headerData }: headerType) => {
	const user = useSelector(useUserSlice);

	const [searchFocus, setSearchFocus] = useState(false);
	return (
		<div>
			<header className="w-full h-16  flex justify-between items-center px-3 md:px-8   fixed bg-white z-10">
				<div className="flex items-center gap-3 ">
					<button className="w-10 h-10  flex justify-center items-center border-none hover:bg-hover rounded-[50%]" onClick={() => slideIn()}>
						<AiOutlineMenu size={18} />
					</button>
					<a className="flex items-center gap-1 text-[20px] hover:bg-hover  p-2 rounded-[5px]" href="/ ">
						<img src={headerData?.image} alt="" />
						<p className="font-medium">{headerData?.name}</p>
					</a>
				</div>
				<div className={`group w-[50%] h-[70%] rounded-[10px] ${searchFocus ? " shadow-custom" : "bg-search"} flex items-center justify-start px-4 gap-4`}>
					<div className="w-8 h-8 hover:bg-hover rounded-full flex items-center justify-center">
						<AiOutlineSearch />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="w-full h-[90%] text-md focus:outline-0 bg-transparent border-none"
						onFocus={() => setSearchFocus(true)}
						onBlur={() => setSearchFocus(false)}
					/>
				</div>

				{user.user && <Avatar image={user.user.image} email={user.user.email} />}
			</header>
		</div>
	);
};

export default Header;
