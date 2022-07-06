import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./index.scss";
function index({ type }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [video, setVideo] = useState({
		actores: [],
		titulo: "",
		año: "",
		director: "",
		reseña: "",
		src: "",
		portada: "",
	});
	const typeTitle = type === "create" ? "Crear Trailer" : "Editar trailer";
	useEffect(() => {
		if (type === "create") return;
		axios.get(`http://localhost:4000/trailer/${id}`).then(res => {
			const { actores, titulo, año, director, reseña, src, portada } =
				res.data.body;
			setVideo({
				actores,
				titulo,
				año,
				director,
				reseña,
				src,
				portada,
			});
		});
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		if (type === "create") {
			axios.post(`http://localhost:4000/trailer`, video).then(res => {
				navigate("/admin");
			});
		} else {
			axios
				.patch(`http://localhost:4000/trailer/${id}`, { trailer: video })
				.then(res => {
					navigate("/admin");
				});
		}
	};

	const handleChange = e => {
		setVideo({
			...video,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeActores = e => {
		const value = e.target.value.split(",");
		setVideo({
			...video,
			actores: value,
		});
	};

	const handleChangeAño = e => {
		const reg = new RegExp("^[0-9]+$");
		if (reg.exec(e.target.value) || e.target.value == " ") {
			setVideo({
				...video,
				año: e.target.value,
			});
		}
	};

	return (
		<div className='AdminForm'>
			<h1>{typeTitle}</h1>
			<form onSubmit={handleSubmit}>
				<div className='row1'>
					<div className='titulo'>
						<label htmlFor='titulo'>
							Titulo
							<input
								type='text'
								name='titulo'
								placeholder=' Ej: La cucaracha'
								id='titulo'
								onChange={handleChange}
								value={video.titulo}
								required
							/>
						</label>
					</div>

					<div className='actores'>
						<label htmlFor='actores'>
							Actores
							<input
								type='text'
								name='actores'
								id='actores'
								placeholder='Ej: Juan, Pedro, Juan'
								onChange={handleChangeActores}
								value={video.actores}
								required
							/>
						</label>
					</div>
					<div className='año'>
						<label htmlFor='año'>
							Año
							<input
								type='text'
								name='año'
								id='año'
								placeholder='Ej: 2019'
								onChange={handleChangeAño}
								value={video.año}
								required
							/>
						</label>
					</div>
				</div>
				<div className='row2'>
					<div className='director'>
						<label htmlFor='director'>
							Director
							<input
								type='text'
								name='director'
								id='director'
								placeholder='Ej: Juan'
								onChange={handleChange}
								value={video.director}
								required
							/>
						</label>
					</div>

					<div className='src'>
						<label htmlFor='src'>
							Url del trailer
							<input
								type='text'
								name='src'
								id='src'
								placeholder='Ej: https://www.youtube.com/embed/dQw4w9WgXcQ'
								onChange={handleChange}
								value={video.src}
								required
							/>
						</label>
					</div>
					<div className='portada'>
						<label htmlFor='portada'>
							Url de la portada
							<input
								type='text'
								name='portada'
								id='portada'
								placeholder='Ej: https://i.imgur.com/pLbxazs.jpg'
								onChange={handleChange}
								value={video.portada}
								required
							/>
						</label>
					</div>
				</div>
				<div className='row3'>
					<div className='reseña'>
						<label htmlFor='reseña'>
							Reseña
							<textarea
								type='text'
								name='reseña'
								id='reseña'
								placeholder='Ej: La cucaracha es una pelicula de terror'
								onChange={handleChange}
								value={video.reseña}
								required
							/>
						</label>
					</div>
				</div>
				<div className='buttonContainer'>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default index;
