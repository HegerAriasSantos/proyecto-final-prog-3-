import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./index.scss";
function index({ type }) {
	const navigate = useNavigate();
	const { id } = useParams();
	const [form, setForm] = useState({
		deuda: 0,
		abono: 0,
		total: 0,
	});
	const [cliente, setCliente] = useState({
		nombre: "",
		apellido: "",
		cedula: "",
		telefono: "",
		direccion: "",
		deuda: "",
		abono: "",
		total: "",
	});

	useEffect(() => {
		axios.get(`http://localhost:4000/cliente/${id}`).then(res => {
			const {
				nombre,
				apellido,
				cedula,
				telefono,
				direccion,
				deuda,
				abono,
				total,
			} = res.data.body;
			setCliente({
				nombre,
				apellido,
				cedula,
				telefono,
				direccion,
				deuda,
				abono,
				total,
			});
		});
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		if (form.abono > cliente.deuda) {
			alert("El abono no puede ser mayor que la deuda");
			return;
		}
		let data = {
			...cliente,
			deuda: Number(cliente.deuda) + Number(form.deuda),
			abono: Number(cliente.abono) + Number(form.abono),
		};
		data.total = data.deuda - data.abono;
		console.log(data);
		axios
			.patch(`http://localhost:4000/cliente/${id}`, { cliente: data })
			.then(res => {
				navigate("/");
			});
	};

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='AdminForm'>
			<h1>Abono / Deuda</h1>

			<div className='total'>
				<h3>Total : {cliente.total}</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='row1'>
					<div className='deuda'>
						<label htmlFor='deuda'>
							deuda
							<input
								type='text'
								name='deuda'
								placeholder=' Ej: Juan'
								id='deuda'
								onChange={handleChange}
								value={form.deuda}
								required
							/>
						</label>
					</div>

					<div className='abono'>
						<label htmlFor='abono'>
							abono
							<input
								type='text'
								name='abono'
								id='abono'
								placeholder='Ej: Pabro Duarte'
								onChange={handleChange}
								value={form.abono}
								required
							/>
						</label>
					</div>
				</div>
				<div className='buttonContainer'>
					<button type='submit'>Enviar</button>
				</div>
			</form>
		</div>
	);
}

export default index;
