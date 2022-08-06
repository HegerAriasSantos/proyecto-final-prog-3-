import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "../../Context";

const useAuth = () => {
	const { state } = useContext();
	return state.token ? true : false;
};

const ProtectedRoutes = props => {
	const auth = useAuth();
	return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoutes;
