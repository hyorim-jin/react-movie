import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css"

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<div className="movie-item">
			<img src={coverImg} alt={title} className="img" />
			<h2 className="title">
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p className="summary">{summary}</p>
			<ul className="genres">
				{genres.map(g => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;