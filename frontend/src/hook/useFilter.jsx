export default function useFilter(videos, search) {
		const result = videos.filter(video => {
			return `${video.titulo} ${video.actores.map(actor => `${actor} `)} ${
				video.año
			}`
				.toLowerCase()
				.includes(search.toLowerCase());
		});
    return result;
}
