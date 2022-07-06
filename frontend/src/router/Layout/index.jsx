import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const index = props => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default index;
