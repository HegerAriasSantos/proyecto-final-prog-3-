import Video from "../Video";
import "./index.scss";
function index(props) {
	const { videos } = props;
	return (
		<div className='listOfVideos'>
			{videos.map(video => (
				<Video
					titulo={video.titulo}
					actores={video.actores}
					año={video.año}
					src={video.src}
					id={video._id}
					key={video._id}
					portada={video.portada}
					{...video}
				/>
			))}
		</div>
	);
}

export default index;
