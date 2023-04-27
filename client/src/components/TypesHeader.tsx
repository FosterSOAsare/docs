import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LogoIcon from "@assets/docs.svg";

type headerType = { slideIn: () => void; headerData: any };
const TypesHeader = ({ slideIn, headerData }: headerType) => {
	return (
		<div>
			<header className="w-full h-16  flex justify-between items-center px-3 md:px-8 border-b-2 border-border fixed bg-white z-10">
				<div className="flex items-center gap-3 ">
					<button className="w-10 h-10  flex justify-center items-center border-none hover:bg-hover rounded-[50%]" onClick={() => slideIn()}>
						<AiOutlineMenu size={18} />
					</button>
					<a className="flex items-center gap-1 text-[20px] hover:bg-hover  p-2 rounded-[5px]" href="/ ">
						<img src={headerData?.image} alt="" />
						<p className="font-medium">{headerData?.name}</p>
					</a>
				</div>
			</header>
		</div>
	);
};

export default TypesHeader;
