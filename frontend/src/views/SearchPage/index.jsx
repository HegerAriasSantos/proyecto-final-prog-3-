import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import useFilter from "./../../hook/useFilter";
import ListOfVideos from "../../components/ListOfVideos";
import "./index.scss";

function index() {
	const { search } = useParams();
	const [results, setResults] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:4000/trailer`).then(data => {
			setResults(useFilter(data.data.body, search));
		});
	}, [search]);
	return (
		<div className='Search'>
			<h1>Busqueda: {search}</h1>
			{results.length > 0 ? (
				<ListOfVideos videos={results} />
			) : (
				<h2 className='notFound'>No hay resultados</h2>
			)}
		</div>
	);
}

export default index;
