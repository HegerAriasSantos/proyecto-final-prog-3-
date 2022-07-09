import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function index() {
	const MySwal = withReactContent(Swal);
	const [search, setSearch] = useState("");
	let navigate = useNavigate();
	const handleChange = e => {
		setSearch(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (search.length <= 0) {
			MySwal.fire({
				icon: "error",
				title: "Oops...",
				text: "No se puede realizar una busqueda vacia!",
			});
			return;
		}
		navigate(`/search/${search}`);
	};

	return (
		<div className='NavbarWrapper'>
			<div className='Navbar'>
				<Link to={`/`}>
					<div className='Navbar__logo'>
						<span>HFLJ Movies</span>
					</div>
				</Link>
				<div className='Navbar__search'>
					<form onSubmit={handleSubmit}>
						<input
							type='search'
							placeholder='Buscar...'
							value={search}
							onChange={handleChange}
						/>
            <button>Buscar</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default index;
