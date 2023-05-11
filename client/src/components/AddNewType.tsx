import React, { useEffect, useRef, useState } from "react";

import PlusImage from "../assets/new-plus.png";

import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddNewType = () => {
	const [show, setShow] = useState(false);
	const [rotate, setRotate] = useState(false);
	let buttonRef = useRef<any>();

	useEffect(() => {
		let parent: any = buttonRef.current;

		if (parent) {
			parent.addEventListener("mouseenter", () => {
				setTimeout(() => {
					setShow(true);
				}, 500);
				setRotate(true);
			});
			parent.addEventListener("mouseleave", () => {
				setShow(false);
				setRotate(false);
			});
		}
	}, []);
	return (
		<div className="absolute right-8 bottom-8 flex items-center justify-center gap-3 flex-col py-4 px-2" ref={buttonRef}>
			{show && (
				<>
					<div className=" rounded-full bg-white h-8 w-8 shadow-custom flex items-center justify-center  hover:cursor-pointer" title="Choose Template">
						<HiOutlineDocumentPlus className="text-xl" />
					</div>
					<Link
						to="/docs/new"
						className="rounded-full bg-white overflow-hidden p-3 h-12 w-12 shadow-custom flex items-center hover:cursor-pointer justify-center "
						title="Create new document">
						<BiPencil className="text-xl" />
					</Link>
				</>
			)}

			<div className={`plus rounded-full bg-white overflow-hidden p-3 h-12 w-12 shadow-custom flex ${show ? "hidden" : "block"} items-center justify-center hover:cursor-pointer `}>
				<img src={PlusImage} alt="" className={`w-full h-full ${rotate ? "rotate-90" : "-rotate-90"} transition-all ease-in duration-300`} />
			</div>
		</div>
	);
};

export default AddNewType;
