import React, { useReducer } from "react";
import { Outlet } from "react-router-dom";

import toggleFunc, { slideIn, slideOut, initialState } from "../../utils/slider.util";
import { stateType } from "../../types/side-menu.types";

import TypesHeader from "../TypesHeader";
import TypesSideMenu from "../TypesSideMenu";

const TypesLayout = () => {
	const [toggle, toggleDispatchFunc] = useReducer(toggleFunc, initialState);
	return (
		<>
			<TypesHeader slideIn={() => slideIn(toggleDispatchFunc)} />
			<TypesSideMenu slideOut={() => slideOut(toggleDispatchFunc)} toggle={toggle} />
			<Outlet />
		</>
	);
};

export default TypesLayout;
