import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserSlice } from "../slices/user.slice";
import { Navigate } from "react-router-dom";

import Loading from "../components/Loading";

const NoDisplayAfterLogin = ({ element }: { element: ReactNode }): any => {
	const user = useSelector(useUserSlice);
	const [errorAction, setErrorAction] = useState();

	useEffect(() => {}, [user.error]);

	return (
		<>
			{!user.loading && !user.user.email && !user.user._id && <>{element}</>}
			{!user.loading && user.user.email && user.user._id && <Navigate to="/"></Navigate>}
		</>
	);
};

export default NoDisplayAfterLogin;
