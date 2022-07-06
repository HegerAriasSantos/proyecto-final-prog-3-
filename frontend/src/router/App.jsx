import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import { lazy, Suspense, useEffect } from "react";
import Loading from "../views/Loading";

const Home = lazy(() => import("../views/Home"));
const Nuevo = lazy(() => import("../views/Nuevo"));
const Register = lazy(() => import("../views/Register"));
const Login = lazy(() => import("../views/Login"));
const NotFound = lazy(() => import("../views/NotFound"));
const Admin = lazy(() => import("../views/Admin"));
const Trailer = lazy(() => import("../views/Trailer"));
const Update = lazy(() => import("../views/Update"));
const Create = lazy(() => import("../views/Create"));
const SearchPage = lazy(() => import("../views/SearchPage"));

const App = () => {
	useEffect(() => {
		window.scrollTo(0, 1);
	}, []);
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route element={<Home />} exact path='/' />
						<Route element={<SearchPage />} exact path='/search/:search' />
						<Route element={<Nuevo />} exact path='/nuevo' />
						<Route element={<Loading />} exact path='/loading' />
						<Route element={<Trailer />} exact path='/trailer/:id' />
					</Route>

					{/* Protected routes */}
					<Route path='/' element={<ProtectedRoute />}>
						<Route element={<Admin />} exact path='/admin' />
						<Route element={<Update />} exact path='/admin/trailer/:id' />
						<Route element={<Create />} exact path='/admin/create' />
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
