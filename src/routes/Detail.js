import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState({});
	const { id } = useParams();
	const getMovies = async() => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setDetail(json.data.movie);
		setLoading(false);
		console.log(json);
	}
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div className="container">
			{loading ? (
				<div className="loader">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
			) : (
				<div>
					<div className="back-btn">
						<Link to="/">←</Link>
					</div>
					<div className="movie-detail">
						<div className="movie-detail-img">
							<img src={detail.large_cover_image} alt={detail.title} />
						</div>
						<div className="movie-detail-cont">
							<h2 className="title">{detail.title}</h2>
							<ul className="list">
								<li>rating: {detail.rating}</li>
								<li>runtime: {detail.runtime}</li>
								<li>year: {detail.year}</li>
								<li>genres: {detail.genres?.join(", ")}</li>
							</ul>
							<div className="desc">{detail.description_intro}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default Detail;