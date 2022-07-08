import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense, useEffect } from "react";
import Loading from "../views/Loading";

const Register = lazy(() => import("../views/Register"));
const Login = lazy(() => import("../views/Login"));
const NotFound = lazy(() => import("../views/NotFound"));
const Admin = lazy(() => import("../views/Admin"));
const Update = lazy(() => import("../views/Update"));
const Create = lazy(() => import("../views/Create"));
const DeudaForm = lazy(() => import("../components/DeudaForm"));

const App = () => {
	useEffect(() => {
		window.scrollTo(0, 1);
	}, []);
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					{/* Protected routes */}
					<Route path='/' element={<ProtectedRoute />}>
						<Route element={<Admin />} exact path='/' />
						<Route element={<Update />} exact path='/cliente/:id' />
						<Route element={<DeudaForm />} exact path='/deuda/:id' />
						<Route element={<Create />} exact path='/create' />
					</Route>
					<Route element={<Register />} exact path='/register' />
					<Route element={<Login />} exact path='/login' />
					<Route element={<NotFound />} path='*' />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
