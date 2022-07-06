import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import { useContext } from "../../Context";

function index({ type }) {
	const [form, setForm] = useState({
		name: "",
		password: "",
	});
	const { dispatch } = useContext();
	const typeURL = type === "login" ? "login" : "register";
	const typeTitle = type === "login" ? "Iniciar Sessión" : "Registrarse";

	let navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		if (!form.name || !form.password) {
			alert("Debe de llenar todos los campos");
			return;
		}
		axios.post("http://localhost:4000/user/" + typeURL, form).then(res => {
			localStorage.setItem("token", res.data.body.token);
			dispatch({ type: "update", payload: res.data.body.token });
			navigate("/admin");
		});
	};

	const handleChange = e => {
		e.preventDefault();
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='Form'>
			<h1>{typeTitle}</h1>
			<form className='form' autoComplete='off'>
				<div className='input-container'>
					<input
						required
						type='text'
						placeholder='Username'
						name='name'
						autoComplete='off'
						value={form.name}
						onChange={handleChange}
					/>
					<i className='zmdi zmdi-account zmdi-hc-lg'></i>
				</div>

				<div className='input-container'>
					<input
						required
						type='password'
						placeholder='Password'
						autoComplete='off'
						name='password'
						value={form.password}
						onChange={handleChange}
					/>{" "}
					<i className='zmdi zmdi-lock zmdi-hc-lg'></i>
				</div>
				<button onClick={handleSubmit} type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default index;
