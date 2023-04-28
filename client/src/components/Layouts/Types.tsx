import React, { useReducer, useState } from "react";
import { Outlet } from "react-router-dom";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";

import Header from "../Header";
import SideMenu from "../About/SideMenu";

const TypesLayout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [headerData, setHeaderData] = useState({ name: "", image: "" });

	return (
		<>
			<Header slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<SideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<Outlet context={{ setHeaderData }} />
		</>
	);
};

export default TypesLayout;
