import { Link } from "react-router-dom";
import placeholder from "../../assets/img/placeholder.jpg";

function index(props) {
	const { reseña, portada, titulo, actores, año, id } = props;

	return (
		<tr>
			<td>
				<img
					src={portada ? portada : placeholder}
				/>
			</td>
			<td>
				<p>{titulo}</p>
			</td>
			<td>
				<p>
					{actores.map((actor, i) => (
						<span key={i}>{`${actor}  `} </span>
					))}
				</p>
			</td>
			<td>
				<p>{reseña}</p>
			</td>
			<td>
				<p>{año}</p>
			</td>
			<td>
				<div>
					<button
						className='delete'
						id={id}
						onClick={props.handleDelete}>
						Delete
					</button>
					<Link
						to={`/admin/trailer/${id}`}
						className='videoWrapper__info__link'>
						<button className='edit'>Edit</button>
					</Link>
				</div>
			</td>
		</tr>
	);
}

export default index;
