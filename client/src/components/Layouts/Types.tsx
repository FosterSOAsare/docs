import React, { useReducer, useState } from "react";
import { Outlet } from "react-router-dom";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import { stateType } from "../../types/side-menu.types";

import TypesHeader from "../TypesHeader";
import TypesSideMenu from "../TypesSideMenu";

const TypesLayout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	const [headerData, setHeaderData] = useState({ name: "", image: "" });

	return (
		<>
			<TypesHeader slideIn={() => slideIn(toggleDispatchFunc)} headerData={headerData} />
			<TypesSideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} headerData={headerData} />
			<Outlet context={{ setHeaderData }} />
		</>
	);
};

export default TypesLayout;
