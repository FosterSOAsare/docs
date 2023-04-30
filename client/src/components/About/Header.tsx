import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { actionType } from "../../types/side-menu.types";

type headerTypes = {
	LogoIcon: string;
	slideIn: (toggle: React.Dispatch<actionType>) => void;
	toggleDispatchFunc: React.Dispatch<actionType>;
	name: string;
};

const Header = ({ LogoIcon, slideIn, toggleDispatchFunc, name }: headerTypes) => {
	return (
		<header className="w-full h-16  flex justify-between items-center px-3 md:px-8 border-b-2 border-border fixed bg-white z-10">
			<div className="flex items-center gap-3 ">
				<button className="w-10 h-10  flex justify-center items-center border-none hover:bg-hover rounded-[50%]" onClick={() => slideIn(toggleDispatchFunc)}>
					<AiOutlineMenu size={18} />
				</button>
				<a className="flex items-center gap-1 text-[20px] hover:bg-hover  p-2 rounded-[5px]" href="/ ">
					<img src={LogoIcon} alt="" />
					<p className="font-medium">Google {name}</p>
				</a>
			</div>
		</header>
	);
};

export default Header;