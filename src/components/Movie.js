import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<div className={styles.movie_item}>
			<img src={coverImg} alt={title} className={styles.img} />
			<h2 className={styles.title}>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
			<ul className={styles.genres}>
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