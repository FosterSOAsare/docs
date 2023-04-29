import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserSlice } from "../slices/user.slice";
import { Navigate, useLocation } from "react-router-dom";

import Loading from "../components/Loading";

const ProtectedPage = ({ element }: { element: ReactNode }): any => {
	const user = useSelector(useUserSlice);
	const [errorAction, setErrorAction] = useState();
	const location = useLocation();

	return (
		<>
			{user.loading && <Loading />}
			{!user.loading && user.user.email && <>{element}</>}
			{!user.loading && (user.error || !user.user.email) && <Navigate to={`${location.pathname}/about`}></Navigate>}
		</>
	);
};

export default ProtectedPage;
