import { Link } from "react-router-dom";

function index(props) {
	const {
		id,
		nombre,
		apellido,
		cedula,
		telefono,
		direccion,
		deuda,
		abono,
		total,
	} = props;

	return (
		<tr>
			<td>
				<p>{nombre}</p>
			</td>
			<td>
				<p>{apellido}</p>
			</td>
			<td>
				<p>{cedula}</p>
			</td>
			<td>
				<p>{telefono}</p>
			</td>
			<td>
				<p>{direccion}</p>
			</td>
			<td>
				<p>{deuda}</p>
			</td>
			<td>
				<p>{abono}</p>
			</td>
			<td>
				<p>{total}</p>
			</td>
			<td>
				<div>
					<button className='delete' id={id} onClick={props.handleDelete}>
						Borrar
					</button>
					<Link to={`/cliente/${id}`}>
						<button className='edit'>Editar</button>
					</Link>
					<Link to={`/deuda/${id}`}>
						<button className='abono'>Deuda/Abono</button>
					</Link>
				</div>
			</td>
		</tr>
	);
}

export default index;
