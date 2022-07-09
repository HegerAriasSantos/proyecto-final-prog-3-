import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useFilter from "./../../hook/useFilter";
import ClienteWrapper from "../../components/AdminVideo";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./index.scss";

function index() {
	const MySwal = withReactContent(Swal);

	const [clientes, setClientes] = useState([]);
	const [clientesFilted, setClienteFilted] = useState([]);

	const handleDelete = e => {
		MySwal.fire({
			title: "Seguro que quieres borrar este cliente?",
			text: "No podras recuperarlo!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				MySwal.fire("Deleted!", "Your file has been deleted.", "success");
				const id = e.target.id;
				axios.delete(`https://scrum-proyect.herokuapp.com/cliente/delete/${id}`).then(() => {
					setClienteFilted(clientes.filter(video => video._id !== id));
				});
			}
		});
	};
	useEffect(() => {
		axios("https://scrum-proyect.herokuapp.com/cliente").then(res => {
       const orderedDatas = res.data.body.sort(function (a, b) {
        if (a.deuda < b.deuda) {
          return 1;
        }
        if (a.deuda > b.deuda) {
          return -1;
        }
        return 0;
      });
      setClientes(orderedDatas);
			setClienteFilted(orderedDatas);
		});
	}, []);
	return (
		<div className='admin'>
			<div className='admin__header'>
				<h1>Administrar Clientes</h1>
			</div>
			<div className='admin__actions'>
				<Link to='/create'>
					<button>Create Cliente</button>
				</Link>
				<input
					type='text'
					id='search'
					placeholder='Buscar...'
					onChange={e => setClienteFilted(useFilter(clientes, e.target.value))}
				/>
			</div>
			<div className='admin__videos'>
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Cédula</th>
							<th>Teléfono</th>
							<th>Dirección</th>
							<th>Deuda</th>
							<th>Abono</th>
							<th>Total</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{clientesFilted.length > 0 ? (
							clientesFilted.map((cliente, i) => (
								<ClienteWrapper
									nombre={cliente.nombre}
									apellido={cliente.apellido}
									cedula={cliente.cedula}
									telefono={cliente.telefono}
									direccion={cliente.direccion}
									deuda={cliente.deuda}
									abono={cliente.abono}
									total={cliente.total}
									id={cliente._id}
									key={cliente._id ? cliente._id : i}
									handleDelete={handleDelete}
									{...cliente}
								/>
							))
						) : (
							<span></span>
						)}
					</tbody>
				</table>
				{clientesFilted.length === 0 && (
					<h2>No hay clientes que coincidan con su busqueda</h2>
				)}
			</div>
		</div>
	);
}

export default index;
