import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

function index() {
	const { id } = useParams();
	const [trailer, setTrailer] = useState({});
	useEffect(() => {
		axios.get(`https://proyectowebfinal-backend.herokuapp.com/trailer/${id}`).then(res => {
			setTrailer(res.data.body);
      console.log( res.data.body.src);
		});
	}, []);

	return (
		<div className='trailer'>
			<div className='trailer__info'>
				<div className='trailer__info__portada'>
					<img
						src={trailer.portada}
						alt={`Portada de la pelicula ${trailer.titulo}`}
					/>
				</div>
				<div className='trailer__info__description'>
					<div className='titulo'>
						<p>{trailer.titulo}</p>
					</div>
					<div className='info'>
						<p>
							Director: <strong>{trailer.director}</strong>
						</p>
						<p>
							Actores: <strong>{trailer.actores} </strong>
						</p>
						<p>
							Año: <strong>{trailer.año} </strong>
						</p>
					</div>
					<p>{trailer.reseña}</p>
				</div>
			</div>

			<div className='trailer__video'>
				<iframe
					src={
						trailer.src
							? trailer.src
							: "https://www.youtube.com/embed/z9ZqsviNASs"
					}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
			</div>
		</div>
	);
}

export default index;
